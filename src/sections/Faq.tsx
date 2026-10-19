import { useId, useState } from 'react'
import { Icon } from '../components/Icon'
import { Button, Eyebrow, IconBadge } from '../components/ui'
import { cx } from '../components/cx'
import { contact, faq } from '../content/site'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" aria-labelledby="faq-title" className="container-page py-16 lg:py-28">
      {/* Mobile order: intro → questions → support card. Desktop: intro + support card left, questions right. */}
      <div className="grid gap-7 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-6 xl:gap-x-20">
        <div className="flex flex-col gap-6">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 id="faq-title" className="t-h2">
            {faq.title}
          </h2>
          <p className="t-body text-body">{faq.intro}</p>
        </div>

        <ul className="flex flex-col gap-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            const qId = `${baseId}-q${i}`
            const aId = `${baseId}-a${i}`
            return (
              <li
                key={item.q}
                className={cx(
                  // Figma strokes sit inside the box, so the open item's border is an inset ring (no layout shift).
                  'rounded-[20px] transition-colors',
                  isOpen ? 'bg-white ring-1 ring-line ring-inset' : 'bg-surface',
                )}
              >
                <h3>
                  <button
                    id={qId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={aId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center gap-3.5 py-[18px] pr-[18px] pl-5 text-left lg:gap-6 lg:px-7 lg:py-6"
                  >
                    <span className="t-h3 flex-1 text-navy-900">{item.q}</span>
                    <span
                      className={cx(
                        'grid size-10 shrink-0 place-items-center rounded-full transition-colors',
                        isOpen ? 'bg-navy-900 text-white' : 'bg-white text-navy-900',
                      )}
                    >
                      <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  id={aId}
                  role="region"
                  aria-labelledby={qId}
                  hidden={!isOpen}
                  className="-mt-1.5 pr-[18px] pb-[18px] pl-5 lg:-mt-3 lg:px-7 lg:pb-6"
                >
                  <p className="t-body text-body">{item.a}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="flex flex-col items-start gap-4 rounded-3xl bg-navy-900 px-6 py-[26px] text-white lg:self-start lg:p-8">
          <IconBadge icon="headset" size={48} className="bg-solar-500 text-navy-900" />
          <h3 className="t-h3">{faq.support.title}</h3>
          <p className="t-small">{faq.support.text}</p>
          <Button href="#quote" className="w-full justify-between sm:w-auto sm:justify-start">
            {faq.support.cta}
          </Button>
          <a href={contact.phoneHref} className="flex items-center gap-2.5 t-label hover:underline">
            <Icon name="phone" size={18} className="text-solar-500" />
            {contact.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
