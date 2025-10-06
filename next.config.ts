import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Enable experimental features for better SEO
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'lucide-react'],
  },
  
  // Image optimization for better Core Web Vitals
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Security headers for better SEO ranking
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Enable trailing slash for consistent URLs
  trailingSlash: false,
  
  // Optimize for production
  swcMinify: true,
  
  // Compress for better performance (SEO ranking factor)
  compress: true,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
