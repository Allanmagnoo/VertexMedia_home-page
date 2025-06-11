
"use client";

import type React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Settings2, Users, TrendingUp, Video, Lightbulb, AlertTriangle, Film, PackageCheck, Users2, Briefcase, ArrowRight } from 'lucide-react';
import type { Locale, ServiceDetailEn, DetailCardContentPt } from '@/lib/translations';
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

  const renderServiceCardEn = (service: ServiceDetailEn, index: number) => {
    const ProblemIcon = service.problem.icon ? iconComponents[service.problem.icon] : AlertTriangle;
    const SolutionIcon = service.solution.icon ? iconComponents[service.solution.icon] : Film;
    const BenefitIcon = service.benefit.icon ? iconComponents[service.benefit.icon] : Lightbulb;

    // Cycle through primary, secondary, accent based on referencia.html visual hierarchy for cards
    const cardColorClasses = [
      { main: 'text-primary', bg: 'bg-primary/10', link: 'text-primary hover:text-primary/80' }, // Blue
      { main: 'text-secondary', bg: 'bg-secondary/10', link: 'text-secondary hover:text-secondary/80' }, // Purple
      { main: 'text-accent', bg: 'bg-accent/10', link: 'text-accent hover:text-accent/80' } // Teal
    ];
    const colorTheme = cardColorClasses[index % cardColorClasses.length];


    return (
      <Card
        key={service.title}
        // Matching card styles from referencia.html: bg-gray-700 p-8 rounded-xl shadow-xl card-hover-dark
        // Theme: bg-card p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5
        className="bg-card p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 flex flex-col group"
      >
        <CardHeader className="items-start p-0 mb-5"> {/* Increased mb */}
          {/* Icon style from referencia.html: h-16 w-16 rounded-full bg-blue-500 etc. */}
          <div className={`flex items-center justify-center h-16 w-16 rounded-full ${colorTheme.bg} mb-6`}>
            <SolutionIcon className={`h-8 w-8 ${colorTheme.main}`} />
          </div>
          <CardTitle className="text-2xl font-semibold text-foreground mb-3">{service.title}</CardTitle>
        </CardHeader>

        <CardContent className="p-0 flex-grow space-y-5">
          <div>
            <h4 className="flex items-center text-lg font-semibold text-foreground/90 mb-2">
              <ProblemIcon className={`w-5 h-5 mr-2.5 ${colorTheme.main}`} /> {service.problem.title}
            </h4>
            <p className="text-foreground/80 text-sm leading-relaxed ml-[34px]">{service.problem.description}</p>
          </div>
          <div>
            <h4 className="flex items-center text-lg font-semibold text-foreground/90 mb-2">
              <SolutionIcon className={`w-5 h-5 mr-2.5 ${colorTheme.main}`} /> {service.solution.title}
            </h4>
            <p className="text-foreground/70 text-sm leading-relaxed mb-2 ml-[34px]">{service.solution.description}</p>
            {service.solution.listItems && (
              <ul className="text-foreground/70 text-sm space-y-1.5 list-disc list-outside pl-5 ml-[34px]">
                {service.solution.listItems.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            )}
          </div>
           <div>
            <h4 className="flex items-center text-lg font-semibold text-foreground/90 mb-2">
               <BenefitIcon className={`w-5 h-5 mr-2.5 ${colorTheme.main}`} /> {service.benefit.title}
            </h4>
            <p className="text-foreground/70 text-sm leading-relaxed ml-[34px]">{service.benefit.description}</p>
          </div>
        </CardContent>

        {service.cta && service.ctaLink && (
           <div className="mt-auto pt-8"> {/* Ensure CTA is at the bottom */}
              <Button
                  asChild
                  variant="link"
                  className={`font-semibold ${colorTheme.link} p-0 text-md group-hover:underline`} // Ensure underline on hover
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
        className="bg-card p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 flex flex-col group"
      >
        <CardHeader className="items-start p-0 mb-5">
          {IconComponent && (
            <div className={`flex items-center justify-center h-16 w-16 rounded-full ${colorTheme.bg} mb-6`}>
              <IconComponent className={`h-8 w-8 ${colorTheme.main}`} />
            </div>
          )}
          <CardTitle className="text-2xl font-semibold text-foreground mb-3">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
          {service.description && <CardDescription className="text-foreground/70 mb-4 text-sm leading-relaxed">{service.description}</CardDescription>}
          {service.listItems && (
            <ul className="text-foreground/70 text-sm space-y-2 list-disc list-outside pl-5"> {/* Increased space-y */}
              {service.listItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </CardContent>
        {service.cta && service.ctaLink && (
           <div className="mt-auto pt-8">
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
    // section py-16 md:py-24 bg-gray-800 (ref) -> Theme: section py-16 md:py-24 bg-card
    <section id="solutions" className="bg-card">
      <div className="container px-6"> {/* Ensure container has padding */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground" // Consistent with ref
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle) }}
          />
           {(locale === 'pt' && t.problemStatement) ? (
             <>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground/90 mt-8 mb-4 max-w-3xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.problemStatement.title, 'text-primary')}} />
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                {t.problemStatement.description}
                </p>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-lg transition duration-300 transform hover:scale-105">
                    <Link href="#solutions">{t.problemStatement.cta}</Link>
                </Button>
             </>
           ) : locale === 'en' && t.description ? (
             <p className="text-lg text-foreground/80 max-w-3xl mx-auto mt-6 leading-relaxed">
               {t.description}
             </p>
           ) : null}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locale === 'en' && t.servicesEn?.map((service, index) => renderServiceCardEn(service, index))}
          {locale === 'pt' && t.servicesPt?.map((service, index) => renderServiceCardPt(service, index))}
        </div>
      </div>
    </section>
  );
}
