import { Icon } from '../components/Icon'
import { Button, Eyebrow, IconBadge } from '../components/ui'
import { services } from '../content/site'
import { images } from '../content/images'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface py-16 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-5 lg:max-w-[680px]">
            <Eyebrow>{services.eyebrow}</Eyebrow>
            <h2 id="services-title" className="t-h2">
              {services.title}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 lg:max-w-[420px]">
            <p className="t-body text-body">{services.intro}</p>
            <Button href="#services-list" variant="outline">
              View All Services
            </Button>
          </div>
        </div>

        {/* Mobile: swipeable row of 300px cards. md+: grid (3 × 2 on desktop). */}
        <ul
          id="services-list"
          className="no-scrollbar relative -mx-5 mt-7 flex snap-x snap-mandatory scroll-px-5 gap-3.5 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 lg:mt-14 lg:grid-cols-3"
        >
          {services.items.map((s) => (
            <li
              key={s.title}
              className="flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-line bg-white md:w-auto"
            >
              <img
                src={images.services[s.image]}
                alt=""
                loading="lazy"
                className="h-[230px] w-full object-cover"
              />
              <div className="flex flex-1 flex-col items-start gap-3.5 px-7 pt-7 pb-[30px]">
                <IconBadge icon={s.icon} size={48} />
                <h3 className="t-h3 text-navy-900">{s.title}</h3>
                <p className="t-small text-body">{s.text}</p>
                <a href="#quote" className="group mt-auto inline-flex items-center gap-2 t-label text-navy-900">
                  Learn more
                  <span className="sr-only">about {s.title}</span>
                  <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
