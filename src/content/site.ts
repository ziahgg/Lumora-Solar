// All copy is taken verbatim from the Figma homepage (desktop 110:2706 / mobile 110:3051).
// Bracketed values such as "[City, State]" are placeholders in the design — replace before launch.
import type { IconName } from '../components/Icon'

export const contact = {
  phone: '(555) 010-2026',
  phoneHref: 'tel:+15550102026',
  email: 'hello@lumorasolar.com',
  address: '[Street address], [City, State ZIP]',
  hours: '[Business hours]',
}

export const announcement = {
  text: 'Solar incentives may be available in your area — ask our team what could apply to your property.',
  link: 'Check eligibility',
}

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] }

export const nav: NavItem[] = [
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Residential Solar', href: '#services' },
      { label: 'Commercial Solar', href: '#services' },
      { label: 'Battery Storage', href: '#services' },
      { label: 'Panel Upgrades', href: '#services' },
      { label: 'Maintenance & Repairs', href: '#services' },
      { label: 'Energy Consultation', href: '#services' },
    ],
  },
  { label: 'About', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  {
    label: 'Resources',
    href: '#faq',
    children: [
      { label: 'Solar Guide', href: '#how-it-works' },
      { label: 'Incentives & Financing', href: '#savings' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Customer Support', href: '#faq' },
    ],
  },
  { label: 'Contact', href: '#quote' },
]

export const hero = {
  eyebrow: 'Residential & Commercial Solar',
  headline: 'Clean energy today. Lower energy costs for years to come.',
  copy: 'We design, install, and support solar and battery systems that fit your property and your budget — with a clear, itemized proposal before any work begins.',
  highlights: [
    { icon: 'clipboard', title: 'Free site', text: 'assessment' },
    { icon: 'pencil', title: 'Custom system', text: 'design' },
    { icon: 'file', title: 'Itemized', text: 'proposal' },
  ] satisfies { icon: IconName; title: string; text: string }[],
  estimate: {
    title: 'Explore your solar options',
    text: 'Start with a few details — we’ll follow up to schedule a free assessment.',
    note: 'No obligation. A specialist will review your details.',
    // The design shows a "Select a range" dropdown without options; these ranges are working defaults.
    billRanges: ['Under $100', '$100 – $200', '$200 – $300', '$300 – $500', '$500+'],
  },
}

export const trust = {
  label: 'Credentials & reviews',
  note: 'Placeholders — replace each item with verified certifications, ratings, and warranty terms.',
  items: [
    { icon: 'award', title: 'Certification', text: 'Add verified certification' },
    { icon: 'star', title: 'Customer rating', text: 'Connect your review platform' },
    { icon: 'shield', title: 'Product warranty', text: 'Add manufacturer terms' },
    { icon: 'clipboard', title: 'Workmanship warranty', text: 'Add your coverage terms' },
    { icon: 'file', title: 'License & insurance', text: 'Add license details' },
  ] satisfies { icon: IconName; title: string; text: string }[],
}

export const services = {
  eyebrow: 'Our Services',
  title: 'Solar services for homes, businesses, and everything in between.',
  intro:
    'From the first site visit to long-term maintenance, one team handles system design, installation, and ongoing service.',
  items: [
    {
      icon: 'home',
      image: 'residential',
      title: 'Residential Solar Installation',
      text: 'Rooftop and ground-mount systems designed around your roof, your energy use, and your goals.',
    },
    {
      icon: 'building',
      image: 'commercial',
      title: 'Commercial Solar Systems',
      text: 'Scalable systems for offices, warehouses, retail, and multi-unit properties, planned around your operations.',
    },
    {
      icon: 'battery',
      image: 'battery',
      title: 'Battery Storage',
      text: 'Store solar energy for evenings and outages, and gain more control over when you draw from the grid.',
    },
    {
      icon: 'refresh',
      image: 'upgrades',
      title: 'Solar Panel Upgrades',
      text: 'Expand or modernize an existing system with higher-efficiency panels, new inverters, or added storage.',
    },
    {
      icon: 'wrench',
      image: 'maintenance',
      title: 'Maintenance & Repairs',
      text: 'Inspections, cleaning, diagnostics, and repairs that help your system keep performing as designed.',
    },
    {
      icon: 'chat',
      image: 'consultation',
      title: 'Energy Consultation',
      text: 'An honest review of your usage, property, and options — including whether solar is the right fit.',
    },
  ] as const,
}

export const whyUs = {
  eyebrow: 'Why Choose Us',
  title: 'Built right, explained clearly, supported long after install.',
  intro: 'Going solar is a long-term decision. We focus on the details that matter over the life of your system.',
  note: {
    title: 'Before anything is installed',
    text: 'You get a site assessment, a custom design, and a proposal you can review line by line — then you decide.',
  },
  reasons: [
    {
      icon: 'panel',
      title: 'System quality',
      text: 'Proven panels, inverters, and mounting hardware, matched to your site conditions and goals.',
    },
    {
      icon: 'wrench',
      title: 'Expert installation',
      text: 'A trained crew follows a clear installation plan, keeps you updated, and leaves your property clean.',
    },
    {
      icon: 'zap',
      title: 'Energy efficiency',
      text: 'Layouts designed around roof orientation, shading, and how your household or business uses energy.',
    },
    {
      icon: 'file',
      title: 'Transparent proposals',
      text: 'Itemized pricing, equipment specs, and projected production — so you know exactly what you’re getting.',
    },
    {
      icon: 'headset',
      title: 'Ongoing support',
      text: 'Monitoring setup, maintenance options, and a team you can reach long after the install is done.',
    },
  ] satisfies { icon: IconName; title: string; text: string }[],
}

export const howItWorks = {
  eyebrow: 'How Solar Works',
  title: 'From first conversation to first kilowatt-hour.',
  intro: 'A clear, four-step process with one point of contact from start to finish.',
  steps: [
    {
      icon: 'chat',
      title: 'Free consultation',
      text: 'We review your energy bills, property, and goals, and answer every question — with no obligation.',
    },
    {
      icon: 'pencil',
      title: 'Custom system design',
      text: 'We model your roof and energy use, size the right system, and prepare an itemized proposal.',
    },
    {
      icon: 'wrench',
      title: 'Professional installation',
      text: 'Our crew installs your system, coordinates the required inspections, and keeps you informed.',
    },
    {
      icon: 'power',
      title: 'System activation',
      text: 'Once your system is approved to connect, we switch it on and set up production monitoring.',
    },
  ] satisfies { icon: IconName; title: string; text: string }[],
  consult: 'Not sure where to start? A free consultation is the first step.',
}

export type Package = {
  tag: string
  name: string
  text: string
  idealFor: string
  features: string[]
  cta: string
  featured?: boolean
}

export const packages = {
  eyebrow: 'Solutions & Packages',
  title: 'Solar systems sized for how you use energy.',
  intro:
    'Every property is different, so every proposal is custom. Use these options as a starting point for your conversation with our team.',
  note: 'Pricing depends on your property, energy use, equipment, and available incentives. Every proposal is itemized before you decide.',
  items: [
    {
      tag: 'For homes',
      name: 'Essential Solar',
      text: 'A grid-tied rooftop system designed to offset part of your household electricity use.',
      idealFor: 'Homeowners who want to rely less on the grid',
      features: [
        'Site assessment & custom design',
        'Panels, inverter, and mounting',
        'Installation & inspection coordination',
        'Production monitoring setup',
        'Itemized written proposal',
      ],
      cta: 'Get a Quote',
    },
    {
      tag: 'Solar + backup power',
      name: 'Solar + Storage',
      text: 'Solar paired with battery storage to keep essential circuits running and use more of the energy you produce.',
      idealFor: 'Households that want backup power and more energy independence',
      features: [
        'Everything in Essential Solar',
        'Battery storage sized to your needs',
        'Backup for selected circuits',
        'Smart energy monitoring',
        'Usage optimization guidance',
      ],
      cta: 'Get a Quote',
      featured: true,
    },
    {
      tag: 'For businesses',
      name: 'Commercial Solar',
      text: 'Scalable rooftop, carport, or ground-mount systems planned around your facility and operations.',
      idealFor: 'Offices, warehouses, retail, farms, and multi-unit properties',
      features: [
        'Energy use & load analysis',
        'Engineering & system design',
        'Phased installation planning',
        'Monitoring & performance reporting',
        'Ongoing maintenance options',
      ],
      cta: 'Request a Proposal',
    },
  ] satisfies Package[],
}

export const projects = {
  eyebrow: 'Featured Projects',
  title: 'Recent work across homes, businesses, and large-scale sites.',
  items: [
    {
      image: 'residential',
      category: 'Residential',
      title: 'Rooftop solar for a family home',
      meta: '[System size] · [City, State] · Placeholder details',
    },
    {
      image: 'commercial',
      category: 'Commercial',
      title: 'Commercial rooftop installation',
      meta: '[System size] · [City, State]',
    },
    {
      image: 'ground',
      category: 'Large-scale',
      title: 'Ground-mount solar array',
      meta: '[System size] · [City, State]',
    },
  ] as const,
}

export const savings = {
  eyebrow: 'Savings & Benefits',
  title: 'What going solar can mean for your property.',
  intro:
    'Solar can lower what you pay for electricity, give you more control over your energy, and reduce your environmental footprint.',
  benefits: [
    {
      icon: 'trending-down',
      title: 'Lower electricity bills',
      text: 'Producing your own power can reduce the electricity you buy from your utility. Your proposal estimates this using your actual bills.',
    },
    {
      icon: 'battery',
      title: 'Energy independence',
      text: 'Pair solar with battery storage to keep essentials running during outages and rely less on the grid.',
    },
    {
      icon: 'leaf',
      title: 'Environmental benefits',
      text: 'Every kilowatt-hour your panels produce is clean energy that doesn’t come from burning fossil fuels.',
    },
  ] satisfies { icon: IconName; title: string; text: string }[],
  banner: {
    eyebrow: 'Your numbers, explained',
    title: 'See your projected production and savings before you decide.',
    text: 'We base every estimate on your energy bills, roof, and local conditions — then walk you through each assumption.',
    cta: 'Get My Savings Estimate',
    disclaimer: 'Actual savings vary with location, energy use, utility rates, system size, and available incentives.',
  },
}

export const testimonials = {
  eyebrow: 'Testimonials',
  title: 'What our customers say.',
  intro: 'Ready for verified reviews. Replace each card with real customer feedback, shared with permission.',
  summary: '[Average rating] from [number] verified reviews',
  quote: 'Customer review placeholder. Replace with a verified review, shared with the customer’s permission.',
  items: ['City, State · Residential solar', 'City, State · Solar + storage', 'City, State · Commercial solar'],
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions we hear most often.',
  intro: 'Straight answers about the process, costs, and what to expect. Don’t see your question? Our team is happy to help.',
  support: {
    title: 'Still have questions?',
    text: 'Talk with a solar specialist about your property and your goals.',
    cta: 'Talk to an Expert',
  },
  items: [
    {
      q: 'How long does a solar installation take?',
      a: 'On-site installation is usually the shortest part. The full timeline also includes design, permitting, inspections, and utility approval — your proposal includes a project-specific schedule.',
    },
    {
      q: 'How much does a solar system cost?',
      a: 'Cost depends on system size, equipment, site conditions, and available incentives. After assessing your property, we provide an itemized proposal so you see every cost before you decide.',
    },
    {
      q: 'What maintenance do solar panels need?',
      a: 'Solar systems generally need little maintenance. Periodic inspections and occasional cleaning help them perform well, and monitoring helps flag issues early.',
    },
    {
      q: 'Do I need battery storage?',
      a: 'Not always. Storage is worth considering if you want backup power during outages or more control over when you use your solar energy. We’ll help you weigh the options.',
    },
    {
      q: 'What warranties are included?',
      a: 'Coverage depends on the equipment manufacturer and our installation terms. Your proposal lists each warranty and what it covers. [Add your warranty details.]',
    },
    {
      q: 'Is my property suitable for solar?',
      a: 'Roof orientation, shading, structure, and available space all matter. A site assessment tells us whether solar is a good fit — and if it isn’t, we’ll tell you.',
    },
  ],
}

export const finalCta = {
  eyebrow: 'Free Solar Assessment',
  title: 'Find out what solar can do for your property.',
  text: 'Request a no-obligation assessment. We’ll review your energy use and property, then prepare a custom, itemized proposal.',
  checklist: ['No obligation', 'Custom system design', 'Itemized proposal'],
  form: {
    title: 'Request your free quote',
    text: 'Tell us a little about your property and we’ll be in touch.',
    consent: 'By submitting, you agree to be contacted about your request.',
  },
}

export const footer = {
  blurb: 'Solar design, installation, and support for homes and businesses. [Add your service region.]',
  newsletter: {
    title: 'Solar tips & updates',
    text: 'Occasional insights on incentives, battery storage, and getting more from your system.',
  },
  social: [
    { icon: 'linkedin', label: 'LinkedIn' },
    { icon: 'facebook', label: 'Facebook' },
    { icon: 'instagram', label: 'Instagram' },
    { icon: 'youtube', label: 'YouTube' },
  ] satisfies { icon: IconName; label: string }[],
  columns: [
    {
      title: 'Services',
      links: [
        'Residential Solar',
        'Commercial Solar',
        'Battery Storage',
        'Panel Upgrades',
        'Maintenance & Repairs',
        'Energy Consultation',
      ],
    },
    { title: 'Company', links: ['About Us', 'Projects', 'Reviews', 'Careers', 'Contact'] },
    { title: 'Resources', links: ['Solar Guide', 'Incentives & Financing', 'Blog', 'FAQ', 'Customer Support'] },
    {
      title: 'Service Areas',
      links: ['[Service area 1]', '[Service area 2]', '[Service area 3]', '[Service area 4]', 'View all areas'],
    },
  ],
  legal: ['Privacy Policy', 'Terms of Service', 'Accessibility', 'Sitemap'],
  copyright: '© 2026 Lumora Solar. All rights reserved.',
}
