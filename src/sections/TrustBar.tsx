import { IconBadge } from '../components/ui'
import { trust } from '../content/site'

export function TrustBar() {
  return (
    <section aria-labelledby="trust-title" className="container-page pt-10 pb-12 lg:pt-14 lg:pb-[72px]">
      <div className="flex flex-col gap-1.5 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <h2 id="trust-title" className="t-eyebrow text-navy-900">
          {trust.label}
        </h2>
        <p className="t-small text-muted">{trust.note}</p>
      </div>
      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:mt-6 lg:gap-5 xl:grid-cols-5">
        {trust.items.map((item) => (
          <li
            key={item.title}
            className="flex items-center gap-3.5 rounded-[18px] border border-muted bg-white p-[18px] lg:min-h-[118px]"
          >
            <IconBadge icon={item.icon} className="bg-surface text-navy-900" />
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="t-label text-navy-900">{item.title}</p>
              <p className="t-small text-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
