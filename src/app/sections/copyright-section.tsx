"use client";

import { ScrollText, Music, Image as ImageIcon, Mail, AlertTriangle } from "lucide-react";

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
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up" style={{ animationDelay: `200ms`, animationFillMode: 'backwards' }}>
            <div className="bg-card/50 border border-border/50 rounded-lg p-6">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-4 flex items-center"><Music className="mr-3 h-6 w-6 text-primary"/>Remixes</h3>
                <p className="text-muted-foreground">
                Los remixes creados por DANY CARL son versiones únicas con un enfoque artístico propio. Si deseas usarlos en tu contenido, debes dar créditos, ya sea en el título o en la descripción, mencionando mi nombre (DANY CARL) y enlazando mis redes o plataformas.
                </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-6">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-4 flex items-center"><ImageIcon className="mr-3 h-6 w-6 text-primary"/>Imágenes y Diseño</h3>
                <p className="text-muted-foreground">
                Las imágenes utilizadas en esta plataforma (portadas, banners y contenido visual) han sido creadas y editadas por DANY CARL. Puedes usarlas libremente, pero sin modificarlas ni editarlas de ninguna forma.
                </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-6">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-4 flex items-center"><Mail className="mr-3 h-6 w-6 text-primary"/>Contacto para consultas</h3>
                <p className="text-muted-foreground">
                Para cualquier consulta, puedes contactarme a través de mis redes sociales o el formulario de contacto.
                </p>
            </div>
            <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-6">
                <h3 className="font-headline text-2xl font-bold text-destructive mb-4 flex items-center"><AlertTriangle className="mr-3 h-6 w-6 text-destructive"/>Advertencia</h3>
                <p className="text-destructive/90">
                El uso no autorizado, monetización, la distribución sin créditos o la modificación de mi contenido sin permiso puede resultar en reclamos de derechos de autor o medidas legales.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
