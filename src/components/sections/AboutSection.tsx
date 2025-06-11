
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Cpu, Waypoints, Zap } from 'lucide-react'; // Added Zap
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
  Zap, // Placeholder, maps to a generic icon if not defined
};


export default function AboutSection({ locale }: AboutSectionProps) {
  const t = getLang(locale).about;

  return (
    <section id="about" className="bg-background"> {/* bg-gray-900 in ref */}
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
          <div className="relative w-full h-80 md:h-96 rounded-xl shadow-xl overflow-hidden animate-fade-in">
             <Image
                src={t.imageUrl}
                alt={t.imageHint}
                data-ai-hint={t.imageHint}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
          </div>
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '200ms'}}>
            {t.keyPoints.map((point, index) => {
              const IconComponent = iconMap[point.icon] || Zap; // Default to Zap if icon not found
              const iconColorClass = index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent';

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
        </div>
      </div>
    </section>
  );
}

