import AlbumCard from "@/components/album-card";

const albums = [
  { title: "Faded Echoes", year: "2023", imageId: "album-1" },
  { title: "Neon Shadows", year: "2022", imageId: "album-2" },
  { title: "Digital Soul", year: "2021", imageId: "album-3" },
  { title: "Cybernetic Dreams", year: "2020", imageId: "album-4" },
  { title: "Void Runner", year: "2019", imageId: "album-5" },
  { title: "Singularity", year: "2018", imageId: "album-6" },
];

export default function DiscographySection() {
  return (
    <section id="discography" className="w-full py-20 md:py-32 bg-background z-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-primary">
            Discography
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a sonic journey through a universe of fading echoes and neon shadows.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </section>
  );
}
