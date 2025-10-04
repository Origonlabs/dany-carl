import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" aria-label="Dany Carl Homepage">
              <Logo />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
