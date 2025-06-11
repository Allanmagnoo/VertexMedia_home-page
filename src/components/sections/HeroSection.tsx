"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = getLang(locale).hero;
  
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/3F51B5/F0F2F5?text=+"
          alt="Abstract background representing audiovisual capabilities"
          data-ai-hint="abstract audiovisual"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background"></div>
      </div>
      
      <div className="container relative z-10 text-center animate-fade-in animation-delay-200">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in animation-delay-400"
            style={{animationFillMode: 'backwards', animationDelay: '0.4s'}}>
          {t.title}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl animate-fade-in animation-delay-600"
           style={{animationFillMode: 'backwards', animationDelay: '0.6s'}}>
          {t.subtitle}
        </p>
        <div className="mt-10 animate-fade-in animation-delay-800"
             style={{animationFillMode: 'backwards', animationDelay: '0.8s'}}>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            onClick={scrollToContact}
            aria-label={t.cta}
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
