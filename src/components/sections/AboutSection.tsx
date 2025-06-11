
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Cpu, Waypoints, Zap, Wifi, Clock, CheckCircle, Users, ShieldCheck, Network, Building, Settings, Lightbulb } from 'lucide-react'; 
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
  Wifi,      
  Clock,     
  CheckCircle,
  Users,
  ShieldCheck,
  Network,   
  Building,  
  Settings,  
  Lightbulb, 
};


export default function AboutSection({ locale }: AboutSectionProps) {
  const t = getLang(locale).about;

  return (
    <section id="about" className="bg-background"> 
      <div className="container px-6"> 
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center" 
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-primary')}}
          />
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {t.imageUrl && (
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

          <div className={`space-y-6 animate-fade-in ${locale === 'en' ? 'md:order-1' : ''}`} style={{animationDelay: '200ms'}}> {/* Reduced space-y-8 to space-y-6 for EN */}
            {locale === 'en' && t.ourEdge ? (
              <>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center md:text-left mb-6"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.ourEdge.title, '', 'gradient-text') }} />

                <Card className="bg-card border-border/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-primary">
                      <Network className="w-6 h-6 mr-3 shrink-0" /> {t.ourEdge.remoteCollaboration.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-3 leading-relaxed">{t.ourEdge.remoteCollaboration.description}</p>
                    <p className="text-sm text-muted-foreground">Tools: {t.ourEdge.remoteCollaboration.tools.join(', ')}</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-secondary"> 
                       <Clock className="w-6 h-6 mr-3 shrink-0" /> {t.ourEdge.timezoneAdvantage.title}
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
                  const iconColorClasses = [ 
                    { text: 'text-primary', bg: 'bg-primary/15' },
                    { text: 'text-secondary', bg: 'bg-secondary/15' },
                    { text: 'text-accent', bg: 'bg-accent/15' }
                  ];
                  const colorTheme = iconColorClasses[index % iconColorClasses.length];

                  return (
                    <div key={point.title} className="flex items-start">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full ${colorTheme.bg} flex items-center justify-center`}>
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
