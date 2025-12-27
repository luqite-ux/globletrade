import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TrustBadges from "@/components/trust-badges"
import ValueProposition from "@/components/value-proposition"
import Services from "@/components/services"
import CaseStudies from "@/components/case-studies"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <ValueProposition />
      <Services />
      <CaseStudies />
      <Footer />
    </main>
  )
}
