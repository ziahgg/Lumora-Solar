import { Button, Eyebrow, IconBadge } from '../components/ui'
import { whyUs } from '../content/site'
import { images } from '../content/images'

export function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="container-page py-16 lg:py-28">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-20">
        <div className="relative isolate h-[420px] overflow-hidden rounded-[28px] md:h-[520px] lg:h-auto lg:w-[44%] lg:max-w-[560px] lg:shrink-0">
          {/* Desktop crop from Figma: the fill shows the band from 19% to 59% of the photo's width */}
          <img
            src={images.installationTeam}
            alt="Installer carrying a solar panel across a roof"
            loading="lazy"
            className="absolute inset-0 -z-10 size-full object-cover lg:object-[32%_50%]"
          />
          <div className="absolute inset-x-4 bottom-4 flex flex-col gap-3 rounded-[20px] bg-white p-6 shadow-note lg:inset-x-9 lg:bottom-10">
            <div className="flex items-center gap-3">
              <IconBadge icon="clipboard" size={40} />
              <p className="t-label text-navy-900">{whyUs.note.title}</p>
            </div>
            <p className="t-small text-body">{whyUs.note.text}</p>
          </div>
        </div>

        <div className="flex flex-col gap-[22px] lg:flex-1 lg:gap-7">
          <Eyebrow>{whyUs.eyebrow}</Eyebrow>
          <h2 id="why-title" className="t-h2">
            {whyUs.title}
          </h2>
          <p className="t-lead text-body">{whyUs.intro}</p>
          <ul>
            {whyUs.reasons.map((r) => (
              <li key={r.title} className="flex gap-5 border-b border-line py-6">
                <IconBadge icon={r.icon} size={52} />
                <div className="flex flex-col gap-1.5">
                  <h3 className="t-h3 text-navy-900">{r.title}</h3>
                  <p className="t-small text-body">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#quote" variant="dark" className="justify-between sm:justify-start">
              Book a Consultation
            </Button>
            <Button href="#how-it-works" variant="outline" className="justify-between sm:justify-start">
              See Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
