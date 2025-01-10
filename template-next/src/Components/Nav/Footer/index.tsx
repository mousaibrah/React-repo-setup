import { Link } from '@/i18n/routing';

export const Footer = () => (
  <div className="flex flex-col items-center justify-center py-4 bg-primary fixed bottom-0 w-full z-50">
    <div>
      <Link href="/" className="text-white">
        logo
      </Link>
    </div>
    <div className="flex space-x-4 mt-4">
      <Link href="/about" className="text-white">
        About
      </Link>
    </div>
  </div>
);
