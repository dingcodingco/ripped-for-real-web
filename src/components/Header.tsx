import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(10, 10, 10, 0.8)', borderColor: 'var(--dark-grey)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Ripped For Real"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold hidden sm:block">
              Ripped For Real
            </span>
          </Link>
          
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}