'use client';

import { VStack, Text, Box } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { MotionBox } from '../utils/motionComponents';

const ScrollIndicator = () => {
  const t = useTranslations('Hero');
  
  return (
    <MotionBox
      position="absolute"
      bottom={4}
      left="50%"
      transform="translateX(-50%)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      zIndex={20}
    >
      <VStack gap={2} cursor="pointer" onClick={() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }}>
        <Text fontSize="sm" color="gray.400">
          {t('scrollIndicator')}
        </Text>
        <MotionBox
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Box color="gray.400" fontSize="xl">
            ↓
          </Box>
        </MotionBox>
      </VStack>
    </MotionBox>
  );
};

export default ScrollIndicator;