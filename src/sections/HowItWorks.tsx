import { Button, Eyebrow, IconBadge } from '../components/ui'
import { howItWorks } from '../content/site'

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="bg-navy-900 py-16 text-white lg:py-28">
      <div className="container-page">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-5 text-center">
          <Eyebrow tone="onDark">{howItWorks.eyebrow}</Eyebrow>
          <h2 id="how-title" className="t-h2">
            {howItWorks.title}
          </h2>
          <p className="t-lead max-w-[600px]">{howItWorks.intro}</p>
        </div>

        <ol className="mt-8 grid gap-3 md:grid-cols-2 md:gap-6 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {howItWorks.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-[18px] rounded-3xl border border-white bg-navy-800 p-7">
              <div className="flex items-center justify-between">
                <span className="t-number text-solar-500">{String(i + 1).padStart(2, '0')}</span>
                {/* Figma colours steps 02/04's icons white on this white badge (invisible); all use #6f6b65 like 01/03 */}
                <IconBadge icon={step.icon} size={48} className="border border-white bg-white text-stone" />
              </div>
              <hr className="border-white" />
              <h3 className="t-h3">{step.title}</h3>
              <p className="t-small">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-[18px] rounded-[20px] border border-white bg-white p-5 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:py-5 lg:pr-5 lg:pl-8">
          <div className="flex items-start gap-3.5 lg:items-center">
            <IconBadge icon="calendar" className="bg-solar-500 text-navy-900" />
            <p className="t-h3 text-ink-80">{howItWorks.consult}</p>
          </div>
          <Button href="#quote" className="justify-between lg:justify-start">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
