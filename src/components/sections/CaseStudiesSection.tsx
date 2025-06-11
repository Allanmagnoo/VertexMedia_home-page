
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // CardFooter removed
import { Button } from '@/components/ui/button';
// ArrowRight not in ref's "View Full Portfolio"
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';

interface CaseStudiesSectionProps {
  locale: Locale;
}

export default function CaseStudiesSection({ locale }: CaseStudiesSectionProps) {
  const t = getLang(locale).caseStudies;

  const categoryColors = [
    'text-primary', // Varejo
    'text-secondary', // Institucional
    'text-accent', // Performance (using accent, as ref uses teal which is not defined in PRD)
    'text-yellow-400', // Imobiliario (using a distinct yellow, as ref uses amber)
  ];


  return (
    <section id="cases" className="bg-card"> {/* bg-gray-800 in ref */}
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground"
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle) }}
          />
        </div>

        {t.categories.map((category, catIndex) => (
          <div key={category.categoryTitle} className="mb-16">
            <h3 className={`text-2xl md:text-3xl font-semibold ${categoryColors[catIndex % categoryColors.length]} mb-8 text-center md:text-left`}>
              {category.categoryTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.cases.map((study, index) => (
                <Card 
                  key={study.title} 
                  className="bg-background rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={study.imageUrl}
                      alt={study.title}
                      data-ai-hint={study.imageHint}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-xl font-semibold text-foreground mb-2">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow">
                    <CardDescription className="text-foreground/80 text-sm">{study.description}</CardDescription>
                  </CardContent>
                  {/* Individual case CTAs are not in referencia.html */}
                </Card>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-16">
          <Button 
            asChild 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            {/* Link to a portfolio page if it exists, otherwise remove or link to #contact */}
            <Link href="#contact">{t.portfolioCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
