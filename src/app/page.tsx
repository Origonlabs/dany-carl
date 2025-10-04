import Header from "@/components/header";
import HeroSection from "@/app/sections/hero-section";
import DiscographySection from "@/app/sections/discography-section";
import TourSection from "@/app/sections/tour-section";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <DiscographySection />
        <TourSection />
      </main>
    </div>
  );
}
