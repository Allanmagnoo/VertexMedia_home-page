
"use client";

import type { Dispatch, SetStateAction } from 'react';
import type { Locale } from '@/lib/translations';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}

export default function LanguageToggle({ locale, setLocale }: LanguageToggleProps) {
  const toggleLanguage = (newLocale: Locale) => {
    if (locale !== newLocale) {
      setLocale(newLocale);
    }
  };

  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      <Button
        variant="ghost"
        size="sm" 
        onClick={() => toggleLanguage('en')}
        aria-label="Switch to English"
        className={`
          px-2 py-1 md:px-3
          text-sm font-medium rounded-md
          transition-colors duration-200
          ${locale === 'en' ? 'bg-primary/20 text-primary font-semibold' : 'text-foreground/70 hover:bg-accent/10 hover:text-accent-foreground'}
        `}
      >
        EN
      </Button>
      <span className="text-foreground/50">/</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => toggleLanguage('pt')}
        aria-label="Mudar para Português"
        className={`
          px-2 py-1 md:px-3
          text-sm font-medium rounded-md
          transition-colors duration-200
          ${locale === 'pt' ? 'bg-primary/20 text-primary font-semibold' : 'text-foreground/70 hover:bg-accent/10 hover:text-accent-foreground'}
        `}
      >
        PT
      </Button>
    </div>
  );
}
