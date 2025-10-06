'use client';

import { HStack, VStack, Text } from '@chakra-ui/react';
import { MotionBox } from '../utils/motionComponents';

const HeroStats = () => {
  const stats = [
    { number: '10k+', label: 'Developers' },
    { number: '50+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      mt={12}
    >
      <HStack gap={8} justify="center">
        {stats.map((stat, index) => (
          <VStack key={index} gap={1}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="yellow.300"
              textShadow="0 0 10px rgba(251, 211, 141, 0.3)"
            >
              {stat.number}
            </Text>
            <Text fontSize="sm" color="gray.400">
              {stat.label}
            </Text>
          </VStack>
        ))}
      </HStack>
    </MotionBox>
  );
};

export default HeroStats;