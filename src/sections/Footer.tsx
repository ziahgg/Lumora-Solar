import { useState, type FormEvent } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { Button } from '../components/ui'
import { contact, footer } from '../content/site'
import { Logo } from './Header'

const contactRows: { icon: IconName; text: string; href?: string }[] = [
  { icon: 'phone', text: contact.phone, href: contact.phoneHref },
  { icon: 'mail', text: contact.email, href: `mailto:${contact.email}` },
  { icon: 'pin', text: contact.address },
  { icon: 'clock', text: contact.hours },
]

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const onSubscribe = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-night text-white">
      <div className="container-page pt-14 pb-8 lg:pt-[88px] lg:pb-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-5 lg:max-w-[400px]">
            <Logo tone="dark" />
            <p className="t-small">{footer.blurb}</p>
            <ul className="flex gap-2.5">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <a
                    href="#top"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full bg-white text-ink-80 transition-colors hover:bg-solar-500 hover:text-navy-900"
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubscribe} className="flex flex-col gap-3.5 lg:w-[480px]" aria-labelledby="newsletter-title">
            <h2 id="newsletter-title" className="t-h3">
              {footer.newsletter.title}
            </h2>
            <p className="t-small">{footer.newsletter.text}</p>
            <div className="flex h-[66px] items-center gap-2 rounded-full border border-white bg-white py-1.5 pr-1.5 pl-[22px]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="h-full min-w-0 flex-1 bg-transparent t-body text-navy-900 placeholder:text-stone focus:outline-none"
              />
              <Button type="submit">Subscribe</Button>
            </div>
            <p role="status" className="t-small text-solar-500 empty:hidden">
              {subscribed ? 'Thanks for subscribing.' : ''}
            </p>
          </form>
        </div>

        <hr className="mt-8 border-white lg:mt-14" />

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:mt-14 lg:flex lg:justify-between">
          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3.5 lg:w-[200px]">
              <h2 className="t-eyebrow text-solar-500">{col.title}</h2>
              <ul className="flex flex-col gap-3.5 t-small">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="t-small hover:text-solar-500">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="col-span-2 flex flex-col gap-3.5 md:col-span-2 lg:w-[260px]">
            <h2 className="t-eyebrow text-solar-500">Contact</h2>
            <ul className="flex flex-col gap-3.5 t-small">
              {contactRows.map((row) => (
                <li key={row.icon} className="flex items-center gap-2.5 t-small">
                  <Icon name={row.icon} size={16} className="shrink-0 text-solar-500" />
                  {row.href ? (
                    <a href={row.href} className="hover:text-solar-500">
                      {row.text}
                    </a>
                  ) : (
                    <span>{row.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-8 border-white lg:mt-14" />

        <div className="mt-8 flex flex-col gap-3.5 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <p className="t-small">{footer.copyright}</p>
          <ul className="flex flex-wrap gap-x-[18px] gap-y-2 t-small lg:gap-6">
            {footer.legal.map((l) => (
              <li key={l}>
                <a href="#top" className="t-small hover:text-solar-500">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
