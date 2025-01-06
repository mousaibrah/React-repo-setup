import { APIProvider } from '@/api/ApiProvider';
import { clsx } from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Navigation from './Navigation';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  locale: 'en' | 'ar';
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full bg-red-500" lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col ')}>
        <NextIntlClientProvider messages={messages}>
          <APIProvider>
            <Navigation />
            {children}
          </APIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
