const tracks = [
  '7gFdC4PQz7S3dfm3L10n1L', // Faded
  '2D0mIbu5DkG1b4d4I0P39B', // The Spectre
  '3LlmK1i1tbtiUa0m3T3O32', // Alone
];

export default function MusicSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background/95 z-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-primary">
            Top Tracks
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The anthems of a generation. The sound of the future.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((trackId, i) => (
            <div
              key={trackId}
              className="animate-fade-in-up"
              style={{ animationDelay: `${200 * i}ms`, animationFillMode: 'backwards' }}
            >
              <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
