
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
// ArrowRight not used in referencia.html hero buttons
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import Link from 'next/link';

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = getLang(locale).hero;
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1)); // remove #
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // min-h-screen from referencia, flex items-center justify-center
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"> {/* bg-background is dark gray */}
      {/* referencia.html hero-bg-dark has bg-gray-800, and an overlay bg-black bg-opacity-40 */}
      {/* Using a simpler overlay here */}
      <div className="absolute inset-0 bg-card opacity-50 z-0"></div> 
      
      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        {/* bg-black bg-opacity-40 p-8 md:p-16 rounded-xl from referencia */}
        <div className="bg-background/70 p-8 md:p-16 rounded-xl shadow-2xl animate-fade-in animation-delay-200">
          <Image
            src={t.mainImageUrl}
            alt={t.mainImageHint}
            data-ai-hint={t.mainImageHint}
            width={500}
            height={250}
            className="mx-auto mb-8 rounded-lg w-full max-w-md object-contain"
            priority
          />
          <h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-foreground"
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.title) }}
          />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground/90">
            {t.subtitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-foreground/80">
            {t.description}
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 inline-block"
            >
              <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>{t.ctaPrimary}</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="secondary" // Using secondary for the other button
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-8 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 inline-block"
            >
              <Link href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')}>{t.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
