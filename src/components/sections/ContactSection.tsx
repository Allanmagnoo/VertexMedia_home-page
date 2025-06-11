
"use client";

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Send, PhoneCall } from 'lucide-react'; // Added PhoneCall
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import { sendContactRequest, type ContactFormState } from '@/lib/actions';
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  locale: Locale;
}

function SubmitButton({ text, locale }: { text: string; locale: Locale }) {
  const { pending } = useFormStatus();
  const Icon = locale === 'en' ? PhoneCall : Send;
  const sendingText = locale === 'en' ? "Booking call..." : "Enviando...";
  
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
      aria-label={text}
    >
      {pending ? sendingText : text}
      {!pending && <Icon className="ml-2 h-4 w-4" />}
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
          variant: "default",
        });
        // Potentially reset form here if using client-side state for form fields
      } else {
        toast({
          title: t.errorMessage,
          description: state.message.startsWith("Validation failed") ? "" : state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, t.successMessage, t.errorMessage]);

  return (
    <section id="contact" className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-secondary')}}
        />
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          {t.description}
        </p>
        
        <Card className="max-w-xl mx-auto bg-background p-8 md:p-10 rounded-xl shadow-2xl text-foreground">
          <CardContent className="p-0">
            <form action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formName}</Label>
                <Input type="text" id="name" name="name" placeholder={locale === 'pt' ? 'Seu Nome Completo' : 'e.g., Jane Doe'} required className="mt-1 bg-card border-border text-foreground focus:ring-primary focus:border-primary" />
                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formEmail}</Label>
                <Input type="email" id="email" name="email" placeholder={locale === 'pt' ? 'seuemail@empresa.com' : 'yourname@company.com'} required className="mt-1 bg-card border-border text-foreground focus:ring-primary focus:border-primary" />
                {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
              </div>
              {t.formCompany && (
                <div>
                  <Label htmlFor="company" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formCompany}</Label>
                  <Input type="text" id="company" name="company" placeholder={locale === 'pt' ? 'Nome da Sua Empresa' : 'Your Company Name'} className="mt-1 bg-card border-border text-foreground focus:ring-primary focus:border-primary" />
                  {state.errors?.company && <p className="text-sm text-destructive mt-1">{state.errors.company.join(', ')}</p>}
                </div>
              )}
              <div>
                <Label htmlFor="message" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formMessage}</Label>
                <Textarea id="message" name="message" rows={4} placeholder={locale === 'pt' ? 'Como podemos te ajudar?' : 'What are your video goals?'} required className="mt-1 bg-card border-border text-foreground focus:ring-primary focus:border-primary" />
                {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
              </div>
              {state.errors?._form && <p className="text-sm text-destructive">{state.errors._form.join(', ')}</p>}
              <SubmitButton text={t.formSubmit} locale={locale} />
            </form>
            {(t.contactDirectly && t.email) && (
              <p className="text-xs text-foreground/70 mt-6">
                {t.contactDirectly} {t.phone && <><a href={`tel:${t.phone}`} className="text-secondary hover:underline">{t.phone}</a> | </>} <a href={`mailto:${t.email}`} className="text-secondary hover:underline">{t.email}</a>
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

    