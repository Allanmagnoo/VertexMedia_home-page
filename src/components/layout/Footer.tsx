
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
  const appNameT = t.appName;

  const AppLogo = () => (
     <span className="text-3xl font-bold mb-4 inline-block">
       <span className="text-primary">{appNameT.split('#')[0]}</span>
       <span className="text-secondary">{appNameT.split('#')[1]}</span>
     </span>
  );
  
  const navLinks = [];
  if (locale === 'pt' && t.footer.navLinks.home) {
    navLinks.push({ href: "#hero", label: t.footer.navLinks.home });
  }
  navLinks.push({ href: "#solutions", label: t.footer.navLinks.solutions });
  if (t.footer.navLinks.work) { 
    navLinks.push({ href: "#cases", label: t.footer.navLinks.work });
  }
  if (locale === 'en' && t.footer.navLinks.aboutUs) { // Add About Us for EN footer
     navLinks.push({ href: "#about", label: t.footer.navLinks.aboutUs });
  }
  navLinks.push({ href: "#contact", label: t.footer.navLinks.contact });


   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Styles from referencia.html: bg-gray-800 text-gray-400 py-12
  // Theme translation: bg-card text-muted-foreground py-12
  return (
    <footer className="bg-card text-muted-foreground border-t border-border/50">
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
        <p className="text-xs mt-2"> {/* Increased margin a bit */}
          {t.footer.credits}
        </p>
      </div>
    </footer>
  );
}
