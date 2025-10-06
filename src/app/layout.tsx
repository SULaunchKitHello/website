import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | SULaunchKit',
    default: 'Custom Software Development Costa Rica | SULaunchKit'
  },
  description: 'Professional custom software development in Costa Rica. Web applications, mobile apps, CRM systems, and technology consulting. Transform your business with cutting-edge solutions.',
  keywords: ['custom software development', 'Costa Rica', 'web applications', 'mobile apps', 'CRM systems', 'technology consulting', 'software solutions', 'desarrollo de software', 'aplicaciones web'],
  authors: [{ name: 'SULaunchKit' }],
  creator: 'SULaunchKit',
  publisher: 'SULaunchKit',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_CR',
    url: 'https://sulaunchkit.com',
    siteName: 'SULaunchKit',
    title: 'SULaunchKit - Custom Software Development Costa Rica',
    description: 'Transform your business with professional custom software solutions. Web apps, mobile development, and technology consulting in Costa Rica.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SULaunchKit - Custom Software Development Costa Rica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SULaunchKit - Custom Software Development Costa Rica',
    description: 'Transform your business with professional custom software solutions. Web apps, mobile development, and technology consulting in Costa Rica.',
    images: ['/og-image.jpg'],
    creator: '@sulaunchkit',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    languages: {
      'en': '/en',
      'es': '/es',
    },
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sulaunchkit.com/#organization",
        "name": "SULaunchKit",
        "url": "https://sulaunchkit.com",
        "logo": "https://sulaunchkit.com/logo.png",
        "description": "Custom software development company specializing in web applications, mobile apps, and technology consulting in Costa Rica",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CR",
          "addressRegion": "San José",
          "addressLocality": "Costa Rica"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+506-2313-7818",
          "contactType": "customer service",
          "availableLanguage": ["English", "Spanish"]
        },
        "sameAs": [
          "https://wa.me/50631137818"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://sulaunchkit.com/#localbusiness",
        "name": "SULaunchKit",
        "image": "https://sulaunchkit.com/logo.png",
        "description": "Professional custom software development services in Costa Rica",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CR",
          "addressRegion": "San José"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "9.7489",
          "longitude": "-83.7534"
        },
        "telephone": "+506-2313-7818",
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "serviceArea": {
          "@type": "Country",
          "name": "Costa Rica"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Software Development",
                "description": "Tailored software solutions for businesses"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Web Application Development",
                "description": "Modern web applications and websites"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Mobile App Development",
                "description": "iOS and Android mobile applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technology Consulting",
                "description": "Strategic technology guidance and planning"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sulaunchkit.com/#website",
        "url": "https://sulaunchkit.com",
        "name": "SULaunchKit",
        "description": "Custom Software Development Costa Rica",
        "publisher": {
          "@id": "https://sulaunchkit.com/#organization"
        },
        "inLanguage": ["en-US", "es-CR"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://sulaunchkit.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html 
      lang={locale} 
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={`https://sulaunchkit.com/${locale}`} />
        <link rel="alternate" hrefLang="en" href="https://sulaunchkit.com/en" />
        <link rel="alternate" hrefLang="es" href="https://sulaunchkit.com/es" />
        <link rel="alternate" hrefLang="x-default" href="https://sulaunchkit.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#9f7aea" />
        <meta name="geo.region" content="CR" />
        <meta name="geo.placename" content="Costa Rica" />
        <meta name="geo.position" content="9.7489;-83.7534" />
        <meta name="ICBM" content="9.7489, -83.7534" />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main role="main">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}