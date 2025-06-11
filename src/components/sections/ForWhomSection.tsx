
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';

interface ForWhomSectionProps {
  locale: Locale;
}

export default function ForWhomSection({ locale }: ForWhomSectionProps) {
  const t = getLang(locale).forWhom;

  return (
    <section id="for-whom" className="bg-background"> {/* bg-gray-900 in ref */}
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground"
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-secondary')}} // text-purple-400 in ref
          />
        </div>

        <Tabs defaultValue={t.tabs[0].tabName} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 border-b border-border rounded-none p-0 bg-transparent justify-center">
            {t.tabs.map((tab, index) => (
              <TabsTrigger 
                key={tab.tabName} 
                value={tab.tabName}
                className="whitespace-nowrap py-4 px-1 border-b-2 text-lg data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-transparent hover:text-foreground/90 rounded-none"
              >
                {tab.tabName}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {t.tabs.map((tab) => (
            <TabsContent key={tab.tabName} value={tab.tabName}>
              <div className="text-center md:text-left md:flex items-center gap-8 p-6 rounded-xl bg-card shadow-lg"> {/* bg-gray-800 in ref */}
                {tab.content.imageUrl && (
                  <div className="relative w-full md:w-1/3 h-64 mb-6 md:mb-0 mx-auto md:mx-0">
                    <Image
                      src={tab.content.imageUrl}
                      alt={tab.content.title}
                      data-ai-hint={tab.content.imageHint || 'business context'}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                )}
                <div className={tab.content.imageUrl ? 'md:w-2/3' : 'w-full'}>
                  <h3 
                    className="text-2xl font-semibold text-primary mb-3" // text-blue-400, text-purple-400, text-teal-400 in ref. Using primary for consistency.
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText(tab.content.title, 'text-primary') }}
                  />
                  <p className="text-foreground/80 mb-4">
                    {tab.content.description}
                  </p>
                  {tab.content.cta && tab.content.ctaLink && (
                    <Button 
                      asChild 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                    >
                      <Link href={tab.content.ctaLink}>{tab.content.cta}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

