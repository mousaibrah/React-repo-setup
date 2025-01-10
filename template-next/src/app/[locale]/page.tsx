import Hero from '@/Components/HomePage/Hero';
import { PageLayout } from '@/Components/Layouts';
import { setRequestLocale } from 'next-intl/server';

export default async function IndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  );
}
