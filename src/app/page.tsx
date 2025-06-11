
"use client";

import { useState, useEffect } from 'react';
import type { Locale } from '@/lib/translations';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ForWhomSection from '@/components/sections/ForWhomSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import { Loader2 } from 'lucide-react'; // Using a spinner icon

export default function Home() {
  const [locale, setLocale] = useState<Locale>('pt'); // Default to PT as per referencia.html
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') {
      setLocale('en');
    }
  }, []);

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header locale={locale} setLocale={setLocale} />
      <main className="flex-grow">
        <HeroSection locale={locale} />
        {/* ServicesSection now includes the "ProblemStatement" part */}
        <ServicesSection locale={locale} /> 
        <ForWhomSection locale={locale} />
        <CaseStudiesSection locale={locale} />
        <AboutSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
