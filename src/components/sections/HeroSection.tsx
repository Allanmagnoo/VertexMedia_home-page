
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import Link from 'next/link';
import { motion } from "framer-motion";

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = getLang(locale).hero;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-card via-background to-background opacity-40"></div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          className="py-8 md:py-12" 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {locale === 'pt' && t.mainImageUrl && (
            <motion.div
              className="mx-auto mb-8 sm:mb-10 w-full max-w-md lg:max-w-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <Image
                src={t.mainImageUrl}
                alt={t.mainImageHint || "VertexMedia Hero Image"}
                data-ai-hint={t.mainImageHint || "vertexmedia audiovisual estrategico"}
                width={500}
                height={250}
                className="rounded-lg object-contain shadow-lg"
                priority
              />
            </motion.div>
          )}

          {locale === 'en' ? (
            <>
              {t.mainHeadline && (
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-foreground"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainHeadline) }}
                />
              )}
              {t.subHeadline && (
                <p
                  className="text-lg sm:text-xl md:text-2xl font-medium mb-10 text-foreground/80 leading-relaxed max-w-3xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.subHeadline) }}
                />
              )}
            </>
          ) : (
            <>
              {t.title && (
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-foreground"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.title) }}
                />
              )}
              {t.subtitle && (
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground/90 leading-snug"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.subtitle, 'text-primary', 'gradient-text') }}
                />
              )}
              {t.description && (
                <p
                  className="text-lg sm:text-xl mb-10 text-foreground/80 leading-relaxed max-w-3xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.description) }}
                />
              )}
            </>
          )}

          <div className="space-y-4 md:space-y-0 md:space-x-6">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3.5 px-8 rounded-md text-lg shadow-lg hover:shadow-neon-glow-accent transition-all duration-300 transform hover:scale-105 inline-block"
            >
              <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>{t.ctaPrimary}</Link>
            </Button>
            {locale === 'pt' && t.ctaSecondary && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3.5 px-8 rounded-md text-lg shadow-md hover:shadow-neon-glow-primary transition-all duration-300 transform hover:scale-105 inline-block"
              >
                <Link href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')}>{t.ctaSecondary}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
