import { Metadata } from 'next';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('termsOfService');
  
  return {
    title: t('title'),
    description: t('description'),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function TermsOfService() {
  const t = useTranslations('termsOfService');

  return (
    <Box
      minH="100vh"
      bg="linear-gradient(135deg, rgba(26, 32, 44, 0.95) 0%, rgba(45, 55, 72, 0.95) 50%, rgba(26, 32, 44, 0.95) 100%)"
      color="white"
      pt={{ base: 20, md: 24 }}
      pb={{ base: 12, md: 16 }}
    >
      <Container maxW="7xl" px={{ base: 6, md: 8 }}>
        <VStack align="stretch" gap={{ base: 8, md: 12 }}>
          
          {/* Header */}
          <VStack align="stretch" gap={4} textAlign="center">
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
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
            >
              {t('subtitle')}
            </Text>
          </VStack>

          {/* Content Sections */}
          <VStack align="stretch" gap={8}>
            
            {/* Acceptance */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('acceptance.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('acceptance.content')}
              </Text>
            </Box>

            {/* Services */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('services.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('services.content')}
              </Text>
            </Box>

            {/* User Responsibilities */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('responsibilities.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall" mb={4}>
                {t('responsibilities.intro')}
              </Text>
              <VStack align="stretch" gap={2} pl={4}>
                <Box as="li" color="gray.300" listStyleType="disc" ml={4}>
                  {t('responsibilities.legal')}
                </Box>
                <Box as="li" color="gray.300" listStyleType="disc" ml={4}>
                  {t('responsibilities.accurate')}
                </Box>
                <Box as="li" color="gray.300" listStyleType="disc" ml={4}>
                  {t('responsibilities.security')}
                </Box>
                <Box as="li" color="gray.300" listStyleType="disc" ml={4}>
                  {t('responsibilities.prohibited')}
                </Box>
              </VStack>
            </Box>

            {/* Intellectual Property */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('intellectualProperty.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('intellectualProperty.content')}
              </Text>
            </Box>

            {/* Limitation of Liability */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('liability.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('liability.content')}
              </Text>
            </Box>

            {/* Termination */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('termination.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('termination.content')}
              </Text>
            </Box>

            {/* Changes */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('changes.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('changes.content')}
              </Text>
            </Box>

            {/* Contact */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('contact.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('contact.content')}
              </Text>
            </Box>

          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}