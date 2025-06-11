
"use client";

import { useState, useEffect } from 'react';
import type { Locale } from '@/lib/translations';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en'); // Default to EN as per brief's focus
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Keep existing logic to set PT if browser lang is PT, otherwise default to EN.
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt') {
      setLocale('pt');
    }
  }, []);

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  // Determine section order based on locale
  // PT: Início, Soluções, Portfólio, Contato. (About is part of solutions or footer)
  // EN: Hero (P-S-B), Solutions (P-S-B per service), Work (Cases), About Us (Our Edge), Contact (Book a Call).
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header locale={locale} setLocale={setLocale} />
      <main className="flex-grow">
        <HeroSection locale={locale} />
        <ServicesSection locale={locale} /> 
        <CaseStudiesSection locale={locale} />
        {/* "About Us" is more prominent for EN */}
        {(locale === 'en' || locale === 'pt') && <AboutSection locale={locale} />}
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

    