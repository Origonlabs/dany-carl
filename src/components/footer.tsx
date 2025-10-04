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
      <path d="M12.52.02c1.31-.02 2.61.1 3.88.3a1 1 0 0 1 .63 1.28c-.27 1.12-.72 2.2-1.33 3.21-.62 1-.39 2.42.52 3.19a1.03 1.03 0 0 1 .53.84v.1c-.02.53-.29.98-.74 1.22-1.6.88-3.32 1.15-5.07 1.07-1.75-.08-3.5-.48-5.1-1.15a1 1 0 0 1-.5-1.28c.31-1.07.72-2.12 1.22-3.1a1 1 0 0 1 1.28-.5c1.12.27 2.2.72 3.21 1.33 1 .62 2.42.39 3.19-.52a1.03 1.03 0 0 1 .84-.53h.1c.53.02.98.29 1.22.74.88 1.6 1.15 3.32 1.07 5.07-.08 1.75-.48 3.5-1.15 5.1a1 1 0 0 1-1.28.5c-1.07-.31-2.12-.72-3.1-1.22a1 1 0 0 1-.5-1.28c.27-1.12.72-2.2 1.33-3.21.62-1 .39-2.42-.52-3.19a1.03 1.03 0 0 1-.53-.84v-.1c.02-.53.29-.98.74-1.22 1.6-.88 3.32-1.15 5.07-1.07 1.75.08 3.5.48 5.1 1.15a1 1 0 0 1 .5 1.28c-.31 1.07-.72 2.12-1.22 3.1a1 1 0 0 1-1.28.5c-1.12-.27-2.2-.72-3.21-1.33-1-.62-2.42-.39-3.19.52a1.03 1.03 0 0 1-.84.53h-.1c-.53-.02-.98-.29-1.22-.74a7.29 7.29 0 0 1-1.07-5.07c.08-1.75.48-3.5 1.15-5.1a1 1 0 0 1 1.28-.5z" />
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
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.29 14.4c-.2-.1-1.19-.59-1.37-.66-.18-.07-.31-.1-.44.1-.13.2-.52.66-.64.79-.12.13-.23.15-.43.05-.2-.1-.86-.31-1.63-.99-.6-.54-.99-.9-.1-1.22.1-.1.22-.26.33-.39.1-.13.1-.23.1-.36s0-.26-.05-.36c-.05-.1-.44-1.05-.6-1.44s-.32-.32-.44-.32h-.4c-.13 0-.33.05-.5.25s-.64.62-.64 1.51.66 1.75.75 1.88c.1.13 1.24 1.9 3 2.65.43.19.76.3.1.41.36.1.19.66.22.79.03.13.03.24-.02.34-.05.1-.18.15-.37.25-.2.1-.4.05-.54-.05z"/>
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
            <Link href="https://www.youtube.com/@Danycarlmusic" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="https://www.tiktok.com/@danycarlmusic" className="text-muted-foreground hover:text-primary transition-colors">
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
