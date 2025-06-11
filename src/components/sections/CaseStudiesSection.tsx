
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Locale, CaseStudyEn, CaseStudyPt, CaseStudyCategoryEn, CaseStudyCategoryPt } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import { Target, CheckCircle, BarChart2 } from 'lucide-react'; // Icons for Challenge, Solution, Result

interface CaseStudiesSectionProps {
  locale: Locale;
}

export default function CaseStudiesSection({ locale }: CaseStudiesSectionProps) {
  const t = getLang(locale).caseStudies;

  const renderCaseStudyEn = (study: CaseStudyEn) => (
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
        <CardTitle className="text-xl font-semibold text-foreground mb-1">{study.title}</CardTitle>
        {study.client && <p className="text-sm text-muted-foreground mb-2">{study.client}</p>}
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow space-y-4">
        <div>
          <h4 className="flex items-center text-md font-semibold text-primary mb-1">
            <Target className="w-4 h-4 mr-2" /> The Challenge:
          </h4>
          <p className="text-foreground/80 text-sm">{study.challenge}</p>
        </div>
        <div>
          <h4 className="flex items-center text-md font-semibold text-secondary mb-1">
            <CheckCircle className="w-4 h-4 mr-2" /> Our Solution:
          </h4>
          <p className="text-foreground/80 text-sm">{study.ourSolution}</p>
        </div>
        <div>
          <h4 className="flex items-center text-md font-semibold text-accent mb-1">
            <BarChart2 className="w-4 h-4 mr-2" /> The Result:
          </h4>
          <p className="text-foreground/80 text-sm font-medium">{study.result}</p>
        </div>
        {study.tags && study.tags.length > 0 && (
          <div className="pt-2">
            {study.tags.map(tag => <Badge key={tag} variant="outline" className="mr-1 mb-1 text-xs">{tag}</Badge>)}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderCaseStudyPt = (study: CaseStudyPt) => (
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
         {study.tags && study.tags.length > 0 && (
          <div className="pt-4">
            {study.tags.map(tag => <Badge key={tag} variant="outline" className="mr-1 mb-1 text-xs">{tag}</Badge>)}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const categoryColors = ['text-primary', 'text-secondary', 'text-accent', 'text-yellow-400'];

  return (
    <section id="cases" className="bg-card">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground"
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle) }}
          />
        </div>

        {locale === 'en' && t.categoriesEn?.map((category, catIndex) => (
          <div key={category.categoryTitle || catIndex} className="mb-16">
            {category.categoryTitle && (
              <h3 className={`text-2xl md:text-3xl font-semibold ${categoryColors[catIndex % categoryColors.length]} mb-8 text-center md:text-left`}>
                {category.categoryTitle}
              </h3>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              {category.cases.map((study) => renderCaseStudyEn(study))}
            </div>
          </div>
        ))}
        
        {locale === 'pt' && t.categoriesPt?.map((category, catIndex) => (
          <div key={category.categoryTitle} className="mb-16">
            <h3 className={`text-2xl md:text-3xl font-semibold ${categoryColors[catIndex % categoryColors.length]} mb-8 text-center md:text-left`}>
              {category.categoryTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.cases.map((study) => renderCaseStudyPt(study))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-16">
          <Button 
            asChild 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            <Link href="#contact">{t.portfolioCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

    