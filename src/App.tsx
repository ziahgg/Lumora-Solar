import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { TrustBar } from './sections/TrustBar'
import { Services } from './sections/Services'
import { WhyChooseUs } from './sections/WhyChooseUs'
import { HowItWorks } from './sections/HowItWorks'
import { Packages } from './sections/Packages'
import { Projects } from './sections/Projects'
import { Savings } from './sections/Savings'
import { Testimonials } from './sections/Testimonials'
import { Faq } from './sections/Faq'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'

// Section order follows the Figma frame "Solar Energy Homepage — Desktop" (110:2706).
export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Packages />
        <Projects />
        <Savings />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
