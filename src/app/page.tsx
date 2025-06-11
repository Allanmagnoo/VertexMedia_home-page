"use client";

import { useState, useEffect } from 'react';
import type { Locale } from '@/lib/translations';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Optional: Detect browser language or load preference from localStorage
    // const browserLang = navigator.language.split('-')[0];
    // if (browserLang === 'pt') {
    //   setLocale('pt');
    // }
  }, []);

  // Avoid hydration mismatch by only rendering locale-dependent content on client
  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground items-center justify-center">
        <div className="animate-pulse">
          {/* Simple SVG or text placeholder */}
          <svg className="w-16 h-16 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header locale={locale} setLocale={setLocale} />
      <main className="flex-grow">
        <HeroSection locale={locale} />
        <ServicesSection locale={locale} />
        <CaseStudiesSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
