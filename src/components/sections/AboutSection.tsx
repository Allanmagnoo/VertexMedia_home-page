
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Cpu, Waypoints, Zap, Wifi, Clock, CheckCircle, Users, ShieldCheck, Network, Building, Settings, Lightbulb } from 'lucide-react'; // Added more icons
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import type React from 'react';

interface AboutSectionProps {
  locale: Locale;
}

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase, // Expertise Completa (PT)
  Cpu,       // Processos Inteligentes (PT)
  Waypoints, // Colaboração Transparente (PT)
  Zap,       // Generic fallback
  Wifi,      // For Remote Collaboration (EN)
  Clock,     // For Timezone Advantage (EN)
  CheckCircle,
  Users,
  ShieldCheck,
  Network,   // For global reach/connectivity
  Building,  // Could be used for "company" or "structure"
  Settings,  // For "technical expertise"
  Lightbulb, // For "creative ideas"
};


export default function AboutSection({ locale }: AboutSectionProps) {
  const t = getLang(locale).about;

  // Styles from referencia.html: section bg-gray-900, title text-3xl/4xl font-bold, p text-lg
  return (
    <section id="about" className="bg-background"> {/* bg-gray-900 in ref */}
      <div className="container px-6"> {/* Ensure container has padding */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6" // Consistent with ref
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-primary')}} // Default highlight is primary (blue)
          />
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Layout from referencia.html: grid md:grid-cols-2 gap-10 items-center */}
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

          <div className={`space-y-8 animate-fade-in ${locale === 'en' ? 'md:order-1' : ''}`} style={{animationDelay: '200ms'}}>
            {locale === 'en' && t.ourEdge ? (
              <>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center md:text-left mb-6" // Added mb-6
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.ourEdge.title, '', 'gradient-text') }} /> {/* Using gradient for "Our Edge" title */}

                {/* Styling for these cards can be simpler than Services cards, focus on text */}
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
                    <CardTitle className="flex items-center text-xl text-secondary"> {/* Changed to secondary (purple) */}
                       <Clock className="w-6 h-6 mr-3 shrink-0" /> {t.ourEdge.timezoneAdvantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed">{t.ourEdge.timezoneAdvantage.description}</p>
                  </CardContent>
                </Card>
              </>
            ) : locale === 'pt' && t.keyPointsPt ? (
               // Structure from referencia.html: flex items-start, icon box, text
               <div className="space-y-6">
                {t.keyPointsPt.map((point, index) => {
                  const IconComponent = iconMap[point.icon] || Zap;
                  const iconColorClasses = [ // Cycle primary, secondary, accent (blue, purple, teal)
                    { text: 'text-primary', bg: 'bg-primary/15' },
                    { text: 'text-secondary', bg: 'bg-secondary/15' },
                    { text: 'text-accent', bg: 'bg-accent/15' }
                  ];
                  const colorTheme = iconColorClasses[index % iconColorClasses.length];

                  return (
                    <div key={point.title} className="flex items-start">
                      {/* Icon styling from referencia.html: h-10 w-10 rounded-full bg-blue-500 etc. */}
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
