import {
  FaqSection,
  FooterLanding,
  HeaderLanding,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from '@/components/landing-page'

export default function HomePage() {
  return (
    <div>
      <HeaderLanding />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <FooterLanding />
    </div>
  )
}
