import { PageLayout } from '@/Components/Layouts';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};
export default async function PathnamesPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  return (
    <PageLayout title={undefined}>
      <div>About</div>
    </PageLayout>
  );
}
