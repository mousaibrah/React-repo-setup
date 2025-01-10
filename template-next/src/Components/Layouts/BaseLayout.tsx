import { APIProvider } from '@/api/ApiProvider';
import { clsx } from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer, Navigation } from '../Nav';
import { generateMetadata } from '@/app/[locale]/layout';

const inter = Inter({ subsets: ['greek'] });

type Props = {
  children: ReactNode;
  locale: 'en' | 'ar';
};

export async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();
  // @ts-expect-error -- TypeScript will validate that only known `params`
  generateMetadata({ params: { locale } });
  return (
    <html dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale}>
      <body lang={locale} className={clsx(inter.className, 'flex min-h-screen flex-col dark:bg-secondary dark:text-white')}>
        <NextIntlClientProvider messages={messages}>
          <APIProvider>
            <div className="min-h-screen flex flex-col justify-between h-[200vh] relative">
              <Navigation />
              <div className="absolute top-12 w-full">{children}</div>
              <Footer />
            </div>
          </APIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
