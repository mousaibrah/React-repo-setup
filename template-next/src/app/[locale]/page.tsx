import PageLayout from '@/Components/PageLayout';
import { setRequestLocale } from 'next-intl/server';

export default async function IndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout title={'title'}>
      <p className="max-w-[590px] text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam
        cupiditate voluptatum reiciendis beatae esse et quae animi consequatur
        temporibus corporis dolor, aliquam quasi placeat soluta, expedita illo
        iste aspernatur.
      </p>
    </PageLayout>
  );
}
