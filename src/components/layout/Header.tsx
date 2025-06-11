
"use client";

import type { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';
import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Added SheetClose


interface HeaderProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}

export default function Header({ locale, setLocale }: HeaderProps) {
  const t = getLang(locale);
  const appNameT = t.appName;

  // PT: Início, Soluções, Portfólio, Contato.
  // EN: Solutions, Work, About Us, Book a Call.
  const navItems = locale === 'pt' ? [
    { href: '#hero', label: t.nav.home! },
    { href: '#solutions', label: t.nav.solutions },
    { href: '#cases', label: t.nav.portfolio! },
    // { href: '#about', label: t.nav.about! }, // About could be integrated elsewhere or a smaller link
  ] : [
    { href: '#solutions', label: t.nav.solutions },
    { href: '#cases', label: t.nav.work! },
    { href: '#about', label: t.nav.aboutUs! },
  ];

  const contactCtaLabel = locale === 'pt' ? t.nav.contactCta : t.nav.bookCall!;
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
      <span className="text-primary">{appNameT.includes('#') ? appNameT.split('#')[0] : appNameT}</span>
      {appNameT.includes('#') && <span className="text-secondary">{appNameT.split('#')[1]}</span>}
    </span>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2" onClick={(e) => scrollToSection(e, '#hero')}>
          <AppLogo />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
           <Button 
            asChild 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md transition duration-300 transform hover:scale-105"
          >
            <Link href={contactCtaLink} onClick={(e) => scrollToSection(e, contactCtaLink)}>{contactCtaLabel}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle locale={locale} setLocale={setLocale} />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <div className="grid gap-4 p-4">
                <SheetClose asChild>
                  <Link href="#hero" className="flex items-center gap-2 mb-4" onClick={(e) => scrollToSection(e, '#hero')}>
                    <AppLogo />
                  </Link>
                </SheetClose>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button 
                    asChild 
                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    <Link href={contactCtaLink} onClick={(e) => scrollToSection(e, contactCtaLink)}>{contactCtaLabel}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
         <div className="hidden md:flex items-center">
          <LanguageToggle locale={locale} setLocale={setLocale} />
        </div>
      </div>
    </header>
  );
}

    