
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
  
  const cardColorClasses = [ // Define outside to be accessible by both render functions if needed for consistency
    { hoverBorder: 'hover:border-primary', hoverShadow: 'hover:shadow-neon-glow-primary' },
    { hoverBorder: 'hover:border-secondary', hoverShadow: 'hover:shadow-neon-glow-secondary' },
    { hoverBorder: 'hover:border-accent', hoverShadow: 'hover:shadow-neon-glow-accent' }
  ];

  const renderCaseStudyEn = (study: CaseStudyEn, index: number) => {
    const detailTitleColors = ['text-primary', 'text-secondary', 'text-accent'];
    const challengeColor = detailTitleColors[0];
    const solutionColor = detailTitleColors[1];
    const resultColor = detailTitleColors[2];
    const colorTheme = cardColorClasses[index % cardColorClasses.length];


    return (
    <motion.div
      key={study.title}
      custom={index}
      variants={cardVariants}
      className="w-full"
    >
      <Card
        className={`bg-card rounded-xl border border-border/50 shadow-lg overflow-hidden ${colorTheme.hoverBorder} ${colorTheme.hoverShadow} transition-all duration-300 ease-in-out flex flex-col group h-full transform hover:-translate-y-1`}
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
              <Target className="w-4 h-4 mr-2 shrink-0" /> The Challenge:
            </h4>
            <p className="text-foreground/70 text-sm leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h4 className={`flex items-center text-md font-semibold ${solutionColor} mb-1.5`}>
              <CheckCircle className="w-4 h-4 mr-2 shrink-0" /> Our Solution:
            </h4>
            <p className="text-foreground/70 text-sm leading-relaxed">{study.ourSolution}</p>
          </div>
          <div>
            <h4 className={`flex items-center text-md font-semibold ${resultColor} mb-1.5`}>
              <BarChart2 className="w-4 h-4 mr-2 shrink-0" /> The Result:
            </h4>
            <p className="text-foreground/70 text-sm font-medium leading-relaxed">{study.result}</p>
          </div>
          {study.tags && study.tags.length > 0 && (
            <div className="pt-3">
              {study.tags.map(tag => <Badge key={tag} variant="outline" className="mr-1.5 mb-1.5 text-xs border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors">{tag}</Badge>)}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )};

  const renderCaseStudyPt = (study: CaseStudyPt, index: number) => {
    const colorTheme = cardColorClasses[index % cardColorClasses.length];
    return (
    <motion.div
      key={study.title}
      custom={index}
      variants={cardVariants}
      className="w-full"
    >
      <Card
        className={`bg-card rounded-xl border border-border/50 shadow-lg overflow-hidden ${colorTheme.hoverBorder} ${colorTheme.hoverShadow} transition-all duration-300 ease-in-out flex flex-col group h-full transform hover:-translate-y-1`}
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
          <CardDescription className="text-foreground/70 text-sm leading-relaxed">{study.description}</CardDescription>
          {study.tags && study.tags.length > 0 && (
            <div className="pt-4">
              {study.tags.map(tag => <Badge key={tag} variant="outline" className="mr-1.5 mb-1.5 text-xs border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors">{tag}</Badge>)}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )};

  const categoryColorsRefPt = ['text-primary', 'text-secondary', 'text-accent', 'text-yellow-400'];

  return (
    <section id="cases" className="bg-background">
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

        {locale === 'en' && t.categoriesEn?.map((category, catIndex) => (
          <div key={category.categoryTitle || catIndex} className="mb-16">
            {category.categoryTitle && (
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ ...sectionVariants, visible: { ...sectionVariants.visible, transition: { ...sectionVariants.visible.transition, delay: 0.2 }}}}
                className={`text-2xl md:text-3xl font-semibold ${categoryColorsRefPt[catIndex % categoryColorsRefPt.length]} mb-8 text-center md:text-left`}
              >
                {category.categoryTitle}
              </motion.h3>
            )}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid md:grid-cols-2 gap-8 justify-items-center"
            >
              {category.cases.map((study, studyIndex) => renderCaseStudyEn(study, studyIndex))}
            </motion.div>
          </div>
        ))}

        {locale === 'pt' && t.categoriesPt?.map((category, catIndex) => (
          <div key={category.categoryTitle} className="mb-16">
             <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ ...sectionVariants, visible: { ...sectionVariants.visible, transition: { ...sectionVariants.visible.transition, delay: 0.2 }}}}
                className={`text-2xl md:text-3xl font-semibold ${categoryColorsRefPt[catIndex % categoryColorsRefPt.length]} mb-8 text-center md:text-left`}
              >
              {category.categoryTitle}
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid md:grid-cols-2 gap-8 justify-items-center"
            >
              {category.cases.map((study, studyIndex) => renderCaseStudyPt(study, studyIndex))}
            </motion.div>
          </div>
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ ...sectionVariants, visible: { ...sectionVariants.visible, transition: { ...sectionVariants.visible.transition, delay: 0.3 }}}}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3.5 px-8 rounded-md text-lg shadow-md hover:shadow-neon-glow-accent transition-all duration-300 transform hover:scale-105"
          >
            <Link href={locale === 'en' ? '#contact' : '#'}>{t.portfolioCta} {locale === 'en' && <ArrowRight className="ml-2 h-5 w-5" />}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
