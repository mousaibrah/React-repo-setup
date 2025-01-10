'use client';
import { TxKeyPath } from '@/i18n/type';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: TxKeyPath;
  banner?: ReactNode;
};

export function PageLayout({ children, title }: Props) {
  return (
    <div className="container relative flex grow flex-col px-4">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">{title}</h1>
      <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
      <div className="mt-auto grid grid-cols-1 gap-4 pt-20 md:grid-cols-2 lg:gap-12"></div>
    </div>
  );
}
