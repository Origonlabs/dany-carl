export default function VideoSection() {
    return (
      <section id="video" className="w-full py-20 md:py-32 bg-background z-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-primary">
              Live Session
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out one of the latest live sessions.
            </p>
          </div>
          <div 
            className="max-w-4xl mx-auto animate-fade-in-up aspect-video" 
            style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
          >
            <iframe 
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdany.carl.188597%2Fvideos%2F1469092494448852%2F&show_text=false&width=560&t=0" 
                width="560" 
                height="314" 
                className="w-full h-full rounded-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300"
                style={{border:'none', overflow:'hidden'}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
          </div>
        </div>
      </section>
    );
  }