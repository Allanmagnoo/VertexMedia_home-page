
"use client";

import type { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';
import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';


interface HeaderProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}

export default function Header({ locale, setLocale }: HeaderProps) {
  const t = getLang(locale);
  const appNameT = t.appName;

  const navItems = locale === 'pt' ? [
    { href: '#hero', label: t.nav.home! },
    { href: '#solutions', label: t.nav.solutions },
    { href: '#cases', label: t.nav.portfolio! },
  ] : [
    { href: '#solutions', label: t.nav.solutions },
    { href: '#cases', label: t.nav.work! },
    { href: '#about', label: t.nav.aboutUs! },
  ];

  const contactCtaLabel = t.nav.contactCta;
  const contactCtaLink = "#contact";


  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const AppLogo = () => (
    <span className="text-2xl font-bold">
      <span className="text-primary">{appNameT.split('#')[0]}</span>
      <span className="text-secondary">{appNameT.split('#')[1]}</span>
    </span>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2" onClick={(e) => scrollToSection(e, '#hero')}>
          <AppLogo />
        </Link>

        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
           <Button
            asChild
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md hover:shadow-neon-glow-accent transition-all duration-300 transform hover:scale-105 py-2 px-4 rounded-md"
          >
            <Link href={contactCtaLink} onClick={(e) => scrollToSection(e, contactCtaLink)}>{contactCtaLabel}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2">
            <div className="hidden md:flex">
                 <LanguageToggle locale={locale} setLocale={setLocale} />
            </div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-card w-[280px] sm:w-[300px] border-l border-border">
                    <div className="grid gap-4 p-6">
                        <SheetClose asChild>
                        <Link href="#hero" className="flex items-center gap-2 mb-6" onClick={(e) => scrollToSection(e, '#hero')}>
                            <AppLogo />
                        </Link>
                        </SheetClose>
                        {navItems.map((item) => (
                        <SheetClose asChild key={item.label}>
                            <Link
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="block py-2.5 text-base font-medium text-foreground hover:text-primary transition-colors"
                            >
                            {item.label}
                            </Link>
                        </SheetClose>
                        ))}
                        <SheetClose asChild>
                        <Button
                            asChild
                            className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-md hover:shadow-neon-glow-accent"
                        >
                            <Link href={contactCtaLink} onClick={(e) => scrollToSection(e, contactCtaLink)}>{contactCtaLabel}</Link>
                        </Button>
                        </SheetClose>
                         <div className="mt-8 flex justify-center">
                             <LanguageToggle locale={locale} setLocale={setLocale} />
                        </div>
                    </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
