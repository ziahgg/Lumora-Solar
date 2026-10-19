// The hero "Explore your solar options" card hands its answers to the quote form in the final CTA.
export type PropertyType = 'home' | 'business'
export type QuotePrefill = { zip: string; bill: string; propertyType: PropertyType }

const EVENT = 'lumora:quote-prefill'

export function sendQuotePrefill(detail: QuotePrefill) {
  window.dispatchEvent(new CustomEvent<QuotePrefill>(EVENT, { detail }))
}

export function onQuotePrefill(handler: (detail: QuotePrefill) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<QuotePrefill>).detail)
  window.addEventListener(EVENT, listener)
  return () => window.removeEventListener(EVENT, listener)
}
