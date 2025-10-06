'use client';

import { 
  Box, 
  Container, 
  VStack, 
  HStack, 
  Text, 
  Link,
  SimpleGrid
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const t = useTranslations('footer');

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/108301589',
      icon: Linkedin,
      ariaLabel: 'LinkedIn Company Profile'
    }
  ];

  const contactInfo = [
    {
      type: 'email',
      label: t('contact.email'),
      value: 'hello@sulaunchkit.com',
      href: 'mailto:hello@sulaunchkit.com',
      icon: Mail
    },
    {
      type: 'whatsapp',
      label: t('contact.whatsapp'),
      value: '+502 3113-7818',
      href: 'https://wa.me/50231137818',
      icon: MessageCircle
    }
  ];

  const productLinks = [
    {
      id: 'websites',
      name: t('products.websites'),
      href: '/#products'
    },
    {
      id: 'crm',
      name: t('products.crm'),
      href: '/#products'
    },
    {
      id: 'ecommerce',
      name: t('products.ecommerce'),
      href: '/#products'
    }
  ];

  const legalLinks = [
    {
      name: t('legal.privacy'),
      href: '/privacy-policy'
    },
    {
      name: t('legal.terms'),
      href: '/terms-of-service'
    }
  ];

  return (
    <Box
      as="footer"
      position="relative"
      bg="linear-gradient(180deg, #0f1419 0%, #1a1a2e 50%, #0f1419 100%)"
      color="white"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Subtle background pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.02}
        backgroundImage="radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)"
        backgroundSize="30px 30px"
        zIndex={1}
      />

      <Container px={{ base: 6, md: 8 }} position="relative" zIndex={2}>
        <VStack gap={{ base: 8, md: 12 }} py={{ base: 12, md: 16 }}>
          
          {/* Main Footer Content */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            gap={{ base: 8, md: 8, lg: 12 }}
            w="full"
          >
            
            {/* Company Info */}
            <VStack align={{ base: "center", md: "flex-start" }} gap={6}>
              <Logo size="lg" hasGlow={false} />
              <Text
                color="gray.400"
                fontSize="sm"
                lineHeight="tall"
                textAlign={{ base: "center", md: "left" }}
                maxW="250px"
              >
                {t('description')}
              </Text>
              
              {/* Social Media */}
              <HStack gap={4}>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      _hover={{ transform: "translateY(-2px)" }}
                      transition="all 0.3s ease"
                    >
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg="rgba(255, 255, 255, 0.05)"
                        backdropFilter="blur(10px)"
                        border="1px solid"
                        borderColor="rgba(255, 255, 255, 0.1)"
                        _hover={{
                          bg: "rgba(255, 255, 255, 0.1)",
                          borderColor: "rgba(255, 255, 255, 0.2)",
                          transform: "scale(1.05)"
                        }}
                        transition="all 0.3s ease"
                        aria-label={social.ariaLabel}
                      >
                        <IconComponent size={20} color="#CBD5E0" />
                      </Box>
                    </Link>
                  );
                })}
              </HStack>
            </VStack>

            {/* Contact Information */}
            <VStack align={{ base: "center", md: "flex-start" }} gap={4}>
              <Text
                fontSize="lg"
                fontWeight="semibold"
                color="white"
                mb={2}
              >
                {t('contact.title')}
              </Text>
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <Link
                    key={contact.type}
                    href={contact.href}
                    target={contact.type === 'whatsapp' ? '_blank' : undefined}
                    rel={contact.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    _hover={{ color: "purple.300" }}
                    transition="color 0.3s ease"
                  >
                    <HStack gap={3} align="center">
                      <IconComponent size={18} color="#9CA3AF" />
                      <VStack align="flex-start" gap={0}>
                        <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                          {contact.label}
                        </Text>
                        <Text fontSize="sm" color="gray.300">
                          {contact.value}
                        </Text>
                      </VStack>
                    </HStack>
                  </Link>
                );
              })}
            </VStack>

            {/* Products Quick Links */}
            <VStack align={{ base: "center", md: "flex-start" }} gap={4}>
              <Text
                fontSize="lg"
                fontWeight="semibold"
                color="white"
                mb={2}
              >
                {t('products.title')}
              </Text>
              <VStack align={{ base: "center", md: "flex-start" }} gap={2}>
                {productLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    color="gray.400"
                    fontSize="sm"
                    _hover={{ color: "purple.300" }}
                    transition="color 0.3s ease"
                  >
                    {link.name}
                  </Link>
                ))}
              </VStack>
            </VStack>

            {/* Services Quick Links */}
            <VStack align={{ base: "center", md: "flex-start" }} gap={4}>
              <Text
                fontSize="lg"
                fontWeight="semibold"
                color="white"
                mb={2}
              >
                {t('services.title')}
              </Text>
              <VStack align={{ base: "center", md: "flex-start" }} gap={2}>
                <Link
                  href="/#services"
                  color="gray.400"
                  fontSize="sm"
                  _hover={{ color: "purple.300" }}
                  transition="color 0.3s ease"
                >
                  {t('services.development')}
                </Link>
                <Link
                  href="/#services"
                  color="gray.400"
                  fontSize="sm"
                  _hover={{ color: "purple.300" }}
                  transition="color 0.3s ease"
                >
                  {t('services.consulting')}
                </Link>
                <Link
                  href="/#services"
                  color="gray.400"
                  fontSize="sm"
                  _hover={{ color: "purple.300" }}
                  transition="color 0.3s ease"
                >
                  {t('services.uiux')}
                </Link>
              </VStack>
            </VStack>

          </SimpleGrid>

          {/* Divider */}
          <Box
            w="full"
            h="1px"
            bg="rgba(255, 255, 255, 0.1)"
          />

          {/* Copyright and Legal */}
          <VStack gap={4} textAlign="center">
            <Text fontSize="sm" color="gray.500">
              {t('copyright', { year: new Date().getFullYear() })}
            </Text>
            
            {/* Legal Links */}
            <HStack gap={6} justify="center" flexWrap="wrap">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="gray.500"
                  fontSize="xs"
                  _hover={{ color: "purple.300" }}
                  transition="color 0.3s ease"
                >
                  {link.name}
                </Link>
              ))}
            </HStack>
            
            <Text fontSize="xs" color="gray.600" maxW="md" lineHeight="tall">
              {t('rights')}
            </Text>
          </VStack>

        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;