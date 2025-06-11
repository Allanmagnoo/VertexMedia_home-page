
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Cpu, Waypoints, Zap, Wifi, Clock, CheckCircle, Users, ShieldCheck, Network } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import type React from 'react';

interface AboutSectionProps {
  locale: Locale;
}

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase, // Expertise Completa (PT)
  Cpu, // Processos Inteligentes (PT)
  Waypoints, // Colaboração Transparente (PT)
  Zap,
  Wifi, // For Remote Collaboration (EN)
  Clock, // For Timezone Advantage (EN)
  CheckCircle, 
  Users, // For Teams/Collaboration
  ShieldCheck, // For Trust/Reliability
  Network, // For global reach/connectivity
};


export default function AboutSection({ locale }: AboutSectionProps) {
  const t = getLang(locale).about;

  return (
    <section id="about" className="bg-background"> {/* bg-gray-900 in ref */}
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl font-extrabold text-foreground mb-6" // Added font-extrabold
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-primary')}}
          />
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {t.imageUrl && (
            // Order based on locale, image first for PT, second for EN to match text flow
            <div className={`relative w-full h-80 md:h-96 lg:h-[450px] rounded-xl shadow-xl overflow-hidden animate-fade-in ${locale === 'en' ? 'md:order-2' : ''}`}>
              <Image
                  src={t.imageUrl}
                  alt={t.imageHint || "About VertexMedia"}
                  data-ai-hint={t.imageHint || (locale === 'en' ? "global collaboration video" : "equipe vertexmedia brasil")}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
            </div>
          )}
          
          <div className={`space-y-8 animate-fade-in ${locale === 'en' ? 'md:order-1' : ''}`} style={{animationDelay: '200ms'}}>
            {locale === 'en' && t.ourEdge ? (
              <>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center md:text-left"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.ourEdge.title, 'text-secondary') }} />
                
                <Card className="bg-card border-border/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-primary">
                      <Network className="w-7 h-7 mr-3.5 shrink-0" /> {t.ourEdge.remoteCollaboration.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-3 leading-relaxed">{t.ourEdge.remoteCollaboration.description}</p>
                    <p className="text-sm text-muted-foreground">Tools: {t.ourEdge.remoteCollaboration.tools.join(', ')}</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-secondary"> {/* Changed to secondary */}
                       <Clock className="w-7 h-7 mr-3.5 shrink-0" /> {t.ourEdge.timezoneAdvantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed">{t.ourEdge.timezoneAdvantage.description}</p>
                  </CardContent>
                </Card>
              </>
            ) : locale === 'pt' && t.keyPointsPt ? (
               <div className="space-y-6">
                {t.keyPointsPt.map((point, index) => {
                  const IconComponent = iconMap[point.icon] || Zap;
                  // Cycle through primary, secondary, accent from referencia.html
                  const iconColorClasses = [
                    { text: 'text-primary', bg: 'bg-primary/15' }, 
                    { text: 'text-secondary', bg: 'bg-secondary/15' }, 
                    { text: 'text-accent', bg: 'bg-accent/15' }
                  ];
                  const colorTheme = iconColorClasses[index % iconColorClasses.length];

                  return (
                    <div key={point.title} className="flex items-start">
                      <div className={`flex-shrink-0 h-12 w-12 rounded-full ${colorTheme.bg} flex items-center justify-center`}>
                        <IconComponent className={`h-6 w-6 ${colorTheme.text}`} />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold text-foreground mb-1">{point.title}</h4>
                        <p className="text-foreground/80 leading-relaxed">{point.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
