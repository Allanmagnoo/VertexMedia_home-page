
"use client";

import type React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Settings2, Users, TrendingUp, Video, Lightbulb, Film, PackageCheck, Users2, Briefcase, ArrowRight, Zap } from 'lucide-react';
import type { Locale, ServiceCardEn, DetailCardContentPt } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import { motion } from "framer-motion";

interface ServicesSectionProps {
  locale: Locale;
}

const iconComponents: { [key: string]: React.ElementType } = {
  Sparkles, Settings2, Users, TrendingUp, Video, Lightbulb, Film, PackageCheck, Users2, Briefcase, Zap,
};


export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getLang(locale).solutions;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, 
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const renderServiceCardEn = (service: ServiceCardEn, index: number) => {
    const IconComponent = service.icon ? iconComponents[service.icon] : Sparkles;
    const cardColorClasses = [
      { main: 'text-primary', bg: 'bg-primary/10', link: 'text-primary hover:text-primary/80', hoverBorder: 'hover:border-primary', hoverShadow: 'hover:shadow-neon-glow-primary' },
      { main: 'text-secondary', bg: 'bg-secondary/10', link: 'text-secondary hover:text-secondary/80', hoverBorder: 'hover:border-secondary', hoverShadow: 'hover:shadow-neon-glow-secondary' },
      { main: 'text-accent', bg: 'bg-accent/10', link: 'text-accent hover:text-accent/80', hoverBorder: 'hover:border-accent', hoverShadow: 'hover:shadow-neon-glow-accent' }
    ];
    const colorTheme = cardColorClasses[index % cardColorClasses.length];

    return (
      <motion.div
        key={service.title}
        custom={index}
        variants={cardVariants}
        className="w-full max-w-md" 
      >
        <Card
          className={`bg-card p-6 md:p-8 rounded-xl border border-border/50 shadow-lg ${colorTheme.hoverBorder} ${colorTheme.hoverShadow} transition-all duration-300 ease-in-out flex flex-col group text-center h-full transform hover:-translate-y-1`}
        >
          <CardHeader className="flex flex-col items-center p-0 mb-5 text-center">
            {IconComponent && (
              <div className={`flex items-center justify-center h-14 w-14 mb-5 rounded-lg ${colorTheme.bg}`}>
                  <IconComponent className={`h-7 w-7 ${colorTheme.main}`} />
              </div>
            )}
            <CardTitle className="text-xl font-semibold text-foreground mb-2 text-center">{service.title}</CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex-grow space-y-3 text-center">
            {service.shortDescription && (
              <p className="text-foreground/70 text-sm leading-relaxed text-center mb-3">
                  {service.shortDescription}
              </p>
            )}
            {service.keyFeatures && service.keyFeatures.length > 0 && (
              <ul className="text-foreground/60 text-sm space-y-1.5 list-disc list-outside pl-5 text-left max-w-xs mx-auto">
                {service.keyFeatures.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            )}
          </CardContent>

          {service.cta && service.ctaLink && (
            <div className="mt-auto pt-6 flex justify-center">
                <Button
                    asChild
                    variant="link"
                    className={`font-semibold ${colorTheme.link} p-0 text-sm group-hover:underline`}
                >
                    <Link href={service.ctaLink}>
                    {service.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          )}
        </Card>
      </motion.div>
    );
  };

  const renderServiceCardPt = (service: DetailCardContentPt, index: number) => {
    const IconComponent = service.icon ? iconComponents[service.icon] : Sparkles;
    const cardColorClasses = [
      { main: 'text-primary', bg: 'bg-primary/15', link: 'text-primary hover:text-primary/80', hoverBorder: 'hover:border-primary', hoverShadow: 'hover:shadow-neon-glow-primary' },
      { main: 'text-secondary', bg: 'bg-secondary/15', link: 'text-secondary hover:text-secondary/80', hoverBorder: 'hover:border-secondary', hoverShadow: 'hover:shadow-neon-glow-secondary' },
      { main: 'text-accent', bg: 'bg-accent/15', link: 'text-accent hover:text-accent/80', hoverBorder: 'hover:border-accent', hoverShadow: 'hover:shadow-neon-glow-accent' }
    ];
    const colorTheme = cardColorClasses[index % cardColorClasses.length];

    return (
      <motion.div
        key={service.title}
        custom={index}
        variants={cardVariants}
        className="w-full max-w-md"
      >
        <Card
           className={`bg-card p-6 md:p-8 rounded-xl border border-border/50 shadow-lg ${colorTheme.hoverBorder} ${colorTheme.hoverShadow} transition-all duration-300 ease-in-out flex flex-col group text-center h-full transform hover:-translate-y-1`}
        >
          <CardHeader className="flex flex-col items-center p-0 mb-5 text-center">
            {IconComponent && (
              <div className={`flex items-center justify-center h-14 w-14 mb-5 rounded-lg ${colorTheme.bg}`}>
                <IconComponent className={`h-7 w-7 ${colorTheme.main}`} />
              </div>
            )}
            <CardTitle className="text-xl font-semibold text-foreground mb-2 text-center">{service.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-grow text-center">
            {service.description && <p className="text-foreground/70 mb-3 text-sm leading-relaxed text-center">{service.description}</p>}
            {service.listItems && service.listItems.length > 0 && (
              <ul className="text-foreground/60 text-sm space-y-1.5 list-disc list-outside pl-5 text-left max-w-xs mx-auto">
                {service.listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </CardContent>
          {service.cta && service.ctaLink && (
            <div className="mt-auto pt-6 flex justify-center">
                <Button
                    asChild
                    variant="link"
                    className={`font-semibold ${colorTheme.link} p-0 text-sm group-hover:underline`}
                >
                    <Link href={service.ctaLink}>
                    {service.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          )}
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="solutions" className="bg-background">
      <div className="container px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center"
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle) }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ ...sectionVariants, visible: { ...sectionVariants.visible, transition: { ...sectionVariants.visible.transition, delay: 0.2}}}}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
           {locale === 'pt' && t.problemStatement ? (
             <>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 mt-8 mb-4"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.problemStatement.title, 'text-primary')}} />
                <p className="text-md md:text-lg text-foreground/70 mb-8 leading-relaxed">
                {t.problemStatement.description}
                </p>
                {t.problemStatement.cta && (
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md hover:shadow-neon-glow-accent transition-all duration-300 transform hover:scale-105 rounded-md">
                        <Link href="#contact">{t.problemStatement.cta}</Link>
                    </Button>
                )}
             </>
           ) : locale === 'en' && t.description ? (
             <p className="text-md md:text-lg text-foreground/70 leading-relaxed">
               {t.description}
             </p>
           ) : null}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center max-w-screen-xl mx-auto"
        >
          {locale === 'en' && t.servicesEn?.map((service, index) => renderServiceCardEn(service, index))}
          {locale === 'pt' && t.servicesPt?.map((service, index) => renderServiceCardPt(service, index))}
        </motion.div>
      </div>
    </section>
  );
}
