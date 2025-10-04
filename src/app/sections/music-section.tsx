export default function MusicSection() {
  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
            Escucha en Spotify
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            La colección completa, aquí mismo. El sonido del futuro.
          </p>
        </div>
        <div
          className="max-w-5xl mx-auto animate-fade-in-up"
          style={{ animationDelay: `200ms`, animationFillMode: 'backwards' }}
        >
          <div className="overflow-hidden border">
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/artist/1KYZDy7IEf3fxTuVYvu3UJ?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
