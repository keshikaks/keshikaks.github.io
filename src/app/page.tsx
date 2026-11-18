import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { ArchiveSection } from "@/components/ArchiveSection";
import { AboutSection } from "@/components/AboutSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { BeyondThePagesSection } from "@/components/BeyondThePagesSection";
import { PresenceAndContactSection } from "@/components/PresenceAndContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <FeaturedSection />
        <ArchiveSection />
        <AboutSection />
        <PhilosophySection />
        <BeyondThePagesSection />
        <PresenceAndContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
