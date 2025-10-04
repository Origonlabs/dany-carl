import Header from "@/components/header";
import HeroSection from "@/app/sections/hero-section";
import DiscographySection from "@/app/sections/discography-section";
import MusicSection from "@/app/sections/music-section";
import TourSection from "@/app/sections/tour-section";
import ContactSection from "@/app/sections/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <DiscographySection />
        <MusicSection />
        <TourSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
