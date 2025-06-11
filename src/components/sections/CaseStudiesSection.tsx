
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Locale, CaseStudyEn, CaseStudyPt } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import { Target, CheckCircle, BarChart2, ArrowRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  locale: Locale;
}

export default function CaseStudiesSection({ locale }: CaseStudiesSectionProps) {
  const t = getLang(locale).caseStudies;

  const renderCaseStudyEn = (study: CaseStudyEn, index: number) => {
    // Colors for "Challenge", "Solution", "Result" titles - cycle through primary, secondary, accent
    const detailTitleColors = ['text-primary', 'text-secondary', 'text-accent'];
    const challengeColor = detailTitleColors[0];
    const solutionColor = detailTitleColors[1];
    const resultColor = detailTitleColors[2];


    return (
    <Card
      key={study.title}
      // Matching card styles from referencia.html: bg-gray-700 rounded-xl shadow-xl overflow-hidden card-hover-dark
      // Theme: bg-card rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5
      className="bg-card rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1.5 flex flex-col group"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={study.imageUrl}
          alt={study.title}
          data-ai-hint={study.imageHint}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-semibold text-foreground mb-1">{study.title}</CardTitle>
        {study.client && <p className="text-sm text-muted-foreground mb-2">{study.client}</p>}
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow space-y-4">
        <div>
          <h4 className={`flex items-center text-md font-semibold ${challengeColor} mb-1.5`}>
            <Target className="w-4 h-4 mr-2" /> The Challenge:
          </h4>
          <p className="text-foreground/80 text-sm leading-relaxed">{study.challenge}</p>
        </div>
        <div>
          <h4 className={`flex items-center text-md font-semibold ${solutionColor} mb-1.5`}>
            <CheckCircle className="w-4 h-4 mr-2" /> Our Solution:
          </h4>
          <p className="text-foreground/80 text-sm leading-relaxed">{study.ourSolution}</p>
        </div>
        <div>
          <h4 className={`flex items-center text-md font-semibold ${resultColor} mb-1.5`}>
            <BarChart2 className="w-4 h-4 mr-2" /> The Result:
          </h4>
          <p className="text-foreground/80 text-sm font-medium leading-relaxed">{study.result}</p>
        </div>
        {study.tags && study.tags.length > 0 && (
          <div className="pt-3">
            {study.tags.map(tag => <Badge key={tag} variant="outline" className="mr-1.5 mb-1.5 text-xs border-border/70 text-muted-foreground">{tag}</Badge>)}
          </div>
        )}
      </CardContent>
    </Card>
  )};

  const renderCaseStudyPt = (study: CaseStudyPt, index: number) => (
    <Card
      key={study.title}
      className="bg-card rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1.5 flex flex-col group"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={study.imageUrl}
          alt={study.title}
          data-ai-hint={study.imageHint}
          layout="fill"
          objectFit="cover"
           className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-semibold text-foreground mb-2">{study.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <CardDescription className="text-foreground/80 text-sm leading-relaxed">{study.description}</CardDescription>
         {study.tags && study.tags.length > 0 && (
          <div className="pt-4">
            {study.tags.map(tag => <Badge key={tag} variant="outline" className="mr-1.5 mb-1.5 text-xs border-border/70 text-muted-foreground">{tag}</Badge>)}
          </div>
        )}
      </CardContent>
    </Card>
  );

  // From referencia.html: category titles text-blue-400, text-purple-400, text-teal-400, text-amber-400
  const categoryColorsRefPt = ['text-primary', 'text-secondary', 'text-accent', 'text-yellow-400']; // text-yellow-400 might need to be added to theme or used directly

  return (
    // section py-16 md:py-24 bg-gray-800 (ref) -> Theme: section py-16 md:py-24 bg-card
    <section id="cases" className="bg-background"> {/* Changed to bg-background for contrast with cards like in ref */}
      <div className="container px-6"> {/* Ensure container has padding */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground" // Consistent with ref
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle) }}
          />
        </div>

        {locale === 'en' && t.categoriesEn?.map((category, catIndex) => (
          <div key={category.categoryTitle || catIndex} className="mb-16">
            {/* For EN, we might not have distinct category titles based on brief, but structure allows it */}
            {category.categoryTitle && (
              <h3 className={`text-2xl md:text-3xl font-semibold ${categoryColorsRefPt[catIndex % categoryColorsRefPt.length]} mb-8 text-center md:text-left`}>
                {category.categoryTitle}
              </h3>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              {category.cases.map((study, studyIndex) => renderCaseStudyEn(study, studyIndex))}
            </div>
          </div>
        ))}

        {locale === 'pt' && t.categoriesPt?.map((category, catIndex) => (
          <div key={category.categoryTitle} className="mb-16">
            <h3 className={`text-2xl md:text-3xl font-semibold ${categoryColorsRefPt[catIndex % categoryColorsRefPt.length]} mb-8 text-center md:text-left`}>
              {category.categoryTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.cases.map((study, studyIndex) => renderCaseStudyPt(study, studyIndex))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105" // Consistent with ref button
          >
            <Link href={locale === 'en' ? '#contact' : '#'}>{t.portfolioCta} {locale === 'en' && <ArrowRight className="ml-2 h-5 w-5" />}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
