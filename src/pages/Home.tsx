import { AboutSection } from '../sections/AboutSection'
import { FAQSection } from '../sections/FAQSection'
import { FinalCTA } from '../sections/FinalCTA'
import { HeroSection } from '../sections/HeroSection'
import { HowToBookSection } from '../sections/HowToBookSection'
import { LocationSection } from '../sections/LocationSection'
import { ProfessionalSection } from '../sections/ProfessionalSection'
import { ServicesSection } from '../sections/ServicesSection'
import { ValuesSection } from '../sections/ValuesSection'

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProfessionalSection />
      <ValuesSection />
      <HowToBookSection />
      <LocationSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
