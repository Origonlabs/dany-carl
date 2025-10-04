import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center p-4">
        <div className="animate-fade-in">
          <h1 
            className="text-7xl md:text-9xl font-headline font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50"
            style={{ WebkitTextStroke: '1px hsla(var(--primary), 0.5)' }}
          >
            DANY CARL
          </h1>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-6 mb-10 animate-fade-in animation-delay-200">
          Como DJ, mi objetivo es crear una experiencia musical inolvidable que conecte a las personas y las haga vibrar.
        </p>
        <div className="animate-fade-in animation-delay-400">
          <Button asChild size="lg" variant="outline" className="font-bold text-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary">
            <Link href="/discography">
              Explorar Música
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
