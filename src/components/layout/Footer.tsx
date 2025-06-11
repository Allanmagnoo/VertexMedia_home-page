
"use client";

import Link from 'next/link';
import type { Locale } from '@/lib/translations';
import { getLang } from '@/lib/translations';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = getLang(locale);
  const currentYear = new Date().getFullYear();

  const AppLogo = () => (
    <span className="text-3xl font-bold mb-4 inline-block">
      <span className="text-primary">{t.appName.split('#')[0]}#</span>
      <span className="text-secondary">{t.appName.split('#')[1]}</span>
    </span>
  );

  const navLinks = [
    { href: "#hero", label: t.footer.navLinks.home },
    { href: "#solutions", label: t.footer.navLinks.solutions },
    { href: "#cases", label: t.footer.navLinks.cases },
    { href: "#contact", label: t.footer.navLinks.contact },
  ];

   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t bg-card text-muted-foreground"> {/* Matched bg-gray-800 from ref */}
      <div className="container py-12 text-center">
        <Link href="#hero" onClick={(e) => scrollToSection(e, "#hero")}>
          <AppLogo />
        </Link>
        <nav className="flex justify-center space-x-6 mb-6">
          {navLinks.map(link => (
            <Link 
              key={link.label}
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" aria-label={t.footer.socialMedia.facebook} className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" aria-label={t.footer.socialMedia.instagram} className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label={t.footer.socialMedia.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">
          {t.footer.rights.replace('{year}', currentYear.toString())}
        </p>
        <p className="text-xs mt-1">
          {t.footer.credits}
        </p>
      </div>
    </footer>
  );
}
