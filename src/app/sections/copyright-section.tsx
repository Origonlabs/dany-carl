"use client";

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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
            <h3 className="font-headline text-xl font-bold text-foreground mb-3">Remixes</h3>
            <p className="text-muted-foreground">
              Los remixes creados por DANY CARL son versiones únicas con un enfoque artístico propio. Si deseas usarlos en tu contenido, debes dar créditos, ya sea en el título o en la descripción, mencionando mi nombre (DANY CARL) y enlazando mis redes o plataformas.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
            <h3 className="font-headline text-xl font-bold text-foreground mb-3">Imágenes y Diseño</h3>
            <p className="text-muted-foreground">
              Las imágenes utilizadas en esta plataforma (portadas, banners y contenido visual) han sido creadas y editadas por DANY CARL. Puedes usarlas libremente, pero sin modificarlas ni editarlas de ninguna forma.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
            <h3 className="font-headline text-xl font-bold text-foreground mb-3">Contacto para Consultas</h3>
            <p className="text-muted-foreground">
              Para cualquier consulta, puedes contactarme a través de mis redes sociales o el formulario de contacto.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}>
             <div className="border-l-4 border-destructive p-4 bg-destructive/5">
                <h3 className="font-headline text-xl font-bold text-destructive mb-2">Advertencia Importante</h3>
                <p className="text-destructive/80">
                  El uso no autorizado, monetización, la distribución sin créditos o la modificación de mi contenido sin permiso puede resultar en reclamos de derechos de autor o medidas legales.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
