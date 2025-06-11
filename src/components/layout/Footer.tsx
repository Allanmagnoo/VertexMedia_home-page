"use client";

import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = getLang(locale).footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            {t.rights.replace('{year}', currentYear.toString())}
          </p>
          <div className="mt-4 flex justify-center space-x-6 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
