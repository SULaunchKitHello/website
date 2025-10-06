'use client';

import { useTranslations } from 'next-intl';
import { MotionHeading } from '../utils/motionComponents';

const HeroHeadline = () => {
  const t = useTranslations('Hero');
  
  return (
    <MotionHeading
      as="h1"
      size="4xl"
      color="white"
      fontWeight="bold"
      textShadow="2px 2px 4px rgba(0,0,0,0.3)"
      maxW="4xl"
      lineHeight="shorter"
      textAlign="center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {t('headline')}
    </MotionHeading>
  );
};

export default HeroHeadline;