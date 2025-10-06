'use client';

import {
  Box,
  Flex,
  HStack,
  Link,
  Text
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Package, Settings } from 'lucide-react';
import Logo from './Logo';
import LanguagePicker from './LanguagePicker';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('header');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      as="header"
      bg={isScrolled ? "transparent" : "white"}
      borderBottom="1px"
      borderStyle="solid"
      borderColor={isScrolled ? "rgba(255, 255, 255, 0.1)" : "gray.100"}
      px={6}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={9999}
      backdropFilter={isScrolled ? "blur(20px)" : "blur(12px)"}
      bgColor={isScrolled ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.98)"}
      boxShadow={isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.12)" : "0 4px 20px rgba(0, 0, 0, 0.08)"}
      transition="all 0.3s ease-in-out"
    >
      <Flex
        maxW="8xl"
        mx="auto"
        align="center"
        justify="space-between"
        h="16"
      >
        {/* Logo */}
        <Logo size="lg" href="/" hasGlow={isScrolled} />

        {/* Navigation Menu - Center */}
        <HStack 
          display={{ base: 'none', md: 'flex' }}
          gap={8}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
        >
          <Link 
            href="/#products"
            _hover={{ 
              color: isScrolled ? "purple.300" : "purple.500",
              transform: "translateY(-1px)"
            }}
            transition="all 0.3s ease"
            fontSize="sm"
            fontWeight="bold"
            color={isScrolled ? "white" : "gray.700"}
          >
            <HStack gap={2} align="center">
              <Package size={16} />
              <Text>{t('products')}</Text>
            </HStack>
          </Link>
          <Link 
            href="/#services"
            _hover={{ 
              color: isScrolled ? "purple.300" : "purple.500",
              transform: "translateY(-1px)"
            }}
            transition="all 0.3s ease"
            fontSize="sm"
            fontWeight="bold"
            color={isScrolled ? "white" : "gray.700"}
          >
            <HStack gap={2} align="center">
              <Settings size={16} />
              <Text>{t('services')}</Text>
            </HStack>
          </Link>
        </HStack>

        {/* Language Selector */}
        <LanguagePicker size="sm" />
      </Flex>
    </Box>
  );
};

export default Header;