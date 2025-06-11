
"use client";

import type React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Settings2, Users, TrendingUp, Video, Lightbulb, AlertTriangle, Film, PackageCheck, Users2, Briefcase } from 'lucide-react'; // Added more icons
import type { Locale, ServiceDetailEn, DetailCardContentPt } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';

interface ServicesSectionProps {
  locale: Locale;
}

const iconComponents: { [key: string]: React.ElementType } = {
  Sparkles,
  Settings2,
  Users,
  Users2, // For partnership/teams
  TrendingUp, // For performance
  Video, // For video specific
  Lightbulb, // For ideas/benefits
  AlertTriangle, // For problems
  Film, // For solutions (audiovisual)
  PackageCheck, // For delivery/results
  Briefcase, // For business/strategy
};


export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getLang(locale).solutions;

  const renderServiceCardEn = (service: ServiceDetailEn, index: number) => {
    const IconComponent = service.icon ? iconComponents[service.icon] : Briefcase; // Default icon
    const cardColorClass = ['text-primary', 'text-secondary', 'text-accent'][index % 3];

    return (
      <Card 
        key={service.title} 
        className="bg-background p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col"
      >
        <CardHeader className="items-start p-0 mb-4">
          {IconComponent && (
            <div className={`flex items-center justify-center h-12 w-12 rounded-full bg-${['primary', 'secondary', 'accent'][index % 3]}/10 mb-3`}>
              <IconComponent className={`h-7 w-7 ${cardColorClass}`} />
            </div>
          )}
          <CardTitle className={`text-2xl font-semibold text-foreground`}>{service.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="p-0 flex-grow space-y-4">
          <div>
            <h4 className="font-semibold text-foreground/90 mb-1">{service.problem.title}</h4>
            <p className="text-foreground/70 text-sm">{service.problem.description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground/90 mb-1">{service.solution.title}</h4>
            <p className="text-foreground/70 text-sm mb-2">{service.solution.description}</p>
            {service.solution.listItems && (
              <ul className="text-foreground/70 text-sm space-y-1 list-disc list-inside pl-2">
                {service.solution.listItems.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            )}
          </div>
           <div>
            <h4 className="font-semibold text-foreground/90 mb-1">{service.benefit.title}</h4>
            <p className="text-foreground/70 text-sm">{service.benefit.description}</p>
          </div>
        </CardContent>

        {service.cta && service.ctaLink && (
           <div className="mt-auto pt-6">
              <Button 
                  asChild 
                  variant="link" 
                  className={`font-semibold ${cardColorClass} hover:brightness-110 p-0 text-md`}
              >
                  <Link href={service.ctaLink}>
                  {service.cta} <TrendingUp className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
          </div>
        )}
      </Card>
    );
  };

  const renderServiceCardPt = (service: DetailCardContentPt, index: number) => {
    const IconComponent = service.icon ? iconComponents[service.icon] : Sparkles;
    const cardColorClass = ['text-primary', 'text-secondary', 'text-accent'][index % 3];
    
    return (
      <Card 
        key={service.title} 
        className="bg-background p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col"
      >
        <CardHeader className="items-start p-0 mb-4">
          {IconComponent && (
            <div className={`flex items-center justify-center h-12 w-12 rounded-full bg-${['primary', 'secondary', 'accent'][index % 3]}/10 mb-3`}>
              <IconComponent className={`h-7 w-7 ${cardColorClass}`} />
            </div>
          )}
          <CardTitle className={`text-2xl font-semibold text-foreground`}>{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
          <CardDescription className="text-foreground/70 mb-3 text-sm">{service.description}</CardDescription>
          {service.listItems && (
            <ul className="text-foreground/70 text-sm space-y-1 list-disc list-inside">
              {service.listItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </CardContent>
        {service.cta && service.ctaLink && (
           <div className="mt-auto pt-6">
              <Button 
                  asChild 
                  variant="link" 
                  className={`font-semibold ${cardColorClass} hover:brightness-110 p-0 text-md`}
              >
                  <Link href={service.ctaLink}>
                  {service.cta} <TrendingUp className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
          </div>
        )}
      </Card>
    );
  };
  
  return (
    <section id="solutions" className="bg-card">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground"
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle) }}
          />
           {/* Optional: Sub-headline from problemStatement if it exists */}
           {t.problemStatement && (
             <p className="text-lg text-foreground/80 max-w-3xl mx-auto mt-4">
               {t.problemStatement.description}
             </p>
           )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locale === 'en' && t.servicesEn?.map((service, index) => renderServiceCardEn(service, index))}
          {locale === 'pt' && t.servicesPt?.map((service, index) => renderServiceCardPt(service, index))}
        </div>
      </div>
    </section>
  );
}

    