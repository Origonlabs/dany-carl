import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

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
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-foreground">
            Upcoming Dates
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the sound of the future live. Join the vision.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {tourDates.map((tour, i) => (
              <li
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${150 * i}ms`, animationFillMode: 'backwards' }}
              >
                <div className="flex items-center p-6 rounded-lg bg-card border hover:bg-secondary/50 transition-colors duration-300 group">
                  <div className="flex flex-col items-center justify-center w-16 text-center mr-6">
                    <span className="text-3xl font-headline font-bold text-primary">{tour.date.split(' ')[0]}</span>
                    <span className="text-sm font-body tracking-wider text-muted-foreground">{tour.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold font-headline text-foreground">{tour.city}</h3>
                    <p className="text-muted-foreground">{tour.venue}</p>
                  </div>
                  <Button variant="outline" className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Ticket className="mr-2 h-4 w-4" />
                    Tickets
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
