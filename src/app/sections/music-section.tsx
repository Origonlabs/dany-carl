export default function MusicSection() {
  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 bg-background/95 z-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-primary">
            Listen on Spotify
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The full collection, right here. The sound of the future.
          </p>
        </div>
        <div
          className="max-w-5xl mx-auto animate-fade-in-up"
          style={{ animationDelay: `200ms`, animationFillMode: 'backwards' }}
        >
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/artist/1KYZDy7IEf3fxTuVYvu3UJ?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
