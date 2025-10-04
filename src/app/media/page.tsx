export default function MediaPage() {
    return (
        <div className="w-full py-24 sm:py-32 lg:py-40">
            <section id="music" className="w-full pb-24 sm:pb-32 lg:pb-40 bg-secondary/50">
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
                    <div className="overflow-hidden rounded-lg border-2 border-primary/20 shadow-xl shadow-primary/10">
                        <iframe
                        data-testid="embed-iframe"
                        src="https://open.spotify.com/embed/artist/1KYZDy7IEf3fxTuVYvu3UJ?utm_source=generator&theme=0"
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

            <section id="video" className="w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
                    Live Session
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Mira una de las últimas sesiones en vivo.
                    </p>
                </div>
                <div 
                    className="max-w-4xl mx-auto animate-fade-in-up aspect-video rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10"
                    style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
                >
                    <iframe 
                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdany.carl.188597%2Fvideos%2F1469092494448852%2F&show_text=false&width=560&t=0" 
                        className="w-full h-full"
                        style={{border:'none', overflow:'hidden'}} 
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    </iframe>
                </div>
                </div>
            </section>
        </div>
    );
  }
  