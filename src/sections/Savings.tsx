import { Icon } from '../components/Icon'
import { Button, Eyebrow, IconBadge } from '../components/ui'
import { savings } from '../content/site'
import { images } from '../content/images'

export function Savings() {
  const { banner } = savings
  return (
    <section id="savings" aria-labelledby="savings-title" className="container-page py-16 lg:py-28">
      <div className="flex flex-col gap-[18px] lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-5 lg:max-w-[640px]">
          <Eyebrow>{savings.eyebrow}</Eyebrow>
          <h2 id="savings-title" className="t-h2">
            {savings.title}
          </h2>
        </div>
        <p className="t-lead text-body lg:max-w-[500px]">{savings.intro}</p>
      </div>

      <ul className="mt-7 grid gap-3 md:grid-cols-3 md:gap-5 lg:mt-14 lg:gap-8">
        {savings.benefits.map((b) => (
          <li key={b.title} className="flex flex-col gap-4 rounded-3xl bg-surface p-8">
            <IconBadge icon={b.icon} size={52} className="bg-white text-navy-900" />
            <h3 className="t-h3 text-navy-900">{b.title}</h3>
            <p className="t-small text-body">{b.text}</p>
          </li>
        ))}
      </ul>

      <div className="relative isolate mt-7 flex flex-col gap-5 overflow-hidden rounded-3xl px-[22px] pt-7 pb-[22px] lg:mt-14 lg:min-h-[420px] lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:rounded-[28px] lg:p-14">
        <img src={images.savingsBanner} alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover" />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-r from-[#081424]/92 via-[#081424]/45 via-60% to-[#081424]/10"
          aria-hidden="true"
        />
        <div className="flex flex-col items-start gap-5 lg:max-w-[580px]">
          {/* Figma sets this label white on the white pill (unreadable); it uses the on-dark eyebrow colour instead */}
          <Eyebrow tone="onDark">{banner.eyebrow}</Eyebrow>
          <h3 className="t-h4 text-white">{banner.title}</h3>
          <p className="t-body text-white">{banner.text}</p>
          <Button href="#quote" className="w-full justify-between sm:w-auto sm:justify-start">
            {banner.cta}
          </Button>
        </div>
        <p className="flex items-start gap-2.5 rounded-[14px] bg-night px-4 py-3 t-small text-white lg:max-w-[420px] lg:items-center">
          <Icon name="file" size={16} className="mt-[3px] shrink-0 text-solar-500 lg:mt-0" />
          {banner.disclaimer}
        </p>
      </div>
    </section>
  )
}
