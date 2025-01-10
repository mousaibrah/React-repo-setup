'use client';
import clsx from 'clsx';
import { useLocale } from 'next-intl';
import React, { PropsWithChildren } from 'react';

interface ButtonProps {
  onClick: () => void;
  className?: string;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, className, onClick }) => {
  const locale = useLocale();
  return (
    <button className={clsx(`flex ${locale === 'en' ? 'flex-row' : 'flex-row-reverse'} gap-2  items-center justify-center bg-primary text-white px-4 py-2`, className)} onClick={onClick}>
      {children}
    </button>
  );
};
