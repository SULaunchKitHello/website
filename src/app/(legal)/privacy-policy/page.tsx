import { Metadata } from 'next';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('privacyPolicy');
  
  return {
    title: t('title'),
    description: t('description'),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PrivacyPolicy() {
  const t = useTranslations('privacyPolicy');

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
            
            {/* Overview */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('overview.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('overview.content')}
              </Text>
            </Box>

            {/* Data Collection */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('dataCollection.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall" mb={4}>
                {t('dataCollection.intro')}
              </Text>
              <VStack align="stretch" gap={3} pl={4}>
                <Box as="li" color="gray.300" listStyleType="disc" ml={4}>
                  {t('dataCollection.personal')}
                </Box>
                <Box as="li" color="gray.300" listStyleType="disc" ml={4}>
                  {t('dataCollection.usage')}
                </Box>
                <Box as="li" color="gray.300" listStyleType="disc" ml={4}>
                  {t('dataCollection.technical')}
                </Box>
              </VStack>
            </Box>

            {/* How We Use Data */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('dataUsage.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('dataUsage.content')}
              </Text>
            </Box>

            {/* Sharing and Third Parties */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('sharing.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('sharing.content')}
              </Text>
            </Box>

            {/* Security */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('security.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('security.content')}
              </Text>
            </Box>

            {/* Data Retention */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('retention.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('retention.content')}
              </Text>
            </Box>

            {/* Your Rights */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.300">
                {t('rights.title')}
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                {t('rights.content')}
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