'use client';
import { Link } from '@/i18n/routing';
import LocaleSwitcher from './Settings/LocaleSwitcher';
import ThemeToggle from './Settings/ThemeToggle';

export function Navigation() {
  return (
    <nav className="px-[3%] flex flex-row justify-between items-center fixed top-12 z-50 h-24 w-full bg-primary">
      <Link href="/" className="text-white">
        logo
      </Link>
      <Link href="/about" className="text-white">
        About
      </Link>
      <ThemeToggle />
      <LocaleSwitcher />
    </nav>
  );
}
