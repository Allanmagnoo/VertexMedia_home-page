
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Cpu, Waypoints, Zap, Wifi, Clock, CheckCircle, Users, ShieldCheck, Network, Building, Settings, Lightbulb } from 'lucide-react'; 
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import type React from 'react';
import { motion } from "framer-motion";

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

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };


  return (
    <section id="about" className="bg-background"> 
      <div className="container px-6"> 
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center" 
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-primary')}}
          />
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {t.imageUrl && (
            <motion.div
              className={`relative w-full h-80 md:h-96 lg:h-[450px] rounded-xl shadow-xl overflow-hidden ${locale === 'en' ? 'md:order-2' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ ...contentVariants, visible: { ...contentVariants.visible, transition: { ...contentVariants.visible.transition, delay: 0.2 }}}}
            >
              <Image
                  src={t.imageUrl}
                  alt={t.imageHint || "About VertexMedia"}
                  data-ai-hint={t.imageHint || (locale === 'en' ? "global collaboration video" : "equipe vertexmedia brasil")}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
            </motion.div>
          )}

          <motion.div
            className={`space-y-6 ${locale === 'en' ? 'md:order-1' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ ...contentVariants, visible: { ...contentVariants.visible, transition: { ...contentVariants.visible.transition, delay: locale === 'en' && t.imageUrl ? 0.2 : 0 }}}}
          >
            {locale === 'en' && t.ourEdge ? (
              <>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center md:text-left mb-6"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.ourEdge.title, '', 'gradient-text') }} />

                <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={cardVariants}>
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
                </motion.div>

                <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={cardVariants}>
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
                </motion.div>
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
                    <motion.div
                      key={point.title}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={cardVariants}
                      className="flex items-start"
                    >
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full ${colorTheme.bg} flex items-center justify-center`}>
                        <IconComponent className={`h-6 w-6 ${colorTheme.text}`} />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold text-foreground mb-1">{point.title}</h4>
                        <p className="text-foreground/80 leading-relaxed">{point.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
