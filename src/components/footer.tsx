import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Logo } from "./logo";

const SpotifyIcon = (props: React.ComponentProps<'svg'>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
      <path d="M8.5 14.5c2.5 1.5 5.5 1.5 8 0"></path>
      <path d="M7.5 11.5c3 1.5 6.5 1.5 9.5 0"></path>
      <path d="M6.5 8.5c3.5 1.5 7.5 1.5 11 0"></path>
    </svg>
  );

const TikTokIcon = (props: React.ComponentProps<'svg'>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}>
      <path d="M21 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>
      <path d="M12 3v13.5"/>
      <path d="M16.5 7.5a9 9 0 1 1-9-9"/>
  </svg>
);

const WhatsAppIcon = (props: React.ComponentProps<'svg'>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}>
      <path d="M21.5 3.5c-2.4-2.4-6.3-2.4-8.7 0l-8.5 8.5c-2.4 2.4-2.4 6.3 0 8.7 2.4 2.4 6.3 2.4 8.7 0l8.5-8.5c2.4-2.4 2.4-6.3 0-8.7z"/>
      <path d="m9 15-2-2"/>
      <path d="M12 12l-2-2"/>
      <path d="m15 9-2-2"/>
  </svg>
);
  

export default function Footer() {
  return (
    <footer className="bg-background/90 border-t border-border/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
            <Link href="/" aria-label="Dany Carl Homepage">
              <Logo />
            </Link>
          <div className="flex space-x-6 mt-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <TikTokIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <WhatsAppIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <SpotifyIcon className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dany Carl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
