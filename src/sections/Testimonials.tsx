import { useRef, useState } from 'react'
import { Icon } from '../components/Icon'
import { Eyebrow } from '../components/ui'
import { cx } from '../components/cx'
import { testimonials } from '../content/site'

export function Testimonials() {
  const track = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    const el = track.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    if (!card) return
    setActive(Math.round(el.scrollLeft / (card.offsetWidth + 14)))
  }

  const goTo = (i: number) => {
    const el = track.current
    const card = el?.children[i] as HTMLElement | undefined
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 20, behavior: 'smooth' })
    setActive(i)
  }

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-surface py-16 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-[18px] lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-5 lg:max-w-[640px]">
            <Eyebrow>{testimonials.eyebrow}</Eyebrow>
            <h2 id="reviews-title" className="t-h2">
              {testimonials.title}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 lg:max-w-[460px]">
            <p className="t-body text-body">{testimonials.intro}</p>
            <p className="flex items-center gap-2.5 rounded-2xl border border-line bg-white px-[18px] py-2.5 t-label text-navy-900 lg:rounded-full">
              <Icon name="star" size={18} className="shrink-0 text-solar-500" />
              {testimonials.summary}
            </p>
          </div>
        </div>

        <ul
          ref={track}
          onScroll={onScroll}
          className="no-scrollbar relative -mx-5 mt-7 flex snap-x snap-mandatory scroll-px-5 gap-3.5 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 lg:mt-12 lg:gap-8"
        >
          {testimonials.items.map((meta, i) => (
            <li
              key={meta}
              className="flex w-[300px] shrink-0 snap-start flex-col gap-[22px] rounded-3xl border border-line bg-white p-6 md:w-auto lg:p-8"
              aria-label={`Testimonial ${i + 1} (placeholder)`}
            >
              <div className="flex items-center justify-between">
                <span className="flex gap-1 text-line" aria-label="Rating placeholder">
                  {Array.from({ length: 5 }, (_, s) => (
                    <Icon key={s} name="star" size={18} />
                  ))}
                </span>
                <span className="rounded-full bg-surface px-2.5 py-[5px] t-eyebrow text-muted">Placeholder</span>
              </div>
              <Icon name="quote" size={32} className="text-solar-500" />
              <blockquote className="t-lead flex-1 text-navy-900">{testimonials.quote}</blockquote>
              <hr className="border-line" />
              <div className="flex items-center gap-3.5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-surface text-muted">
                  <Icon name="user" size={22} />
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="t-label text-navy-900">Customer name</p>
                  <p className="t-small text-muted">{meta}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center justify-center gap-2 lg:mt-12">
          {testimonials.items.map((meta, i) => (
            <button
              key={meta}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={active === i}
              className={cx(
                'h-2 cursor-pointer rounded-full transition-all',
                active === i ? 'w-6 bg-navy-900' : 'w-2 bg-line hover:bg-muted',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
