import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations();

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t('title')}</NavigationLink>
          <NavigationLink href="/about">{t('About')}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
