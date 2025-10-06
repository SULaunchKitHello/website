import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero/Hero';
import ProductsSection from '@/components/Products/ProductsSection';
import ServicesSection from '@/components/Services/ServicesSection';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('seo');
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      siteName: t('openGraph.siteName'),
      type: 'website',
      url: 'https://sulaunchkit.com',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t('openGraph.title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: 'https://sulaunchkit.com',
      languages: {
        'en': 'https://sulaunchkit.com/en',
        'es': 'https://sulaunchkit.com/es',
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ServicesSection />
    </>
  );
}
