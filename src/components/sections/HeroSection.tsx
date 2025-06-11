
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background py-20 md:py-32">
      <div className="absolute inset-0 bg-card opacity-50 z-0"></div> 
      
      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        <div className="bg-background/80 p-8 md:p-12 rounded-xl shadow-2xl animate-fade-in animation-delay-200">
          {locale === 'pt' && t.mainImageUrl && (
            <Image
              src={t.mainImageUrl}
              alt={t.mainImageHint || "VertexMedia Hero Image"}
              data-ai-hint={t.mainImageHint || "equipe colaborando video"}
              width={500}
              height={250}
              className="mx-auto mb-8 rounded-lg w-full max-w-md object-contain"
              priority
            />
          )}

          {locale === 'en' ? (
            <>
              {t.problemTitle && (
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground/80"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.problemTitle) }} />
              )}
              {t.problemDescription && <p className="text-md md:text-lg mb-6 text-foreground/70">{t.problemDescription}</p>}
              
              {t.solutionTitle && (
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-foreground"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.solutionTitle) }} />
              )}
              {t.solutionDescription && <p className="text-lg md:text-xl mb-6 text-foreground/80">{t.solutionDescription}</p>}

              {t.benefitTitle && (
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground/90"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.benefitTitle) }} />
              )}
              {t.benefitDescription && <p className="text-md md:text-lg mb-8 text-foreground/70">{t.benefitDescription}</p>}
            </>
          ) : ( // PT version
            <>
              {t.title && (
                <h1 
                  className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-foreground"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.title) }}
                />
              )}
              {t.subtitle && (
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground/90">
                  {t.subtitle}
                </h2>
              )}
              {t.description && (
                <p className="text-lg md:text-xl mb-8 text-foreground/80">
                  {t.description}
                </p>
              )}
            </>
          )}
          
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 inline-block"
            >
              <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>{t.ctaPrimary}</Link>
            </Button>
            {locale === 'pt' && t.ctaSecondary && (
              <Button 
                asChild
                size="lg" 
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-8 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 inline-block"
              >
                <Link href="#cases" onClick={(e) => scrollToSection(e, '#cases')}>{t.ctaSecondary}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

    