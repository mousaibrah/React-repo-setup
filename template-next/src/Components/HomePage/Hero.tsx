'use client';
import { useTranslations } from 'next-intl';
import { Button } from '../common/Button';

const Hero = () => {
  const t = useTranslations();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <Button onClick={() => console.log('Clicked!')}>{t('button')}</Button>
    </div>
  );
};

export default Hero;
