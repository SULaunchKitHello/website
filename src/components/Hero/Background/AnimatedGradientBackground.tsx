'use client';

import { Box } from '@chakra-ui/react';
import { MotionBox } from '../utils/motionComponents';

const AnimatedGradientBackground = () => (
  <Box
    position="absolute"
    top={0}
    left={0}
    right={0}
    bottom={0}
    zIndex={0}
  >
    {/* Main gradient background with continuous transformation */}
    <MotionBox
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      background="linear-gradient(135deg, #9F7AEA 0%, #3182CE 25%, #ED64A6 50%, #805AD5 75%, #2B6CB0 100%)"
      animate={{
        background: [
          'linear-gradient(135deg, #9F7AEA 0%, #3182CE 25%, #ED64A6 50%, #805AD5 75%, #2B6CB0 100%)',
          'linear-gradient(225deg, #3182CE 0%, #ED64A6 25%, #805AD5 50%, #2B6CB0 75%, #9F7AEA 100%)',
          'linear-gradient(315deg, #ED64A6 0%, #805AD5 25%, #2B6CB0 50%, #9F7AEA 75%, #3182CE 100%)',
          'linear-gradient(45deg, #805AD5 0%, #2B6CB0 25%, #9F7AEA 50%, #3182CE 75%, #ED64A6 100%)',
          'linear-gradient(135deg, #2B6CB0 0%, #9F7AEA 25%, #3182CE 50%, #ED64A6 75%, #805AD5 100%)',
          'linear-gradient(225deg, #9F7AEA 0%, #3182CE 25%, #ED64A6 50%, #805AD5 75%, #2B6CB0 100%)',
          'linear-gradient(135deg, #9F7AEA 0%, #3182CE 25%, #ED64A6 50%, #805AD5 75%, #2B6CB0 100%)',
        ],
        backgroundSize: [
          '200% 200%',
          '250% 250%',
          '300% 300%',
          '250% 250%',
          '200% 200%',
          '200% 200%',
        ],
        backgroundPosition: [
          '0% 0%',
          '25% 25%',
          '50% 50%',
          '75% 75%',
          '100% 100%',
          '0% 0%',
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    
    {/* Overlay for better contrast */}
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="rgba(0, 0, 0, 0.3)"
      backdropFilter="blur(1px)"
    />
  </Box>
);

export default AnimatedGradientBackground;