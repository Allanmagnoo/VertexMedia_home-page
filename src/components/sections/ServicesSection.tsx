
"use client";

import type React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { AlertTriangle, Zap, TrendingUp, Briefcase, Film, Lightbulb } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang, type ServicesTranslations, type CardContent as CardContentType } from '@/lib/translations';

interface ServicesSectionProps {
  locale: Locale;
}

const iconComponents: { [key: string]: React.ElementType } = {
  AlertTriangle: AlertTriangle,
  Zap: Zap,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Film: Film,
  Lightbulb: Lightbulb,
};

const renderHighlightedText = (text: string) => {
  const parts = text.split(/<highlight>(.*?)<\/highlight>/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) { 
      const highlightClass = (Math.floor(index / 2)) % 2 === 0 ? "text-primary font-semibold" : "text-accent font-semibold";
      return <span key={index} className={highlightClass}>{part}</span>;
    }
    return part;
  });
};

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getLang(locale).services as ServicesTranslations;

  const sectionData: Array<CardContentType & { iconName: string }> = [
    { ...t.problemCard, iconName: t.problemCard.icon },
    { ...t.solutionCard, iconName: t.solutionCard.icon },
    { ...t.benefitCard, iconName: t.benefitCard.icon },
  ];

  return (
    <section id="services" className="bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.mainTitle}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {sectionData.map((service, index) => {
            const IconComponent = iconComponents[service.iconName];
            return (
              <Card 
                key={index} 
                className="group shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out animate-fade-in hover:scale-105"
                style={{animationDelay: `${index * 200 + 200}ms`, animationFillMode: 'backwards'}}
              >
                <CardHeader className="items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-foreground/80 min-h-[10em] md:min-h-[12em]"> {/* Increased min-height for more text */}
                    {renderHighlightedText(service.desc)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
