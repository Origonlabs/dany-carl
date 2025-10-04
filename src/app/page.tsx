import Header from "@/components/header";
import HeroSection from "@/app/sections/hero-section";
import DiscographySection from "@/app/sections/discography-section";
import StorySection from "@/app/sections/story-section";
import MusicSection from "@/app/sections/music-section";
import VideoSection from "@/app/sections/video-section";
import TourSection from "@/app/sections/tour-section";
import CopyrightSection from "@/app/sections/copyright-section";
import ContactSection from "@/app/sections/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <DiscographySection />
        <StorySection />
        <MusicSection />
        <VideoSection />
        <TourSection />
        <CopyrightSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}