"use client";

import { Music, Image as ImageIcon, Mail, AlertTriangle } from "lucide-react";

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-card/50 border border-border/50 rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card transform hover:scale-[1.02] group">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-primary/20">
        {icon}
      </div>
      <h3 className="font-headline text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{title}</h3>
    </div>
    <p className="text-muted-foreground">
      {children}
    </p>
  </div>
);

const WarningCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-destructive/10 border border-destructive/50 rounded-xl p-6">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mr-4">
        {icon}
      </div>
      <h3 className="font-headline text-2xl font-bold text-destructive">{title}</h3>
    </div>
    <p className="text-destructive/90">
      {children}
    </p>
  </div>
);


export default function CopyrightSection() {
  return (
    <section id="copyright" className="w-full py-20 md:py-32 bg-background z-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-primary">
            Aviso de Derechos de Autor
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Toda la música, remixes e imágenes presentadas en esta plataforma son de DANY CARL y están protegidas por derechos de autor.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
            <InfoCard icon={<Music className="h-6 w-6 text-primary" /> } title="Remixes">
              Los remixes creados por DANY CARL son versiones únicas con un enfoque artístico propio. Si deseas usarlos en tu contenido, debes dar créditos, ya sea en el título o en la descripción, mencionando mi nombre (DANY CARL) y enlazando mis redes o plataformas.
            </InfoCard>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
            <InfoCard icon={<ImageIcon className="h-6 w-6 text-primary" />} title="Imágenes y Diseño">
              Las imágenes utilizadas en esta plataforma (portadas, banners y contenido visual) han sido creadas y editadas por DANY CARL. Puedes usarlas libremente, pero sin modificarlas ni editarlas de ninguna forma.
            </InfoCard>
          </div>
          <div className="animate-fade-in-up md:col-span-2" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
            <InfoCard icon={<Mail className="h-6 w-6 text-primary" />} title="Contacto para Consultas">
              Para cualquier consulta, puedes contactarme a través de mis redes sociales o el formulario de contacto.
            </InfoCard>
          </div>
          <div className="animate-fade-in-up md:col-span-2" style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}>
            <WarningCard icon={<AlertTriangle className="h-6 w-6 text-destructive" />} title="Advertencia Importante">
              El uso no autorizado, monetización, la distribución sin créditos o la modificación de mi contenido sin permiso puede resultar en reclamos de derechos de autor o medidas legales.
            </WarningCard>
          </div>
        </div>
      </div>
    </section>
  );
}
