import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Particles from "@/components/particles";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover animate-background-pan"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/60 z-10 aurora-bg" />
      <Particles className="absolute inset-0 z-20" />
      
      <div className="relative z-30 flex flex-col items-center p-4">
        <h1 
          className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-foreground/80 to-foreground glitch animate-fade-in"
          data-text="EXPLORE THE SOUND OF THE FUTURE"
        >
          EXPLORE THE SOUND OF THE FUTURE
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8 animate-fade-in animation-delay-200">
          Welcome to the world of EchoVision. A journey through soundscapes of a world yet to come.
        </p>
        <Button asChild size="lg" className="font-bold text-lg bg-primary/90 hover:bg-primary text-primary-foreground transition-all duration-300 transform hover:scale-105 animate-fade-in animation-delay-400">
          <Link href="#">
            Listen Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
