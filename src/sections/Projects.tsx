import { useState } from 'react'
import { Icon } from '../components/Icon'
import { Button, Eyebrow } from '../components/ui'
import { cx } from '../components/cx'
import { projects } from '../content/site'
import { images } from '../content/images'

type Project = (typeof projects.items)[number]

function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  return (
    <article
      className={cx(
        'group relative isolate flex flex-col justify-end gap-3 overflow-hidden rounded-[28px] p-[22px] lg:p-8',
        large ? 'h-[380px] lg:h-full' : 'h-[300px] lg:h-auto lg:flex-1',
      )}
    >
      <img
        src={images.projects[project.image]}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-[#0a1a2e]/0 from-35% to-[#0a1a2e]/88"
        aria-hidden="true"
      />
      <span className="w-fit rounded-full border border-white bg-white px-3 py-1.5 t-eyebrow text-ink-80">
        {project.category}
      </span>
      <h3 className="t-h4 text-white">
        <a href="#projects" className="after:absolute after:inset-0">
          {project.title}
        </a>
      </h3>
      <p className="t-small text-white">{project.meta}</p>
      <span
        className="absolute top-[22px] right-[22px] grid size-[52px] place-items-center rounded-full bg-white text-navy-900 lg:top-8 lg:right-8"
        aria-hidden="true"
      >
        <Icon name="arrow-up-right" size={20} />
      </span>
    </article>
  )
}

export function Projects() {
  // The carousel arrows rotate which project takes the large slot.
  const [offset, setOffset] = useState(0)
  const n = projects.items.length
  const ordered = projects.items.map((_, i) => projects.items[(i + offset) % n])
  const step = (d: number) => setOffset((o) => (o + d + n) % n)

  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-surface py-16 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-5 lg:max-w-[720px]">
            <Eyebrow>{projects.eyebrow}</Eyebrow>
            <h2 id="projects-title" className="t-h2">
              {projects.title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous project"
              className="grid size-[52px] shrink-0 cursor-pointer place-items-center rounded-full border border-line bg-white text-navy-900 transition-colors hover:border-navy-900"
            >
              <Icon name="arrow-left" size={20} />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next project"
              className="grid size-[52px] shrink-0 cursor-pointer place-items-center rounded-full bg-navy-900 text-white transition-colors hover:bg-navy-800"
            >
              <Icon name="arrow-right" size={20} />
            </button>
            <Button href="#projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 lg:mt-12 lg:h-[640px] lg:flex-row lg:gap-6" aria-live="polite">
          <div className="lg:w-[53%]">
            <ProjectCard project={ordered[0]} large />
          </div>
          <div className="flex flex-col gap-4 lg:flex-1 lg:gap-6">
            <ProjectCard project={ordered[1]} />
            <ProjectCard project={ordered[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}
