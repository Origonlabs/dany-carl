import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tourDates = [
  { city: "Tomorrowland", venue: "Dreamville", date: "15 JUL" },
  { city: "Ushuaia", venue: "Ibiza", date: "22 JUL" },
  { city: "EDC", venue: "Mexico", date: "30 JUL" },
];

export default function TourSection() {
  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
            Próximas Fechas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Vive la experiencia del futuro en vivo. Únete a la visión.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className="border-t">
            {tourDates.map((tour, i) => (
              <li
                key={i}
                className="animate-fade-in-up border-b"
                style={{ animationDelay: `${150 * i}ms`, animationFillMode: 'backwards' }}
              >
                <div className="flex items-center p-6 group">
                  <div className="w-24 text-left">
                    <span className="text-lg font-headline font-bold text-foreground">{tour.date}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold font-headline text-foreground">{tour.city}</h3>
                    <p className="text-muted-foreground">{tour.venue}</p>
                  </div>
                  <Button variant="ghost" className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Tickets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
