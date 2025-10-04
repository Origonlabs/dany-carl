import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Particles from "@/components/particles";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-background">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover animate-background-pan opacity-20"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <div className="absolute inset-0 aurora-bg z-0" />
      <Particles className="absolute inset-0 z-20" quantity={100} />
      
      <div className="relative z-30 flex flex-col items-center p-4">
        <div className="animate-fade-in">
          <h1 
            className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary glitch"
            data-text="DANY CARL"
          >
            DANY CARL
          </h1>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8 animate-fade-in animation-delay-200">
          Como DJ, mi objetivo es crear una experiencia musical inolvidable que conecte a las personas y las haga vibrar.
        </p>
        <Button asChild size="lg" className="font-bold text-lg bg-primary/90 hover:bg-primary text-primary-foreground transition-all duration-300 transform hover:scale-105 animate-fade-in animation-delay-400 rounded-full shadow-lg shadow-primary/30">
          <Link href="#discography">
            Listen Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
