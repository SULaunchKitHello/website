'use client';

import React from 'react';
import { 
  Box, 
  Text, 
  VStack, 
  HStack, 
  Badge
} from '@chakra-ui/react';
import { Check, Clock, LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { MotionBox } from '../Hero/utils/motionComponents';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  status: 'available' | 'coming-soon';
  icon: LucideIcon;
}

const ProductCard = ({ title, description, features, status, icon: IconComponent }: ProductCardProps) => {
  const isAvailable = status === 'available';
  const t = useTranslations('products.status');

  return (
    <MotionBox
      h="full"
      whileHover={{ 
        y: -8,
        scale: 1.02,
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
          borderColor: isAvailable ? "rgba(159, 122, 234, 0.4)" : "rgba(255, 255, 255, 0.2)",
          bg: "rgba(255, 255, 255, 0.08)",
          transform: "translateY(-4px)",
        }}
      >
        {/* Glassmorphism glow effect */}
        <Box
          position="absolute"
          top="-50%"
          left="-50%"
          w="200%"
          h="200%"
          bg={isAvailable 
            ? "radial-gradient(circle, rgba(159, 122, 234, 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)"
          }
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 1 }}
        />

        <VStack align="stretch" gap={6} h="full" position="relative">
          {/* Header */}
          <HStack justify="space-between" align="flex-start">
            <HStack>
              <Box
                p={3}
                borderRadius="xl"
                bg={isAvailable ? "rgba(159, 122, 234, 0.2)" : "rgba(255, 255, 255, 0.1)"}
                border="1px solid"
                borderColor={isAvailable ? "rgba(159, 122, 234, 0.3)" : "rgba(255, 255, 255, 0.2)"}
              >
                <IconComponent 
                  size={24} 
                  color={isAvailable ? "#9F7AEA" : "#CBD5E0"}
                />
              </Box>
              <Text 
                fontSize="xl" 
                fontWeight="bold" 
                color="white"
                lineHeight="short"
              >
                {title}
              </Text>
            </HStack>
            <Badge
              colorScheme={isAvailable ? "green" : "orange"}
              variant="subtle"
              fontSize="xs"
              px={3}
              py={1}
              borderRadius="full"
              bg={isAvailable ? "rgba(72, 187, 120, 0.2)" : "rgba(237, 137, 54, 0.2)"}
              color={isAvailable ? "green.300" : "orange.300"}
              border="1px solid"
              borderColor={isAvailable ? "rgba(72, 187, 120, 0.3)" : "rgba(237, 137, 54, 0.3)"}
            >
              {isAvailable ? t('available') : t('comingSoon')}
            </Badge>
          </HStack>

          {/* Description */}
          <Text 
            color="gray.300" 
            fontSize="md"
            lineHeight="tall"
            flex="0 0 auto"
          >
            {description}
          </Text>

          {/* Features */}
          <Box flex="1">
            <VStack align="stretch" gap={3}>
              {features.map((feature, index) => (
                <HStack key={index} align="flex-start" gap={3}>
                  <Box
                    w={4}
                    h={4}
                    borderRadius="full"
                    bg={isAvailable ? "green.400" : "orange.400"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mt={0.5}
                  >
                    {isAvailable ? (
                      <Check size={10} color="white" strokeWidth={3} />
                    ) : (
                      <Clock size={10} color="white" strokeWidth={3} />
                    )}
                  </Box>
                  <Text color="gray.400" fontSize="sm" lineHeight="tall">
                    {feature}
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
          background={isAvailable 
            ? "linear-gradient(135deg, rgba(159, 122, 234, 0.3), rgba(49, 130, 206, 0.3)) border-box"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)) border-box"
          }
          mask="linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
          maskComposite="xor"
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 1 }}
          pointerEvents="none"
        />
      </Box>
    </MotionBox>
  );
};

export default ProductCard;