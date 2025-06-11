"use client";

import type { Dispatch, SetStateAction } from 'react';
import type { Locale } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}

export default function LanguageToggle({ locale, setLocale }: LanguageToggleProps) {
  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'pt' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      aria-label={locale === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
      className="text-foreground hover:bg-accent/10"
    >
      <Globe className="h-5 w-5 mr-1" />
      <span className="uppercase text-sm font-medium">{locale === 'en' ? 'PT' : 'EN'}</span>
    </Button>
  );
}
