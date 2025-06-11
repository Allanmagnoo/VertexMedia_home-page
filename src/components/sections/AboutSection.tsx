
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Cpu, Waypoints, Zap, Wifi, Clock, CheckCircle } from 'lucide-react'; // Added Wifi, Clock, CheckCircle
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import type React from 'react';

interface AboutSectionProps {
  locale: Locale;
}

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase,
  Cpu,
  Waypoints,
  Zap,
  Wifi, // For Remote Collaboration
  Clock, // For Timezone Advantage
  CheckCircle, // For general points
};


export default function AboutSection({ locale }: AboutSectionProps) {
  const t = getLang(locale).about;

  return (
    <section id="about" className="bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-primary')}}
          />
          <p className="text-lg text-foreground/80">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {t.imageUrl && (
            <div className="relative w-full h-80 md:h-96 rounded-xl shadow-xl overflow-hidden animate-fade-in">
              <Image
                  src={t.imageUrl}
                  alt={t.imageHint || "About VertexMedia"}
                  data-ai-hint={t.imageHint || "team working"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
            </div>
          )}
          
          {locale === 'en' && t.ourEdge ? (
            <div className="space-y-8 animate-fade-in" style={{animationDelay: '200ms'}}>
              <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.ourEdge.title) }} />
              
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-primary">
                    <Wifi className="w-6 h-6 mr-3" /> {t.ourEdge.remoteCollaboration.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-2">{t.ourEdge.remoteCollaboration.description}</p>
                  <p className="text-sm text-muted-foreground">Tools: {t.ourEdge.remoteCollaboration.tools.join(', ')}</p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-secondary">
                     <Clock className="w-6 h-6 mr-3" /> {t.ourEdge.timezoneAdvantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{t.ourEdge.timezoneAdvantage.description}</p>
                </CardContent>
              </Card>
            </div>
          ) : locale === 'pt' && t.keyPointsPt ? (
             <div className="space-y-6 animate-fade-in" style={{animationDelay: '200ms'}}>
              {t.keyPointsPt.map((point, index) => {
                const IconComponent = iconMap[point.icon] || Zap;
                const iconColorClass = ['bg-primary', 'bg-secondary', 'bg-accent'][index % 3];

                return (
                  <div key={point.title} className="flex items-start">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full ${iconColorClass} text-primary-foreground flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-foreground">{point.title}</h4>
                      <p className="text-foreground/80">{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

    