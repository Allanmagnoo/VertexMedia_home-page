"use client";

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';
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
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 ease-in-out"
      aria-label={text}
    >
      {pending ? "Sending..." : text}
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
          title: "Success!",
          description: state.message,
          variant: "default",
        });
        // Potentially reset form here if needed by finding form element and calling reset()
      } else {
        toast({
          title: "Error",
          description: state.message || t.errorMessage,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, t.errorMessage]);

  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            {t.subtitle}
          </p>
        </div>
        
        <Card className="shadow-xl animate-fade-in" style={{animationDelay: '200ms', animationFillMode: 'backwards'}}>
          <CardContent className="p-6 md:p-8">
            <form action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground/80">{t.formName}</Label>
                <Input type="text" id="name" name="name" required className="mt-1" />
                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground/80">{t.formEmail}</Label>
                <Input type="email" id="email" name="email" required className="mt-1" />
                {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="company" className="text-foreground/80">{t.formCompany}</Label>
                <Input type="text" id="company" name="company" className="mt-1" />
                {state.errors?.company && <p className="text-sm text-destructive mt-1">{state.errors.company.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground/80">{t.formMessage}</Label>
                <Textarea id="message" name="message" rows={5} required className="mt-1" />
                {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
              </div>
              {state.errors?._form && <p className="text-sm text-destructive">{state.errors._form.join(', ')}</p>}
              <SubmitButton text={t.formSubmit} />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
