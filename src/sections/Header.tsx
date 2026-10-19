import { useEffect, useState } from 'react'
import { Icon } from '../components/Icon'
import { Button } from '../components/ui'
import { cx } from '../components/cx'
import { announcement, contact, nav } from '../content/site'

export function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Lumora Solar — home">
      <span
        className={cx(
          'grid size-10 place-items-center rounded-xl',
          tone === 'light' ? 'bg-navy-900 text-solar-500' : 'bg-solar-500 text-navy-900',
        )}
      >
        <Icon name="sun" size={22} />
      </span>
      <span
        className={cx(
          'text-[18px] leading-6 font-medium tracking-[-0.01em] lg:text-[20px] lg:leading-[26px]',
          tone === 'light' ? 'text-navy-900' : 'text-white',
        )}
      >
        Lumora Solar
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on Escape and when the viewport grows past the desktop breakpoint.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 64rem)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <header id="top">
      {/* 01 Announcement bar */}
      <div className="bg-night text-white">
        <div className="container-page flex flex-col items-center gap-1.5 py-2.5 text-center lg:flex-row lg:justify-center lg:gap-3 lg:py-3 lg:text-left">
          <Icon name="zap" size={16} className="hidden shrink-0 text-solar-500 lg:block" />
          <p className="t-small">{announcement.text}</p>
          <a href="#quote" className="inline-flex shrink-0 items-center gap-1.5 t-label text-solar-500 hover:underline">
            {announcement.link}
            <Icon name="arrow-right" size={14} />
          </a>
        </div>
      </div>

      {/* Header */}
      <div className="relative border-b border-line bg-white">
        <div className="container-page flex items-center justify-between py-3 lg:py-[18px]">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-9">
              {nav.map((item) => (
                <li key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 py-2 t-label text-navy-900 hover:text-body"
                    aria-haspopup={item.children ? 'true' : undefined}
                  >
                    {item.label}
                    {item.children && (
                      <Icon
                        name="chevron-down"
                        size={16}
                        className="text-muted transition-transform group-focus-within:rotate-180 group-hover:rotate-180"
                      />
                    )}
                  </a>
                  {item.children && (
                    <div className="invisible absolute top-full left-1/2 z-30 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="w-60 rounded-2xl border border-line bg-white p-2 shadow-note">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="block rounded-xl px-3 py-2.5 t-small text-navy-900 hover:bg-surface"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a href={contact.phoneHref} className="hidden items-center gap-2.5 xl:flex">
              <span className="grid size-10 place-items-center rounded-full bg-surface text-navy-900">
                <Icon name="phone" size={18} />
              </span>
              <span className="flex flex-col">
                <span className="t-eyebrow text-muted">Talk to an expert</span>
                <span className="t-label text-navy-900">{contact.phone}</span>
              </span>
            </a>
            <Button href="#quote">Get a Free Quote</Button>
          </div>

          <button
            type="button"
            className="grid size-11 cursor-pointer place-items-center rounded-full bg-surface text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'plus' : 'menu'} size={20} className={cx(open && 'rotate-45')} />
          </button>
        </div>

        {/* Mobile menu — expands under the header, using the same nav, phone and CTA as desktop */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="absolute inset-x-0 top-full z-40 border-b border-line bg-white shadow-note lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 t-label text-navy-900 hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
            <a href={contact.phoneHref} className="mt-2 flex items-center gap-2.5 px-3 py-2">
              <span className="grid size-10 place-items-center rounded-full bg-surface text-navy-900">
                <Icon name="phone" size={18} />
              </span>
              <span className="flex flex-col">
                <span className="t-eyebrow text-muted">Talk to an expert</span>
                <span className="t-label text-navy-900">{contact.phone}</span>
              </span>
            </a>
            <div className="mt-3" onClick={() => setOpen(false)}>
              <Button href="#quote" className="w-full justify-between">
                Get a Free Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
