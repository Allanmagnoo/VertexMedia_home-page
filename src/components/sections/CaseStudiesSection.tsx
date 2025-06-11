"use client";

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';

interface CaseStudiesSectionProps {
  locale: Locale;
}

export default function CaseStudiesSection({ locale }: CaseStudiesSectionProps) {
  const t = getLang(locale).caseStudies;

  const caseStudies = [
    {
      title: t.case1Title,
      client: t.case1Client,
      description: t.case1Desc,
      imageUrl: "https://placehold.co/600x400/3F51B5/FFFFFF",
      imageHint: "corporate meeting",
    },
    {
      title: t.case2Title,
      client: t.case2Client,
      description: t.case2Desc,
      imageUrl: "https://placehold.co/600x400/FFB300/333333",
      imageHint: "startup team"
    },
  ];

  return (
    <section id="cases" className="bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col animate-fade-in"
              style={{animationDelay: `${index * 200 + 200}ms`, animationFillMode: 'backwards'}}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={study.imageUrl}
                  alt={`Image for ${study.title}`}
                  data-ai-hint={study.imageHint}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-foreground">{study.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{study.client}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{study.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  {t.viewCase}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
