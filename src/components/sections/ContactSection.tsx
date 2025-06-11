
"use client";

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Send, PhoneCall, Mail } from 'lucide-react'; 
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import { sendContactRequest, type ContactFormState } from '@/lib/actions';
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  locale: Locale;
}

function SubmitButton({ text, locale }: { text: string; locale: Locale }) {
  const { pending } = useFormStatus();
  const Icon = locale === 'en' ? PhoneCall : Send; // PhoneCall for "Book Call" (EN), Send for "Enviar" (PT)
  const sendingText = locale === 'en' ? "Booking call..." : "Enviando...";
  
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3.5 px-6 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
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
  const [state, formAction] = useFormState(sendContactRequest, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: t.successMessage,
          description: "",
          variant: "default", // Should be a success variant if you have one
        });
      } else {
        toast({
          title: t.errorMessage,
          description: state.message.startsWith("Validation failed") ? "" : state.message, // More specific error for validation
          variant: "destructive",
        });
      }
    }
  }, [state, toast, t.successMessage, t.errorMessage]);

  // Base styles from referencia.html: section bg-blue-600 text-white, form bg-gray-800 text-gray-200
  // Translating to theme: section bg-primary text-primary-foreground, form bg-card text-card-foreground
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 
          className="text-3xl md:text-4xl font-extrabold mb-6" // Added font-extrabold
          dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-secondary')}} // Highlight with secondary (purple)
        />
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.description}
        </p>
        
        <Card className="max-w-xl mx-auto bg-card p-8 md:p-10 rounded-xl shadow-2xl text-foreground">
          <CardContent className="p-0">
            <form action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formName}</Label>
                <Input type="text" id="name" name="name" placeholder={locale === 'pt' ? 'Seu Nome Completo' : 'e.g., Jane Doe'} required 
                       className="mt-1 bg-input border-border text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground" />
                {state.errors?.name && <p className="text-xs text-destructive mt-1 text-left">{state.errors.name.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formEmail}</Label>
                <Input type="email" id="email" name="email" placeholder={locale === 'pt' ? 'seuemail@empresa.com' : 'yourname@company.com'} required 
                       className="mt-1 bg-input border-border text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground" />
                {state.errors?.email && <p className="text-xs text-destructive mt-1 text-left">{state.errors.email.join(', ')}</p>}
              </div>
              {t.formCompany && (
                <div>
                  <Label htmlFor="company" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formCompany}</Label>
                  <Input type="text" id="company" name="company" placeholder={locale === 'pt' ? 'Nome da Sua Empresa' : 'Your Company Name'} 
                         className="mt-1 bg-input border-border text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground" />
                  {state.errors?.company && <p className="text-xs text-destructive mt-1 text-left">{state.errors.company.join(', ')}</p>}
                </div>
              )}
              <div>
                <Label htmlFor="message" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formMessage}</Label>
                <Textarea id="message" name="message" rows={4} placeholder={locale === 'pt' ? 'Como podemos te ajudar?' : 'What are your video goals?'} required 
                          className="mt-1 bg-input border-border text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground" />
                {state.errors?.message && <p className="text-xs text-destructive mt-1 text-left">{state.errors.message.join(', ')}</p>}
              </div>
              {state.errors?._form && <p className="text-sm text-destructive">{state.errors._form.join(', ')}</p>}
              <SubmitButton text={t.formSubmit} locale={locale} />
            </form>
            {(t.contactDirectly && (t.email || t.phone)) && (
              <p className="text-xs text-muted-foreground mt-8">
                {t.contactDirectly} 
                {t.phone && <><a href={`tel:${t.phone.replace(/\s/g, '')}`} className="text-primary hover:underline ml-1">{t.phone}</a></>}
                {t.phone && t.email && <span className="mx-1">|</span>}
                {t.email && <a href={`mailto:${t.email}`} className="text-primary hover:underline">{t.email}</a>}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
