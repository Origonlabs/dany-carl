import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const tourDates = [
  { city: "Tomorrowland", venue: "Dreamville", date: "15 JUL" },
  { city: "Ushuaia", venue: "Ibiza", date: "22 JUL" },
  { city: "EDC", venue: "Mexico", date: "30 JUL" },
];

export default function TourPage() {
  return (
    <section id="tour" className="w-full py-24 sm:py-32 lg:py-40 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
            Próximas Fechas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Vive la experiencia del futuro en vivo. Únete a la visión.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {tourDates.map((tour, i) => (
            <div
              key={i}
              className="animate-fade-in-up"
              style={{ animationDelay: `${150 * i}ms`, animationFillMode: 'backwards' }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-lg bg-secondary border border-border group hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center gap-6 mb-4 sm:mb-0">
                  <div className="text-center">
                    <p className="text-3xl font-bold font-headline text-primary">{tour.date.split(' ')[0]}</p>
                    <p className="text-sm text-muted-foreground">{tour.date.split(' ')[1]}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-headline text-foreground">{tour.city}</h3>
                    <p className="text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4" /> {tour.venue}</p>
                  </div>
                </div>
                <Button variant="outline" className="transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  Tickets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
