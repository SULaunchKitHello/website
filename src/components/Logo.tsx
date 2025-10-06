'use client';

import { Flex, Image, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  href?: string;
  hasGlow?: boolean;
}

const Logo = ({ size = 'md', showText = false, href, hasGlow = false }: LogoProps) => {
  const t = useTranslations('Header');
  
  const sizeConfig = {
    sm: { height: '24px', fontSize: 'lg', gap: 2 },
    md: { height: '32px', fontSize: '2xl', gap: 3 },
    lg: { height: '40px', fontSize: '3xl', gap: 4 }
  };

  const config = sizeConfig[size];

  const content = (
    <Flex align="center" gap={config.gap}>
      <Image
        src="/logo.png"
        alt={t('companyName')}
        height={config.height}
        width="auto"
        filter={hasGlow ? "brightness(0) invert(1)" : "none"}
        transition="filter 0.3s ease-in-out"
      />
      {showText && (
        <Text
          fontSize={config.fontSize}
          fontWeight="bold"
          color="gray.900"
          letterSpacing="-0.025em"
          textShadow={hasGlow ? "0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6), 0 0 80px rgba(255, 255, 255, 0.4)" : "none"}
          transition="text-shadow 0.3s ease-in-out"
        >
          {t('companyName')}
        </Text>
      )}
    </Flex>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return content;
};

export default Logo;