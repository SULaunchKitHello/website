'use client';

import { HStack, Button, Link } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { MotionBox } from '../utils/motionComponents';

const HeroCTAButtons = () => {
  const t = useTranslations('Hero');
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <HStack gap={4} justify="center">
        <Link
          href="https://wa.me/50231137818"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecoration: "none" }}
        >
          <Button
            size="lg"
            bg="purple.500"
            color="white"
            _hover={{ bg: 'purple.600', transform: 'translateY(-2px)' }}
            _active={{ transform: 'translateY(0)' }}
            transition="all 0.2s"
            px={8}
          >
            {t('ctaPrimary')}
          </Button>
        </Link>
      </HStack>
    </MotionBox>
  );
};

export default HeroCTAButtons;