'use client';

import { Box, Container, Heading, Text, SimpleGrid, Link } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { MotionBox } from '../Hero/utils/motionComponents';
import ServiceCard from './ServiceCard';
import FloatingShapes from '../Hero/Background/FloatingShapes';

const ServicesSection = () => {
  const t = useTranslations('services');

  const services = [
    {
      id: 'software-development',
      title: t('softwareDevelopment.title'),
      description: t('softwareDevelopment.description'),
      deliverables: [
        t('softwareDevelopment.deliverables.webApps'),
        t('softwareDevelopment.deliverables.mobileApps'),
        t('softwareDevelopment.deliverables.apiSystems'),
        t('softwareDevelopment.deliverables.database')
      ],
      icon: '🛠️',
      gradient: 'linear(to-br, purple.400, blue.500)'
    },
    {
      id: 'consulting',
      title: t('consulting.title'),
      description: t('consulting.description'),
      deliverables: [
        t('consulting.deliverables.strategy'),
        t('consulting.deliverables.transformation'),
        t('consulting.deliverables.optimization'),
        t('consulting.deliverables.audits')
      ],
      icon: '💡',
      gradient: 'linear(to-br, blue.400, cyan.500)'
    },
    {
      id: 'uiux-engineering',
      title: t('uiuxEngineering.title'),
      description: t('uiuxEngineering.description'),
      deliverables: [
        t('uiuxEngineering.deliverables.uxDesign'),
        t('uiuxEngineering.deliverables.prototyping'),
        t('uiuxEngineering.deliverables.designSystems'),
        t('uiuxEngineering.deliverables.usabilityTesting')
      ],
      icon: '🎨',
      gradient: 'linear(to-br, purple.500, pink.400)'
    }
  ];

  return (
    <Box
      id="services"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 12, md: 16 }}
      overflow="hidden"
      bg="linear-gradient(135deg, rgba(26, 32, 44, 0.95) 0%, rgba(45, 55, 72, 0.95) 50%, rgba(26, 32, 44, 0.95) 100%)"
    >
      {/* Celestial Background */}
      <FloatingShapes />
      
      {/* Background gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(45deg, rgba(159, 122, 234, 0.03) 0%, rgba(49, 130, 206, 0.03) 100%)"
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

        {/* Services Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          gap={{ base: 8, md: 10 }}
          w="full"
        >
          {services.map((service, index) => (
            <MotionBox
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
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
          <MotionBox
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://wa.me/50231137818"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "none" }}
            >
              <Box
                as="button"
                px={{ base: 8, md: 12 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="medium"
                borderRadius="xl"
                bg="linear-gradient(135deg, rgba(159, 122, 234, 0.8), rgba(49, 130, 206, 0.8))"
                color="white"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(20px)"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "linear-gradient(135deg, rgba(159, 122, 234, 0.9), rgba(49, 130, 206, 0.9))",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 40px rgba(159, 122, 234, 0.3)"
                }}
              >
                {t('cta.title')}
              </Box>
            </Link>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ServicesSection;