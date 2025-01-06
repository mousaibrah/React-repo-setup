import { useTranslations } from 'next-intl';
import PageLayout from './PageLayout';

export default function NotFoundPage() {
  const t = useTranslations();

  return (
    <PageLayout title={t('title')}>
      <h1>{t('Errrrrrror')}</h1>
      <p className="max-w-[460px]">{t('description')}</p>
    </PageLayout>
  );
}
