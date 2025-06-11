
"use client";

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card'; // CardHeader, CardTitle, CardDescription not used for form wrapper
import { Send } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang, renderHighlightedText } from '@/lib/translations';
import { sendContactRequest, type ContactFormState } from '@/lib/actions';
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  locale: Locale;
}

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50" // Matched purple button from ref
      aria-label={text}
    >
      {pending ? "Enviando..." : text} {/* TODO: Localize "Sending..." */}
      {!pending && <Send className="ml-2 h-4 w-4" />}
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
          title: t.successMessage, // Using localized success message
          description: "", // No description needed if title is clear
          variant: "default",
        });
      } else {
        toast({
          title: t.errorMessage, // Using localized error message
          description: state.message.startsWith("Validation failed") ? "" : state.message, // Avoid redundant "Validation failed"
          variant: "destructive",
        });
      }
    }
  }, [state, toast, t.successMessage, t.errorMessage]);

  return (
    // bg-blue-600 from ref, using primary color for this section
    <section id="contact" className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-6" // text-white from ref, handled by primary-foreground
          dangerouslySetInnerHTML={{ __html: renderHighlightedText(t.mainTitle, 'text-secondary')}} // Highlight in ref is purple-300
        />
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10"> {/* text-blue-100 from ref */}
          {t.description}
        </p>
        
        {/* max-w-xl mx-auto bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl text-gray-200 from ref */}
        <Card className="max-w-xl mx-auto bg-background p-8 md:p-10 rounded-xl shadow-2xl text-foreground">
          <CardContent className="p-0"> {/* Remove CardContent default padding */}
            <form action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formName}</Label>
                <Input type="text" id="name" name="name" placeholder={locale === 'pt' ? 'Seu Nome' : 'Your Name'} required className="mt-1 bg-card border-border text-foreground focus:ring-primary focus:border-primary" />
                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formEmail}</Label>
                <Input type="email" id="email" name="email" placeholder={locale === 'pt' ? 'seuemail@exemplo.com' : 'youremail@example.com'} required className="mt-1 bg-card border-border text-foreground focus:ring-primary focus:border-primary" />
                {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
              </div>
              {/* Company field not in referencia.html form, but kept for utility */}
              {t.formCompany && (
                <div>
                  <Label htmlFor="company" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formCompany}</Label>
                  <Input type="text" id="company" name="company" placeholder={locale === 'pt' ? 'Sua Empresa (Opcional)' : 'Your Company (Optional)'} className="mt-1 bg-card border-border text-foreground focus:ring-primary focus:border-primary" />
                  {state.errors?.company && <p className="text-sm text-destructive mt-1">{state.errors.company.join(', ')}</p>}
                </div>
              )}
              <div>
                <Label htmlFor="message" className="block mb-2 text-sm font-medium text-left text-foreground/80">{t.formMessage}</Label>
                <Textarea id="message" name="message" rows={4} placeholder={locale === 'pt' ? 'Descreva seu projeto ou necessidade...' : 'Describe your project or need...'} required className="mt-1 bg-card border-border text-foreground focus:ring-primary focus:border-primary" />
                {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
              </div>
              {state.errors?._form && <p className="text-sm text-destructive">{state.errors._form.join(', ')}</p>}
              <SubmitButton text={t.formSubmit} />
            </form>
            <p className="text-xs text-foreground/70 mt-6"> {/* text-gray-400 from ref */}
              {t.contactDirectly} <a href={`tel:${t.phone}`} className="text-secondary hover:underline">{t.phone}</a> | <a href={`mailto:${t.email}`} className="text-secondary hover:underline">{t.email}</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
