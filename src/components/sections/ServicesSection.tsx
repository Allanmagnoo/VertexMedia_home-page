
"use client";

import type React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Settings2, Users, TrendingUp, Video, Lightbulb, AlertTriangle, Film, PackageCheck, Users2, Briefcase, ArrowRight } from 'lucide-react';
import type { Locale, ServiceCardEn, DetailCardContentPt } from '@/lib/translations'; // Updated ServiceCardEn import
import { getLang, renderHighlightedText } from '@/lib/translations';

interface ServicesSectionProps {
  locale: Locale;
}

const iconComponents: { [key: string]: React.ElementType } = {
  Sparkles,
  Settings2,
  Users,
  TrendingUp,
  Video,
  Lightbulb,
  AlertTriangle,
  Film,
  PackageCheck,
  Users2,
  Briefcase,
};


export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getLang(locale).solutions;

  const renderServiceCardEn = (service: ServiceCardEn, index: number) => {
    const IconComponent = service.icon ? iconComponents[service.icon] : Sparkles; // Use service.icon directly

    const cardColorClasses = [
      { main: 'text-primary', bg: 'bg-primary/10', link: 'text-primary hover:text-primary/80' }, 
      { main: 'text-secondary', bg: 'bg-secondary/10', link: 'text-secondary hover:text-secondary/80' }, 
      { main: 'text-accent', bg: 'bg-accent/10', link: 'text-accent hover:text-accent/80' } 
    ];
    const colorTheme = cardColorClasses[index % cardColorClasses.length];


    return (
      <Card
        key={service.title}
        className="bg-card p-6 md:p-8 rounded-xl shadow-xl hover:bg-muted hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.25),_0_3px_5px_-2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col group w-full max-w-md text-center" 
      >
        <CardHeader className="flex flex-col items-center p-0 mb-5 text-center"> 
          {IconComponent && (
            <div className={`flex items-center justify-center h-16 w-16 rounded-full ${colorTheme.bg} mb-6`}>
                <IconComponent className={`h-8 w-8 ${colorTheme.main}`} />
            </div>
          )}
          <CardTitle className="text-2xl font-semibold text-foreground mb-3 text-center">{service.title}</CardTitle>
        </CardHeader>

        <CardContent className="p-0 flex-grow space-y-4 text-center">
          {service.shortDescription && (
             <p className="text-foreground/80 text-sm leading-relaxed text-center mb-4">
                {service.shortDescription}
            </p>
          )}
          {service.keyFeatures && service.keyFeatures.length > 0 && (
            <>
              {/* Optional: <h5 className="text-md font-semibold text-foreground/90 mb-2 text-center">Key Features:</h5> */}
              <ul className="text-foreground/70 text-sm space-y-1.5 list-disc list-outside pl-5 text-left max-w-xs mx-auto">
                {service.keyFeatures.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </>
          )}
        </CardContent>

        {service.cta && service.ctaLink && (
           <div className="mt-auto pt-8 flex justify-center"> 
              <Button
                  asChild
                  variant="link"
                  className={`font-semibold ${colorTheme.link} p-0 text-md group-hover:underline`} 
              >
                  <Link href={service.ctaLink}>
                  {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
          </div>
        )}
      </Card>
    );
  };

  const renderServiceCardPt = (service: DetailCardContentPt, index: number) => {
    const IconComponent = service.icon ? iconComponents[service.icon] : Sparkles;
    const cardColorClasses = [
      { main: 'text-primary', bg: 'bg-primary/15', link: 'text-primary hover:text-primary/80' },
      { main: 'text-secondary', bg: 'bg-secondary/15', link: 'text-secondary hover:text-secondary/80' },
      { main: 'text-accent', bg: 'bg-accent/15', link: 'text-accent hover:text-accent/80' }
    ];
    const colorTheme = cardColorClasses[index % cardColorClasses.length];

    return (
      <Card
        key={service.title}
        className="bg-card p-6 md:p-8 rounded-xl shadow-xl hover:bg-muted hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.25),_0_3px_5px_-2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col group w-full max-w-md text-center" 
      >
        <CardHeader className="flex flex-col items-center p-0 mb-5 text-center">
          {IconComponent && (
            <div className={`flex items-center justify-center h-16 w-16 rounded-full ${colorTheme.bg} mb-6`}>
              <IconComponent className={`h-8 w-8 ${colorTheme.main}`} />
            </div>
          )}
          <CardTitle className="text-2xl font-semibold text-foreground mb-3 text-center">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow text-center">
          {service.description && <CardDescription className="text-foreground/70 mb-4 text-sm leading-relaxed text-center">{service.description}</CardDescription>}
          {service.listItems && service.listItems.length > 0 && (
            <ul className="text-foreground/70 text-sm space-y-2 list-disc list-outside pl-5 text-left max-w-xs mx-auto"> 
              {service.listItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </CardContent>
        {service.cta && service.ctaLink && (
           <div className="mt-auto pt-8 flex justify-center">
              <Button
                  asChild
                  variant="link"
                  className={`font-semibold ${colorTheme.link} p-0 text-md group-hover:underline`}
              >
                  <Link href={service.ctaLink}>
                  {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
          </div>
        )}
      </Card>
    );
  };

  return (
    <section id="solutions" className="bg-card">
      <div className="container px-6"> 
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground text-center" 
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle) }}
          />
        </div>

        {/* Introductory problem statement / description (BEFORE the cards) */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
           {locale === 'pt' && t.problemStatement ? (
             <>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground/90 mt-8 mb-4"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.problemStatement.title, 'text-primary')}} />
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                {t.problemStatement.description}
                </p>
                {t.problemStatement.cta && (
                    <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-lg transition duration-300 transform hover:scale-105">
                        <Link href="#contact">{t.problemStatement.cta}</Link> 
                    </Button>
                )}
             </>
           ) : locale === 'en' && t.description ? (
             <p className="text-lg text-foreground/80 leading-relaxed">
               {t.description}
             </p>
           ) : null}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center max-w-screen-xl mx-auto">
          {locale === 'en' && t.servicesEn?.map((service, index) => renderServiceCardEn(service, index))}
          {locale === 'pt' && t.servicesPt?.map((service, index) => renderServiceCardPt(service, index))}
        </div>
      </div>
    </section>
  );
}

    
