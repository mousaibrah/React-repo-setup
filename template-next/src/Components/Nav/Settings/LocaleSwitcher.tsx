'use client';

import { Locale, usePathname, useRouter } from '@/i18n/routing';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function handleSwitchLanguage(locale: Locale) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: locale }
    );
  }
  return (
    <div className="flex flex-row gap-2 items-center justify-center text-white" dir="ltr">
      <button
        className={`flex flex-row gap-2  items-center justify-center disabled:cursor-pointer`}
        disabled={params.locale === 'en'}
        onClick={() => {
          handleSwitchLanguage('en');
        }}
      >
        <Image src={`/assets/icons/English.png`} alt="English" width={20} height={20} sizes="(max-width: 768px) 20px, 40px" /> English
      </button>
      <div>
        <span>|</span>
      </div>
      <button
        className={`flex flex-row gap-2  items-center justify-center disabled:cursor-pointer`}
        disabled={params.locale === 'ar'}
        onClick={() => {
          handleSwitchLanguage('ar');
        }}
      >
        <Image src={`/assets/icons/Arabic.png`} alt="Arabic" width={20} height={20} sizes="(max-width: 768px) 20px, 40px" />
        العربية
      </button>
    </div>
  );
}
