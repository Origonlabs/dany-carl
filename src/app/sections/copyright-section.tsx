"use client";

import { Music, Image as ImageIcon, Mail, AlertTriangle } from "lucide-react";

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-card rounded-lg border border-border p-6 transition-shadow duration-300 hover:shadow-lg hover:border-primary/50">
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-headline text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">
          {children}
        </p>
      </div>
    </div>
  </div>
);

export default function CopyrightSection() {
  return (
    <section id="copyright" className="w-full py-24 sm:py-32 lg:py-40 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-foreground">
            Aviso de Derechos de Autor
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Toda la música, remixes e imágenes presentadas en esta plataforma son de DANY CARL y están protegidas por derechos de autor.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
            <InfoCard icon={<Music className="h-6 w-6 text-primary" />} title="Remixes">
              Los remixes creados por DANY CARL son versiones únicas con un enfoque artístico propio. Si deseas usarlos en tu contenido, debes dar créditos, ya sea en el título o en la descripción, mencionando mi nombre (DANY CARL) y enlazando mis redes o plataformas.
            </InfoCard>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
            <InfoCard icon={<ImageIcon className="h-6 w-6 text-primary" />} title="Imágenes y Diseño">
              Las imágenes utilizadas en esta plataforma (portadas, banners y contenido visual) han sido creadas y editadas por DANY CARL. Puedes usarlas libremente, pero sin modificarlas ni editarlas de ninguna forma.
            </InfoCard>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
            <InfoCard icon={<Mail className="h-6 w-6 text-primary" />} title="Contacto para Consultas">
              Para cualquier consulta, puedes contactarme a través de mis redes sociales o el formulario de contacto.
            </InfoCard>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}>
             <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mr-4 shrink-0">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-destructive mb-2">Advertencia Importante</h3>
                    <p className="text-destructive/80 text-sm">
                      El uso no autorizado, monetización, la distribución sin créditos o la modificación de mi contenido sin permiso puede resultar en reclamos de derechos de autor o medidas legales.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
