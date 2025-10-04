import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link href="/" aria-label="Dany Carl Homepage">
              <Logo />
            </Link>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center gap-x-8 text-lg font-medium">
                <li><Link href="#discography" className="text-muted-foreground hover:text-primary transition-colors duration-300">Discografía</Link></li>
                <li><Link href="#story" className="text-muted-foreground hover:text-primary transition-colors duration-300">Historia</Link></li>
                <li><Link href="#tour" className="text-muted-foreground hover:text-primary transition-colors duration-300">Tour</Link></li>
                <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}