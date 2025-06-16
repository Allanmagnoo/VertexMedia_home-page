
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Locale, CaseStudyEn, CaseStudyPt } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import { Target, CheckCircle, BarChart2, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

interface CaseStudiesSectionProps {
  locale: Locale;
}

export default function CaseStudiesSection({ locale }: CaseStudiesSectionProps) {
  const t = getLang(locale).caseStudies;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const renderCaseStudyEn = (study: CaseStudyEn, index: number) => {
    const detailTitleColors = ['text-primary', 'text-secondary', 'text-accent'];
    const challengeColor = detailTitleColors[0];
    const solutionColor = detailTitleColors[1];
    const resultColor = detailTitleColors[2];

    return (
    <motion.div
      key={study.title}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
    >
      <Card
        className="bg-card rounded-xl shadow-xl overflow-hidden hover:bg-muted hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.25),_0_3px_5px_-2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col group h-full"
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
    </motion.div>
  )};

  const renderCaseStudyPt = (study: CaseStudyPt, index: number) => (
    <motion.div
      key={study.title}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
    >
      <Card
        className="bg-card rounded-xl shadow-xl overflow-hidden hover:bg-muted hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.25),_0_3px_5px_-2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col group h-full"
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
    </motion.div>
  );

  const categoryColorsRefPt = ['text-primary', 'text-secondary', 'text-accent', 'text-yellow-400'];

  return (
    <section id="cases" className="bg-background"> 
      <div className="container px-6"> 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground text-center" 
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle) }}
          />
        </motion.div>

        {locale === 'en' && t.categoriesEn?.map((category, catIndex) => (
          <div key={category.categoryTitle || catIndex} className="mb-16">
            {category.categoryTitle && (
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className={`text-2xl md:text-3xl font-semibold ${categoryColorsRefPt[catIndex % categoryColorsRefPt.length]} mb-8 text-center md:text-left`}
              >
                {category.categoryTitle}
              </motion.h3>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              {category.cases.map((study, studyIndex) => renderCaseStudyEn(study, studyIndex))}
            </div>
          </div>
        ))}

        {locale === 'pt' && t.categoriesPt?.map((category, catIndex) => (
          <div key={category.categoryTitle} className="mb-16">
             <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className={`text-2xl md:text-3xl font-semibold ${categoryColorsRefPt[catIndex % categoryColorsRefPt.length]} mb-8 text-center md:text-left`}
              >
              {category.categoryTitle}
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.cases.map((study, studyIndex) => renderCaseStudyPt(study, studyIndex))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            <Link href={locale === 'en' ? '#contact' : '#'}>{t.portfolioCta} {locale === 'en' && <ArrowRight className="ml-2 h-5 w-5" />}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
