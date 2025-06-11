
"use client";

import type React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // CardDescription, CardFooter not in ref
import { Button } from '@/components/ui/button';
import { Sparkles, Settings2, Users, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';

interface ServicesSectionProps {
  locale: Locale;
}

const iconComponents: { [key: string]: React.ElementType } = {
  Sparkles,
  Settings2,
  Users,
};

// New component for the "Problema que Você Resolve" section
const ProblemStatementSection = ({ locale }: { locale: Locale }) => {
  const t = getLang(locale).problemStatement;
  return (
    <section className="bg-background"> {/* bg-gray-900 in ref */}
      <div className="container mx-auto px-6 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.title, 'text-primary')}}
        />
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
          {t.description}
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105">
          <Link href="#solutions">{t.cta}</Link>
        </Button>
      </div>
    </section>
  );
};


export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getLang(locale).solutions;

  return (
    <>
      <ProblemStatementSection locale={locale} />
      <section id="solutions" className="bg-card"> {/* bg-gray-800 in ref */}
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground"
              dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle) }}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.cards.map((service, index) => {
              const IconComponent = service.icon ? iconComponents[service.icon] : null;
              const cardColorClass = index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-accent';
              
              return (
                <Card 
                  key={index} 
                  className="bg-background p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col"
                >
                  <CardHeader className="items-start p-0 mb-6"> {/* Align left like ref */}
                    {IconComponent && (
                      <div className={`flex items-center justify-center h-16 w-16 rounded-full bg-${index === 0 ? 'primary' : index === 1 ? 'secondary' : 'accent'}/10 mb-4`}>
                        <IconComponent className={`h-8 w-8 ${cardColorClass}`} />
                      </div>
                    )}
                    <CardTitle className={`text-2xl font-semibold text-foreground`}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    {service.listItems && (
                      <ul className="text-foreground/80 mb-4 space-y-2 list-disc list-inside">
                        {service.listItems.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  {service.cta && service.ctaLink && (
                     <div className="mt-auto pt-4">
                        <Button 
                            asChild 
                            variant="link" 
                            className={`font-semibold ${cardColorClass} hover:brightness-110 p-0`}
                        >
                            <Link href={service.ctaLink}>
                            {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
