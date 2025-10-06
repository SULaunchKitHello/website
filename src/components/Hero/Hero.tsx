'use client';

import { Box, VStack } from '@chakra-ui/react';
import AnimatedGradientBackground from './Background/AnimatedGradientBackground';
import FloatingShapes from './Background/FloatingShapes';
import HeroHeadline from './Content/HeroHeadline';
import HeroSubtext from './Content/HeroSubtext';
import HeroCTAButtons from './Content/HeroCTAButtons';
import ScrollIndicator from './Interactive/ScrollIndicator';

const Hero = () => {
  return (
    <Box position="relative" h="100vh" overflow="hidden" pt={16}>
      {/* Background */}
      <AnimatedGradientBackground />
      <FloatingShapes />
      
      {/* Content */}
      <VStack
        position="relative"
        zIndex={10}
        h="full"
        justify="center"
        align="center"
        textAlign="center"
        px={8}
        pb={{ base: 20, md: 8 }}
        gap={{ base: 4, md: 8 }}
      >
        <HeroHeadline />
        <HeroSubtext />
        <HeroCTAButtons />
      </VStack>
      
      {/* Interactive Elements */}
      <ScrollIndicator />
    </Box>
  );
};

export default Hero;