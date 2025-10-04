import AlbumCard from "@/components/album-card";

const albums = [
  { title: "Faded Echoes", year: "2023", imageId: "album-1" },
  { title: "Neon Shadows", year: "2022", imageId: "album-2" },
  { title: "Digital Soul", year: "2021", imageId: "album-3" },
  { title: "Cybernetic Dreams", year: "2020", imageId: "album-4" },
  { title: "Void Runner", year: "2019", imageId: "album-5" },
  { title: "Singularity", year: "2018", imageId: "album-6" },
];

export default function DiscographyPage() {
  return (
    <section id="discography" className="w-full py-24 sm:py-32 lg:py-40">
       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
            Discografía
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora un viaje sónico a través de un universo de ecos desvanecidos y sombras de neón.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {albums.map((album, i) => (
            <div
              key={album.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${150 * i}ms`, animationFillMode: 'backwards' }}
            >
              <AlbumCard album={album} />
            </div>
          ))}
        </div>
      </div>
       <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
}
