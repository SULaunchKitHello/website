'use client';

import { useTranslations } from 'next-intl';
import { MotionText } from '../utils/motionComponents';

const HeroSubtext = () => {
  const t = useTranslations('Hero');
  
  return (
    <MotionText
      fontSize="xl"
      color="gray.300"
      textAlign="center"
      maxW="2xl"
      lineHeight="relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {t('subtext')}
    </MotionText>
  );
};

export default HeroSubtext;