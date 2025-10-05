# DANY CARL · Sitio Oficial

Experiencia web inmersiva para el DJ y productor **DANY CARL**, construida sobre Next.js 15 y animaciones GSAP para transmitir una estética futurista inspirada en Alan Walker.

## Características destacadas
- **Hero cinemático** con tipografía animada y CTA hacia la discografía.
- **Secciones temáticas** (Discografía, Historia, Media, Tour, Contacto y Copyright) con componentes reutilizables y estilos coherentes.
- **Integración con GSAP** para animaciones fluidas tanto en el hero como en la navegación.
- **Diseño responsivo** basado en Tailwind CSS con componentes de Radix UI y glow button personalizado.
- **Flujos Genkit** preparados para generar assets visuales mediante Google Imagen (carátulas y hero art).

## Stack principal
- [Next.js 15](https://nextjs.org/) con la App Router.
- [React 18](https://react.dev/) y componentes de [Radix UI](https://www.radix-ui.com/).
- [Tailwind CSS 3](https://tailwindcss.com/) con utilidades personalizadas y `tailwindcss-animate`.
- [GSAP 3](https://greensock.com/gsap/) para animaciones de alto impacto.
- [Genkit](https://github.com/google/genkit) + [Google Imagen](https://ai.google.dev/) para generación de imágenes por IA.
- [pnpm](https://pnpm.io/) como gestor de dependencias.

## Requisitos previos
- Node.js 18 o superior (se recomienda la versión LTS vigente).
- pnpm 10.13.1 (o superior compatible).
- Cuenta y credenciales de Google AI Studio si se ejecutarán los flujos Genkit.

## Puesta en marcha
```bash
# 1. Instalar dependencias
pnpm install

# 2. Ejecutar en modo desarrollo
pnpm dev

# 3. Compilar para producción
pnpm build

# 4. Servir el build generado
pnpm start
```

### Scripts adicionales
- `pnpm lint` · Ejecuta las reglas de ESLint configuradas por Next.js.
- `pnpm typecheck` · Verifica tipos con TypeScript en modo estricto.
- `pnpm genkit:dev` · Inicia el entorno de desarrollo de Genkit (requiere variables de entorno configuradas).
- `pnpm genkit:watch` · Inicia Genkit en modo watch con recarga en vivo.

## Estructura relevante
```
├── src
│   ├── app
│   │   ├── page.tsx           # Hero y landing principal
│   │   ├── discography/       # Grid de álbumes con tarjetas animadas
│   │   ├── story/             # Narrativa biográfica
│   │   ├── media/             # Embeds de Spotify y Facebook Live
│   │   ├── tour/              # Próximas fechas
│   │   ├── contact/           # Formulario validado con React Hook Form + Zod
│   │   └── globals.css        # Estilos base y utilidades globales
│   ├── components
│   │   ├── header.tsx         # Navegación con animaciones GSAP
│   │   ├── glow-button.tsx    # CTA con efecto de luz personalizado
│   │   ├── album-card.tsx     # Tarjeta reutilizable para releases
│   │   └── ui/*               # Primitivas adaptadas de shadcn/ui
│   ├── ai
│   │   ├── genkit.ts          # Configuración de Genkit + Google AI
│   │   └── flows/             # Flujos de generación de imágenes
│   └── lib
│       └── placeholder-images # Datos mock para carátulas y hero
└── docs/blueprint.md          # Documento de diseño y lineamientos visuales
```

## Configuración de IA (Genkit)
1. Crea un archivo `.env.local` en la raíz del proyecto.
2. Define los credenciales necesarios para Google AI (por ejemplo, `GOOGLE_API_KEY`).
3. Ejecuta `pnpm genkit:dev` para levantar el panel de Genkit y probar los flujos:
   - `generateHeroSectionImageFlow`
   - `generateAlbumCoverImagesFlow`

> Consulta la [documentación oficial de Genkit](https://github.com/google/genkit) para detalles sobre autenticación y límites de uso.

## Estándares de código
- **TypeScript estricto**: mantén los tipos actualizados y evita `any` implícitos.
- **Convenciones de Tailwind**: prioriza utilidades semánticas (`font-headline`, `bg-secondary`, etc.) definidas en el tema.
- **Accesibilidad**: utiliza etiquetas `aria-*`, `sr-only` y roles descriptivos (especialmente en elementos animados y multimedia).
- **Animaciones responsables**: GSAP está centralizado; encapsula nuevas animaciones en `useEffect` y revierte el contexto (`ctx.revert()`).

## Despliegue
El proyecto está preparado para Firebase App Hosting. Revisa `apphosting.yaml` y ajusta `maxInstances` o cualquier configuración adicional antes de desplegar.

## Próximos pasos sugeridos
- Conectar el formulario de contacto con un backend (Firebase Functions, Firestore o servicio de email transactional).
- Sustituir las imágenes placeholder por recursos generados vía Genkit o material oficial.
- Incorporar analytics y un modo oscuro para ampliar el espectro visual.

---

Hecho con pasión musical y foco en la experiencia de usuario. Para soporte o nuevas funcionalidades, abre un issue o contacta al equipo de desarrollo.
