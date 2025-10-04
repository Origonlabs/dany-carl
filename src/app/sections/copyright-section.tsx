"use client";
import { ShieldCheck, ImageIcon, MicVocal, MessageSquareWarning } from 'lucide-react';

export default function CopyrightSection() {
  return (
    <section id="copyright" className="w-full py-24 sm:py-32 lg:py-40 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
            Aviso de Derechos de Autor
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Toda la música, remixes e imágenes presentadas en esta plataforma son de DANY CARL y están protegidas por derechos de autor.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CopyrightCard 
            icon={<MicVocal className="h-10 w-10 mb-4 text-primary" />}
            title="Remixes"
            description="Si deseas usarlos en tu contenido, debes dar créditos mencionando 'DANY CARL' y enlazando mis redes."
            delay={200}
          />
          <CopyrightCard 
            icon={<ImageIcon className="h-10 w-10 mb-4 text-primary" />}
            title="Imágenes"
            description="Puedes usarlas libremente, pero sin modificarlas ni editarlas de ninguna forma."
            delay={300}
          />
          <CopyrightCard 
            icon={<ShieldCheck className="h-10 w-10 mb-4 text-primary" />}
            title="Consultas"
            description="Para cualquier consulta, contáctame a través de mis redes sociales o el formulario de contacto."
            delay={400}
          />
          <div className="animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}>
            <div className="bg-destructive/10 border-l-4 border-destructive p-8 rounded-lg h-full flex flex-col">
              <MessageSquareWarning className="h-10 w-10 mb-4 text-destructive" />
              <h3 className="font-headline text-xl font-bold text-destructive mb-3">Advertencia</h3>
              <p className="text-destructive/80">
                El uso no autorizado, monetización o distribución sin créditos puede resultar en medidas legales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CopyrightCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: `${delay}ms`, animationFillMode: 'backwards' }}>
      <div className="bg-secondary p-8 rounded-lg h-full text-center flex flex-col items-center">
        {icon}
        <h3 className="font-headline text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}