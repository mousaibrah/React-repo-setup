'use client ';
import { useTranslations } from 'next-intl';
import { PageLayout } from './Layouts';

export default function NotFoundPage() {
  const t = useTranslations();
  return (
    <PageLayout title={'Error'}>
      <h1>{t('Error')}</h1>
      Not Found
    </PageLayout>
  );
}
