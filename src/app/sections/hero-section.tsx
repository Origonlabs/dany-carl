import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-background py-24 sm:py-32 lg:py-40">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover opacity-10"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="relative z-20 flex flex-col items-center p-4">
        <h1 
          className="text-7xl md:text-9xl font-headline font-bold tracking-[-0.05em] uppercase text-foreground animate-fade-in"
        >
          DANY CARL
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/70 mt-6 mb-10 animate-fade-in animation-delay-200">
          Como DJ, mi objetivo es crear una experiencia musical inolvidable que conecte a las personas y las haga vibrar.
        </p>
        <Button asChild size="lg" className="font-bold text-lg transition-transform transform hover:scale-105 animate-fade-in animation-delay-400 rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="#discography">
            Escuchar Ahora
          </Link>
        </Button>
      </div>
    </section>
  );
}
