import { useState, type FormEvent } from 'react'
import { Button, Eyebrow, IconBadge } from '../components/ui'
import { FormNote, Segmented, SelectField, TextField } from '../components/fields'
import { hero } from '../content/site'
import { images } from '../content/images'
import { sendQuotePrefill, type PropertyType } from '../content/prefill'

const propertyOptions: { value: PropertyType; label: string; icon: 'home' | 'building' }[] = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'business', label: 'Business', icon: 'building' },
]

function EstimateCard() {
  const [zip, setZip] = useState('')
  const [bill, setBill] = useState('')
  const [propertyType, setPropertyType] = useState<PropertyType>('home')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    sendQuotePrefill({ zip, bill, propertyType })
    document.getElementById('quote')?.scrollIntoView()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-[18px] rounded-3xl bg-white px-5 py-[22px] shadow-card md:max-w-[440px] lg:mt-4 lg:w-[380px] lg:shrink-0 lg:p-7 xl:w-[400px]"
      aria-labelledby="estimate-title"
    >
      <div className="flex items-center gap-3">
        <IconBadge icon="sun" />
        <div className="flex flex-col gap-0.5">
          <h2 id="estimate-title" className="t-h3 text-navy-900">
            {hero.estimate.title}
          </h2>
          <p className="t-small text-muted">{hero.estimate.text}</p>
        </div>
      </div>
      <TextField
        label="Property ZIP code"
        name="zip"
        placeholder="Enter ZIP code"
        inputMode="numeric"
        autoComplete="postal-code"
        pattern="[0-9]{5}"
        required
        value={zip}
        onChange={setZip}
      />
      <SelectField
        label="Average monthly electric bill"
        name="bill"
        placeholder="Select a range"
        options={hero.estimate.billRanges}
        value={bill}
        onChange={setBill}
      />
      <Segmented
        label="Property type"
        name="hero-property-type"
        options={propertyOptions}
        value={propertyType}
        onChange={setPropertyType}
      />
      <Button type="submit" className="w-full justify-between">
        Check My Options
      </Button>
      <FormNote className="text-center">{hero.estimate.note}</FormNote>
    </form>
  )
}

export function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-3 pt-2 md:px-5 lg:px-10 lg:pt-4 xl:px-20" aria-label="Introduction">
      <div className="relative isolate overflow-hidden rounded-3xl lg:rounded-[32px]">
        <img
          src={images.hero}
          alt=""
          className="absolute inset-0 -z-10 size-full object-cover"
          fetchPriority="high"
        />
        {/* Figma overlay: navy 90%→70% top-to-bottom on mobile, 92%→55%→5% left-to-right on desktop */}
        <div
          className="absolute inset-0 -z-10 bg-linear-to-b from-[#081424]/90 to-[#081424]/70 lg:bg-linear-to-r lg:from-[#081424]/92 lg:via-[#081424]/55 lg:via-55% lg:to-[#081424]/5"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-6 px-4 pt-8 pb-4 md:px-8 md:pt-12 md:pb-8 lg:min-h-[760px] lg:gap-0 lg:p-0">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-8 lg:px-12 lg:pt-20 xl:px-16">
            <div className="flex flex-col gap-5 px-1 pb-2 lg:max-w-[680px] lg:gap-7 lg:p-0">
              <Eyebrow tone="onDark">{hero.eyebrow}</Eyebrow>
              <h1 className="t-display text-white">{hero.headline}</h1>
              <p className="t-lead max-w-[560px] text-white">{hero.copy}</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#quote" className="justify-between sm:justify-start">
                  Get a Free Quote
                </Button>
                <Button href="#how-it-works" variant="glass" className="justify-between sm:justify-start">
                  See How Solar Works
                </Button>
              </div>
            </div>
            <EstimateCard />
          </div>

          <ul className="flex flex-col gap-3.5 rounded-[20px] bg-white p-5 md:flex-row md:flex-wrap md:gap-x-10 lg:mt-auto lg:w-fit lg:max-w-[720px] lg:flex-nowrap lg:items-center lg:rounded-none lg:rounded-tr-[32px] lg:pt-8 lg:pr-12 lg:pb-7 lg:pl-12 xl:pl-16">
            {hero.highlights.map((h) => (
              <li key={h.title} className="flex items-center gap-3">
                <IconBadge icon={h.icon} />
                <span className="flex flex-col">
                  <span className="t-label text-navy-900">{h.title}</span>
                  <span className="t-small text-body">{h.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
