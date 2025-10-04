import AlbumCard from "@/components/album-card";

const albums = [
  { title: 'Faded Echoes', year: '2023', imageId: 'album-1' },
  { title: 'Neon Shadows', year: '2022', imageId: 'album-2' },
  { title: 'Digital Soul', year: '2022', imageId: 'album-3' },
  { title: 'Cybernetic Dreams', year: '2021', imageId: 'album-4' },
  { title: 'Void Runner', year: '2020', imageId: 'album-5' },
  { title: 'Singularity', year: '2019', imageId: 'album-6' },
];

export default function DiscographySection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
            Discography
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of past and present releases.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {albums.map((album) => (
            <AlbumCard key={album.title} album={album} />
          ))}
        </div>
      </div>
    </section>
  );
}
