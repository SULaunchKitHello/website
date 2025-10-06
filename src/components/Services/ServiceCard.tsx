'use client';

import { 
  Box, 
  Text, 
  VStack, 
  HStack
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { MotionBox } from '../Hero/utils/motionComponents';

interface ServiceCardProps {
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
  gradient: string;
}

const ServiceCard = ({ title, description, deliverables, icon, gradient }: ServiceCardProps) => {
  const t = useTranslations('services');
  
  return (
    <MotionBox
      h="full"
      whileHover={{ 
        y: -12,
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Box
        p={8}
        h="full"
        borderRadius="2xl"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.1)"
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(20px)"
        position="relative"
        overflow="hidden"
        cursor="pointer"
        transition="all 0.3s ease"
        _hover={{
          borderColor: "rgba(159, 122, 234, 0.4)",
          bg: "rgba(255, 255, 255, 0.08)",
          transform: "translateY(-8px)",
        }}
        role="group"
      >
        {/* Gradient glow effect on hover */}
        <Box
          position="absolute"
          top="-50%"
          left="-50%"
          w="200%"
          h="200%"
          bgGradient={gradient}
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 0.1 }}
          borderRadius="full"
          filter="blur(40px)"
        />

        <VStack align="stretch" gap={6} h="full" position="relative">
          {/* Icon and Title */}
          <VStack align="flex-start" gap={4}>
            <Box
              fontSize="4xl"
              p={3}
              borderRadius="xl"
              bg="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
              transition="all 0.3s ease"
              _groupHover={{
                transform: "scale(1.1)",
                borderColor: "rgba(255, 255, 255, 0.3)",
                bg: "rgba(255, 255, 255, 0.15)"
              }}
            >
              {icon}
            </Box>
            <Text 
              fontSize="2xl" 
              fontWeight="bold" 
              color="white"
              lineHeight="short"
            >
              {title}
            </Text>
          </VStack>

          {/* Description */}
          <Text 
            color="gray.300" 
            fontSize="md"
            lineHeight="tall"
            flex="0 0 auto"
          >
            {description}
          </Text>

          {/* Deliverables */}
          <Box flex="1">
            <Text 
              fontSize="sm" 
              fontWeight="semibold" 
              color="gray.400" 
              mb={3}
              textTransform="uppercase"
              letterSpacing="wide"
            >
              {t('keyDeliverable')}
            </Text>
            <VStack align="stretch" gap={3}>
              {deliverables.map((deliverable, index) => (
                <HStack key={index} align="flex-start" gap={3}>
                  <Box
                    w={2}
                    h={2}
                    borderRadius="full"
                    bg="purple.400"
                    flexShrink={0}
                    mt={2}
                  />
                  <Text color="gray.400" fontSize="sm" lineHeight="tall">
                    {deliverable}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </VStack>

        {/* Hover border glow */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderRadius="2xl"
          border="2px solid"
          borderColor="transparent"
          bgGradient={gradient}
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 0.3 }}
          pointerEvents="none"
          mask="linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
          maskComposite="xor"
        />
      </Box>
    </MotionBox>
  );
};

export default ServiceCard;