"use client";

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/discography", label: "Discografía" },
    { href: "/story", label: "Historia" },
    { href: "/media", label: "Media" },
    { href: "/tour", label: "Tour" },
    { href: "/contact", label: "Contacto" },
    { href: "/copyright", label: "Copyright" },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="w-full z-50 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link href="/" aria-label="Dany Carl Homepage">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center gap-x-8 text-lg font-medium">
              {navLinks.slice(1).map(link => (
                  <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">{link.label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-y-6 pt-10">
                    <Link href="/" className="mb-4" onClick={() => setIsOpen(false)}>
                        <Logo />
                    </Link>
                    {navLinks.map(link => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
