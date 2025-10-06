'use client';

import {
  Select,
  createListCollection,
} from '@chakra-ui/react';
import { useTranslations, useLocale } from 'next-intl';

interface LanguagePickerProps {
  size?: 'sm' | 'md' | 'lg';
}

const LanguagePicker = ({ size = 'sm' }: LanguagePickerProps) => {
  const t = useTranslations('Header');
  const locale = useLocale();
  
  const handleLanguageChange = (details: { value: string[] }) => {
    const newLocale = details.value[0];
    if (newLocale) {
      // Set the locale cookie
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year
      // Reload the page to see the change
      window.location.reload();
    }
  };

  const languages = createListCollection({
    items: [
      { label: t('english'), value: 'en' },
      { label: t('spanish'), value: 'es' },
    ],
  });

  return (
    <Select.Root
      collection={languages}
      size={size}
      width="auto"
      value={[locale]}
      onValueChange={handleLanguageChange}
    >
      <Select.Control>
        <Select.Trigger
          bg="white"
          borderColor="purple.200"
          borderRadius={'lg'}
          color="purple.700"
          fontWeight="medium"
          px={4}
          py={2}
          transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Select.ValueText />
          <Select.Indicator ml={2} />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content
          bg="white"
          borderColor="gray.200"
          borderRadius="lg"
          boxShadow="lg"
          p={1}
        >
          {languages.items.map((item) => (
            <Select.Item 
              key={item.value} 
              item={item}
              _hover={{ bg: 'purple.50' }}
              borderRadius="md"
              px={3}
              py={2}
              cursor="pointer"
            >
              <Select.ItemText fontWeight="medium" color="purple.600">
                {item.label}
              </Select.ItemText>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};

export default LanguagePicker;