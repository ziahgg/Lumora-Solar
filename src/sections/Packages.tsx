import { Icon } from '../components/Icon'
import { Button, CheckDot, Eyebrow } from '../components/ui'
import { cx } from '../components/cx'
import { packages, type Package } from '../content/site'

function PackageCard({ pkg }: { pkg: Package }) {
  const dark = pkg.featured
  return (
    <li
      className={cx(
        'flex flex-col gap-[22px] rounded-[28px] border px-[22px] py-[26px] lg:p-8',
        dark ? 'border-navy-900 bg-navy-900 text-white' : 'border-line bg-white text-navy-900',
        // Mobile lists the featured package first; desktop keeps it in the middle column.
        dark && 'order-first lg:order-none',
      )}
    >
      <span
        className={cx(
          'w-fit rounded-full px-3 py-1.5 t-eyebrow text-navy-900',
          dark ? 'bg-solar-500' : 'bg-solar-100',
        )}
      >
        {pkg.tag}
      </span>
      <div className="flex flex-col gap-2.5">
        <h3 className="t-h4">{pkg.name}</h3>
        <p className={cx('t-small', dark ? 'text-white' : 'text-body')}>{pkg.text}</p>
      </div>
      <hr className={dark ? 'border-white' : 'border-line'} />
      <div className="flex flex-col gap-1">
        <p className={cx('t-eyebrow', dark ? 'text-solar-500' : 'text-muted')}>Ideal for</p>
        <p className="t-label">{pkg.idealFor}</p>
      </div>
      <ul className="flex flex-col gap-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-center gap-3 t-small">
            <CheckDot className={dark ? 'bg-solar-500 text-navy-900' : 'bg-leaf-100 text-leaf-600'} />
            {f}
          </li>
        ))}
      </ul>
      <hr className={dark ? 'border-white' : 'border-line'} />
      <div className="flex flex-col gap-0.5">
        <p className={cx('t-eyebrow', dark ? 'text-solar-500' : 'text-muted')}>Pricing</p>
        <p className="t-h3">Custom quote</p>
      </div>
      <Button href="#quote" variant={dark ? 'primary' : 'dark'} className="w-full justify-between">
        {pkg.cta}
      </Button>
    </li>
  )
}

export function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-title" className="container-page py-16 lg:py-28">
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-5 text-center">
        <Eyebrow>{packages.eyebrow}</Eyebrow>
        <h2 id="packages-title" className="t-h2">
          {packages.title}
        </h2>
        <p className="t-lead max-w-[640px] text-body">{packages.intro}</p>
      </div>
      <ul className="mx-auto mt-8 grid max-w-[560px] gap-4 lg:mt-14 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-8">
        {packages.items.map((pkg) => (
          <PackageCard key={pkg.name} pkg={pkg} />
        ))}
      </ul>
      <p className="mt-8 flex items-start gap-2.5 t-small text-muted lg:mt-14 lg:items-center lg:justify-center">
        <Icon name="file" size={18} className="mt-0.5 shrink-0 lg:mt-0" />
        {packages.note}
      </p>
    </section>
  )
}
