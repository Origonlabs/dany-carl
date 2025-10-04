import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-background py-24 sm:py-32 lg:py-40">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover opacity-20"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      
      <div className="relative z-20 flex flex-col items-center p-4">
        <div className="animate-fade-in">
          <h1 
            className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-6 text-foreground"
          >
            DANY CARL
          </h1>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-10 animate-fade-in animation-delay-200">
          Como DJ, mi objetivo es crear una experiencia musical inolvidable que conecte a las personas y las haga vibrar.
        </p>
        <Button asChild size="lg" className="font-bold text-lg transition-transform transform hover:scale-105 animate-fade-in animation-delay-400 rounded-full shadow-lg">
          <Link href="#discography">
            Listen Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
