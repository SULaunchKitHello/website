'use client';

import { Box, Container, Heading, Text, SimpleGrid, Button, Link } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { Globe, BarChart3, ShoppingCart } from 'lucide-react';
import { MotionBox } from '../Hero/utils/motionComponents';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const t = useTranslations('products');

  const products = [
    {
      id: 'websites',
      title: t('websites.title'),
      description: t('websites.description'),
      features: [
        t('websites.features.responsive'),
        t('websites.features.seo'),
        t('websites.features.performance'),
        t('websites.features.modern')
      ],
      status: 'available' as const,
      icon: Globe
    },
    {
      id: 'crm',
      title: t('crm.title'),
      description: t('crm.description'),
      features: [
        t('crm.features.management'),
        t('crm.features.automation'),
        t('crm.features.analytics'),
        t('crm.features.integration')
      ],
      status: 'coming-soon' as const,
      icon: BarChart3
    },
    {
      id: 'ecommerce',
      title: t('ecommerce.title'),
      description: t('ecommerce.description'),
      features: [
        t('ecommerce.features.payments'),
        t('ecommerce.features.inventory'),
        t('ecommerce.features.mobile'),
        t('ecommerce.features.analytics')
      ],
      status: 'coming-soon' as const,
      icon: ShoppingCart
    }
  ];

  return (
    <Box
      id="products"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 12, md: 16 }}
      overflow="hidden"
      bg="linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)"
    >
      {/* Subtle texture overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.03}
        backgroundImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)"
        backgroundSize="20px 20px"
        zIndex={1}
      />

      <Container px={{ base: 6, md: 8 }} position="relative" zIndex={2} w="full">
        {/* Section Header */}
        <MotionBox
          textAlign="center"
          mb={{ base: 12, md: 16 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            mb={6}
            bgGradient="linear(to-r, purple.400, blue.400, purple.400)"
            bgClip="text"
            fontWeight="bold"
          >
            {t('title')}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.300"
            maxW="2xl"
            mx="auto"
            lineHeight="tall"
          >
            {t('subtitle')}
          </Text>
        </MotionBox>

        {/* Products Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 8, md: 10 }}
          w="full"
        >
          {products.map((product, index) => (
            <MotionBox
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Call to Action */}
        <MotionBox
          textAlign="center"
          mt={{ base: 12, md: 16 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.400"
            mb={6}
          >
            {t('cta.subtitle')}
          </Text>
          <Link
            href="https://wa.me/50231137818"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              size={{ base: "lg", md: "xl" }}
              px={{ base: 8, md: 12 }}
              py={{ base: 6, md: 8 }}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="medium"
              borderRadius="xl"
              bg="linear-gradient(135deg, rgba(159, 122, 234, 0.8), rgba(49, 130, 206, 0.8))"
              color="white"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(20px)"
              _hover={{
                transform: "translateY(-2px)",
                bg: "linear-gradient(135deg, rgba(159, 122, 234, 0.9), rgba(49, 130, 206, 0.9))",
                borderColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 10px 40px rgba(159, 122, 234, 0.3)"
              }}
              _active={{
                transform: "translateY(0px)"
              }}
              transition="all 0.3s ease"
            >
              {t('cta.title')}
            </Button>
          </Link>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ProductsSection;