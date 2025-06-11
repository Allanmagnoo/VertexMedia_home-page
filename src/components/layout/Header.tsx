"use client";

import type { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Menu, Mountain } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';
import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface HeaderProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}

export default function Header({ locale, setLocale }: HeaderProps) {
  const t = getLang(locale).nav;

  const navItems = [
    { href: '#hero', label: t.home },
    { href: '#services', label: t.services },
    { href: '#cases', label: t.cases },
    { href: '#contact', label: t.contact },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2" onClick={(e) => scrollToSection(e, '#hero')}>
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">VertexMedia</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle locale={locale} setLocale={setLocale} />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link href="#hero" className="flex items-center gap-2 mb-4" onClick={(e) => scrollToSection(e, '#hero')}>
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-bold text-primary">VertexMedia</span>
                </Link>
                {navItems.map((item) => (
                  <SheetTrigger asChild key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </SheetTrigger>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
