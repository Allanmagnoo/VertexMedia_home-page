
"use client";

import React, { useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, PhoneCall, Mail } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import { sendContactRequest, type ContactFormState } from '@/lib/actions';
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface ContactSectionProps {
  locale: Locale;
}

function SubmitButton({ text, locale }: { text: string; locale: Locale }) {
  const { pending } = useFormStatus();
  const Icon = locale === 'pt' ? Send : (locale === 'en' ? PhoneCall : Send) ; 
  const sendingText = locale === 'pt' ? "Enviando..." : (pending ? (locale === 'en' ? "Booking call..." : "Processing...") : text);


  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3.5 px-6 rounded-md text-lg shadow-md hover:shadow-neon-glow-accent transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/80 focus:ring-offset-2 focus:ring-offset-background"
      aria-label={text}
    >
      {pending ? sendingText : text}
      {!pending && <Icon className="ml-2.5 h-5 w-5" />}
    </Button>
  );
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const t = getLang(locale).contact;
  const { toast } = useToast();

  const initialState: ContactFormState = { success: false, message: "" };
  const [state, formAction] = useActionState(sendContactRequest, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: t.successMessage,
          description: "",
          variant: "default",
        });
      } else {
        toast({
          title: t.errorMessage,
          description: state.message.startsWith("Validation failed") ? (state.errors ? Object.values(state.errors).flat().join(' ') : "Please check your input.") : state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, t.successMessage, t.errorMessage]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const cardMotionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <section id="contact" className="bg-background text-foreground">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
            dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-primary')}}
          />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardMotionVariants}
        >
          <Card className="max-w-xl mx-auto bg-card p-8 md:p-10 rounded-xl shadow-xl border border-border/70 text-card-foreground">
            <CardContent className="p-0">
              <form action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block mb-1.5 text-sm font-medium text-left text-foreground/80">{t.formName}</Label>
                  <Input type="text" id="name" name="name" placeholder={locale === 'pt' ? 'Seu Nome' : 'e.g., Jane Doe'} required
                        className="mt-1 bg-input border-border/70 text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground rounded-md" />
                  {state.errors?.name && <p className="text-xs text-destructive mt-1 text-left">{state.errors.name.join(', ')}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="block mb-1.5 text-sm font-medium text-left text-foreground/80">{t.formEmail}</Label>
                  <Input type="email" id="email" name="email" placeholder={locale === 'pt' ? 'seuemail@exemplo.com' : 'yourname@company.com'} required
                        className="mt-1 bg-input border-border/70 text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground rounded-md" />
                  {state.errors?.email && <p className="text-xs text-destructive mt-1 text-left">{state.errors.email.join(', ')}</p>}
                </div>
                {(locale === 'en' || t.formCompany) && (
                  <div>
                    <Label htmlFor="company" className="block mb-1.5 text-sm font-medium text-left text-foreground/80">{t.formCompany || 'Company Name'}</Label>
                    <Input type="text" id="company" name="company" placeholder={locale === 'pt' ? 'Nome da Sua Empresa' : 'Your Company Name'}
                          className="mt-1 bg-input border-border/70 text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground rounded-md" />
                    {state.errors?.company && <p className="text-xs text-destructive mt-1 text-left">{state.errors.company.join(', ')}</p>}
                  </div>
                )}
                <div>
                  <Label htmlFor="message" className="block mb-1.5 text-sm font-medium text-left text-foreground/80">{t.formMessage}</Label>
                  <Textarea id="message" name="message" rows={4} placeholder={locale === 'pt' ? 'Descreva seu projeto ou necessidade...' : 'What are your video goals?'} required
                            className="mt-1 bg-input border-border/70 text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground rounded-md resize-none" />
                  {state.errors?.message && <p className="text-xs text-destructive mt-1 text-left">{state.errors.message.join(', ')}</p>}
                </div>
                {state.errors?._form && <p className="text-sm text-destructive mt-2 text-center">{state.errors._form.join(', ')}</p>}
                <SubmitButton text={t.formSubmit} locale={locale} />
              </form>
              {(t.contactDirectly && (t.email || t.phone)) && (
                <div className="mt-8 text-center">
                  <p className="text-xs text-muted-foreground">
                    {t.contactDirectly}
                    {t.phone && <><a href={`tel:${t.phone.replace(/\s|-|\(|\)/g, '')}`} className="text-primary hover:underline ml-1">{t.phone}</a></>}
                    {t.phone && t.email && <span className="mx-1">|</span>}
                    {t.email && <a href={`mailto:${t.email}`} className="text-primary hover:underline">{t.email}</a>}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
