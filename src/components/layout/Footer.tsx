
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
     <span className="text-2xl font-bold mb-4 inline-block"> {/* Reduced font size from 3xl */}
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
  if (locale === 'en' && t.footer.navLinks.aboutUs) {
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

  // Neon style: bg-card or slightly darker, with subtle top border.
  return (
    <footer className="bg-card text-muted-foreground border-t border-border/50"> {/* Current style is good */}
      <div className="container py-10 text-center"> {/* Reduced py */}
        <Link href="#hero" onClick={(e) => scrollToSection(e, "#hero")}>
          <AppLogo />
        </Link>
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6 text-sm"> {/* Added flex-wrap and gap-y for smaller screens */}
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center space-x-5 mb-6"> {/* Slightly increased space */}
          <a href="#" aria-label={t.footer.socialMedia.facebook} className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-5 w-5" /> {/* Slightly smaller icons */}
          </a>
          <a href="#" aria-label={t.footer.socialMedia.instagram} className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label={t.footer.socialMedia.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-foreground/70"> {/* Slightly lighter text for copyright */}
          {t.footer.rights.replace('{year}', currentYear.toString())}
        </p>
        <p className="text-xs mt-1.5 text-muted-foreground/80"> {/* Adjusted margin and opacity */}
          {t.footer.credits}
        </p>
      </div>
    </footer>
  );
}
