import { useEffect, useState, type FormEvent } from 'react'
import { Button, CheckDot, Eyebrow } from '../components/ui'
import { FormNote, SelectField, TextField } from '../components/fields'
import { contact, finalCta } from '../content/site'
import { images } from '../content/images'
import { onQuotePrefill } from '../content/prefill'

const propertyLabels = { home: 'Home', business: 'Business' } as const

export function FinalCta() {
  const [zip, setZip] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [sent, setSent] = useState(false)

  // Answers from the hero estimate card carry over into this form.
  useEffect(
    () =>
      onQuotePrefill((d) => {
        if (d.zip) setZip(d.zip)
        setPropertyType(propertyLabels[d.propertyType])
      }),
    [],
  )

  // Static site: there is no backend yet, so the form confirms locally. Point it at a
  // form service (e.g. a hosted form endpoint) before launch.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="quote" aria-labelledby="quote-title" className="mx-auto max-w-[1440px] px-3 pb-14 md:px-5 lg:px-10 lg:pb-28 xl:px-20">
      <div className="relative isolate flex flex-col gap-7 overflow-hidden rounded-3xl px-4 pt-8 pb-4 md:px-8 md:pt-12 md:pb-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:rounded-[32px] lg:p-12 xl:gap-16 xl:p-16">
        <img src={images.ctaPanel} alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover" />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-r from-[#081424]/94 to-[#081424]/62"
          aria-hidden="true"
        />

        <div className="flex flex-col items-start gap-5 px-1 lg:max-w-[628px] lg:gap-6 lg:px-0">
          <Eyebrow tone="onDark">{finalCta.eyebrow}</Eyebrow>
          <h2 id="quote-title" className="t-h2 text-white">
            {finalCta.title}
          </h2>
          <p className="t-lead text-white">{finalCta.text}</p>
          <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {finalCta.checklist.map((c) => (
              <li key={c} className="flex items-center gap-2 t-label text-white">
                <CheckDot className="bg-solar-500 text-navy-900" />
                {c}
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="#quote-form" className="justify-between sm:justify-start">
              Request a Solar Assessment
            </Button>
            <Button href={contact.phoneHref} variant="glass" className="justify-between sm:justify-start">
              Call {contact.phone}
            </Button>
          </div>
        </div>

        <form
          id="quote-form"
          onSubmit={onSubmit}
          className="flex w-full flex-col gap-4 rounded-3xl bg-white px-5 py-6 shadow-form md:mx-auto md:max-w-[460px] lg:mx-0 lg:w-[420px] lg:shrink-0 lg:p-8 xl:w-[460px]"
          aria-labelledby="quote-form-title"
        >
          <h3 id="quote-form-title" className="t-h4 text-navy-900">
            {finalCta.form.title}
          </h3>
          <p className="t-small text-muted">{finalCta.form.text}</p>
          <div className="grid grid-cols-2 gap-3">
            <TextField label="First name" name="firstName" placeholder="First name" autoComplete="given-name" required />
            <TextField label="Last name" name="lastName" placeholder="Last name" autoComplete="family-name" required />
          </div>
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
            required
          />
          <TextField label="Phone" name="phone" type="tel" placeholder="(000) 000-0000" autoComplete="tel" inputMode="tel" />
          <SelectField
            label="Property type"
            name="propertyType"
            placeholder="Home or business"
            options={['Home', 'Business']}
            value={propertyType}
            onChange={setPropertyType}
          />
          <TextField
            label="ZIP code"
            name="zip"
            placeholder="Enter ZIP code"
            inputMode="numeric"
            autoComplete="postal-code"
            pattern="[0-9]{5}"
            value={zip}
            onChange={setZip}
          />
          <Button type="submit" className="w-full justify-between">
            Get My Free Quote
          </Button>
          <FormNote className="text-center">
            <span role="status">{sent ? 'Thanks — we’ll be in touch about your request soon.' : finalCta.form.consent}</span>
          </FormNote>
        </form>
      </div>
    </section>
  )
}
