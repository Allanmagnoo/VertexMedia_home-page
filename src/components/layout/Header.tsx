
"use client";

import type { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react'; // Mountain icon removed as it's not in referencia
import LanguageToggle from '@/components/LanguageToggle';
import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}

export default function Header({ locale, setLocale }: HeaderProps) {
  const t = getLang(locale);
  const appNameT = t.appName; // Using appName from translations

  const navItems = [
    { href: '#hero', label: t.nav.home },
    { href: '#solutions', label: t.nav.solutions },
    { href: '#for-whom', label: t.nav.forWhom },
    { href: '#cases', label: t.nav.cases },
    // About is not a primary nav item in referencia.html
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const AppLogo = () => (
    <span className="text-2xl font-bold">
      <span className="text-primary">{appNameT.split('#')[0]}#</span>
      <span className="text-secondary">{appNameT.split('#')[1]}</span>
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
            onClick={(e) => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                e.preventDefault();
                contactElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Link href="#contact">{t.nav.contactCta}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden"> {/* Show only on mobile */}
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
                <Link href="#hero" className="flex items-center gap-2 mb-4" onClick={(e) => { scrollToSection(e, '#hero'); /* Close sheet */ }}>
                   <AppLogo />
                </Link>
                {navItems.map((item) => (
                  <SheetTrigger asChild key={item.label}>
                    <Link
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </SheetTrigger>
                ))}
                <SheetTrigger asChild>
                  <Button 
                    asChild 
                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    onClick={(e) => {
                        const contactElement = document.getElementById('contact');
                        if (contactElement) {
                            e.preventDefault();
                            contactElement.scrollIntoView({ behavior: 'smooth' });
                        }
                        }}
                    >
                    <Link href="#contact">{t.nav.contactCta}</Link>
                  </Button>
                </SheetTrigger>
              </div>
            </SheetContent>
          </Sheet>
        </div>
         <div className="hidden md:flex items-center"> {/* Show only on desktop */}
          <LanguageToggle locale={locale} setLocale={setLocale} />
        </div>
      </div>
    </header>
  );
}
