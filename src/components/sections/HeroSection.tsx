
"use client";

import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';

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

  const clientLogos = [
    { src: "https://placehold.co/120x40.png/transparent/9CA3AF?text=Cliente+1", alt: "Logo Cliente 1", hint: "empresa tecnologia" },
    { src: "https://placehold.co/110x45.png/transparent/9CA3AF?text=Cliente+2", alt: "Logo Cliente 2", hint: "marca varejista" },
    { src: "https://placehold.co/130x35.png/transparent/9CA3AF?text=Cliente+3", alt: "Logo Cliente 3", hint: "startup global" },
    { src: "https://placehold.co/100x50.png/transparent/9CA3AF?text=Cliente+4", alt: "Logo Cliente 4", hint: "consultoria negocios" },
    { src: "https://placehold.co/120x40.png/transparent/9CA3AF?text=Cliente+5", alt: "Logo Cliente 5", hint: "produtora midia" },
  ];

  const backgroundImageSrc = locale === 'pt' ? "/images/hero-main-pt.jpg" : "/images/homepage_bg_abstrato02.jpg";
  const backgroundImageAlt = locale === 'pt'
    ? "VertexMedia fundo hero colaboração equipe audiovisual estratégica Brasil"
    : "VertexMedia abstract fluid particles background for strategic audiovisual services";
  const backgroundImageHint = locale === 'pt' ? "audiovisual brasil equipe" : "abstract background";

  return (
    <section
      id="hero"
      className="relative w-full h-[70vh] flex flex-col overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          data-ai-hint={backgroundImageHint}
          width={1920} 
          height={1080}
          priority
          className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-100"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>
      
      {/* Main Content Area (Text Box) */}
      <div className="relative z-20 flex flex-col flex-grow justify-center items-center container mx-auto px-6">
        <motion.div
          className="bg-card/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10 mx-auto max-w-3xl lg:max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
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
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-foreground"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.title, 'text-primary', 'gradient-text') }}
                />
              )}
              {t.subtitle && (
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground/90 leading-snug"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.subtitle, 'text-primary', 'gradient-text') }}
                />
              )}
              {t.description && (
                <p
                  className="text-base sm:text-lg mb-10 text-foreground/80 leading-relaxed max-w-2xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.description) }}
                />
              )}
            </>
          )}

          <div className="space-y-4 md:space-y-0 md:space-x-6">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-7 sm:py-3.5 sm:px-8 rounded-md text-base sm:text-lg shadow-lg hover:shadow-neon-glow-accent transition-all duration-300 transform hover:scale-105 inline-block"
            >
              <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>{t.ctaPrimary}</Link>
            </Button>
            {locale === 'pt' && t.ctaSecondary && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 px-7 sm:py-3.5 sm:px-8 rounded-md text-base sm:text-lg shadow-md hover:shadow-neon-glow-primary transition-all duration-300 transform hover:scale-105 inline-block"
              >
                <Link href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')}>{t.ctaSecondary}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Client Logos Section for PT - now a distinct flex item at the bottom */}
      {locale === 'pt' && t.clientLogosTitle && (
        <div className="relative z-20 w-full bg-card/20 backdrop-blur-lg border-t border-white/10 shadow-xl">
          <motion.div
            className="container mx-auto py-6 md:py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-5 text-center">
              {t.clientLogosTitle}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-4 sm:gap-y-5">
              {clientLogos.map((logo, index) => (
                <div key={index} className="opacity-75 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    data-ai-hint={logo.hint}
                    width={100}
                    height={34}
                    className="object-contain h-7 md:h-8 w-auto"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
