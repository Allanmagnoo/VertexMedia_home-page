"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase, Film, Zap } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';

interface ServicesSectionProps {
  locale: Locale;
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getLang(locale).services;

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t.service1Title,
      description: t.service1Desc,
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: t.service2Title,
      description: t.service2Desc,
    },
    {
      icon: <Film className="h-8 w-8 text-primary" />,
      title: t.service3Title,
      description: t.service3Desc,
    },
  ];

  return (
    <section id="services" className="bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out animate-fade-in"
              style={{animationDelay: `${index * 200 + 200}ms`, animationFillMode: 'backwards'}}
            >
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-foreground/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
