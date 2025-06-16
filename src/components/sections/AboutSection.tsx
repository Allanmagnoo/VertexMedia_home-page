
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Cpu, Waypoints, Zap, Clock, CheckCircle, Users, ShieldCheck, Network, Lightbulb } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import type React from 'react';
import { motion } from "framer-motion";

interface AboutSectionProps {
  locale: Locale;
}

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase, Cpu, Waypoints, Zap, Clock, CheckCircle, Users, ShieldCheck, Network, Lightbulb,
};


export default function AboutSection({ locale }: AboutSectionProps) {
  const t = getLang(locale).about;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.3, 
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center"
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
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
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
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: locale === 'en' && t.imageUrl ? 0.4 : 0.2 } } }}
          >
            {locale === 'en' && t.ourEdge ? (
              <>
                <motion.h3
                  className="text-2xl md:text-3xl font-semibold text-foreground text-center md:text-left mb-6"
                  dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.ourEdge.title, '', 'gradient-text') }}
                  initial={{ opacity: 0, y:10 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ delay: locale === 'en' && t.imageUrl ? 0.3 : 0.1 }}
                />

                <motion.div custom={0} variants={cardVariants}>
                  <Card className="bg-card border border-border/50 shadow-lg p-6 rounded-xl hover:border-primary hover:shadow-neon-glow-primary transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="flex items-center text-lg text-primary">
                        <Network className="w-5 h-5 mr-2.5 shrink-0" /> {t.ourEdge.remoteCollaboration.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-foreground/70 text-sm mb-2.5 leading-relaxed">{t.ourEdge.remoteCollaboration.description}</p>
                      <p className="text-xs text-muted-foreground">Tools: {t.ourEdge.remoteCollaboration.tools.join(', ')}</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div custom={1} variants={cardVariants}>
                  <Card className="bg-card border border-border/50 shadow-lg p-6 rounded-xl hover:border-secondary hover:shadow-neon-glow-secondary transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="flex items-center text-lg text-secondary">
                        <Clock className="w-5 h-5 mr-2.5 shrink-0" /> {t.ourEdge.timezoneAdvantage.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-foreground/70 text-sm leading-relaxed">{t.ourEdge.timezoneAdvantage.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </>
            ) : locale === 'pt' && t.keyPointsPt ? (
               <div className="space-y-6">
                {t.keyPointsPt.map((point, index) => {
                  const IconComponent = iconMap[point.icon] || Zap;
                  const iconColorClasses = [
                    { text: 'text-primary', bg: 'bg-primary/15', hoverBorder: 'hover:border-primary', hoverShadow: 'hover:shadow-neon-glow-primary' },
                    { text: 'text-secondary', bg: 'bg-secondary/15', hoverBorder: 'hover:border-secondary', hoverShadow: 'hover:shadow-neon-glow-secondary' },
                    { text: 'text-accent', bg: 'bg-accent/15', hoverBorder: 'hover:border-accent', hoverShadow: 'hover:shadow-neon-glow-accent' }
                  ];
                  const colorTheme = iconColorClasses[index % iconColorClasses.length];

                  return (
                    <motion.div
                      key={point.title}
                      custom={index}
                      variants={cardVariants}
                      className={`flex items-start p-4 bg-card border border-border/50 rounded-xl shadow-md ${colorTheme.hoverBorder} ${colorTheme.hoverShadow} transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      <div className={`flex-shrink-0 h-10 w-10 rounded-lg ${colorTheme.bg} flex items-center justify-center mr-4`}>
                        <IconComponent className={`h-5 w-5 ${colorTheme.text}`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">{point.title}</h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">{point.text}</p>
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
