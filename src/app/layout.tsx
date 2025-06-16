
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';

// Initialize Inter font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'VertexMedia',
  description: 'High-Performance Video That Drives Revenue & Results.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        {/* Removed Playfair Display and PT Sans, Inter is now handled via next/font */}
      </head>
      <body className="font-sans antialiased bg-background text-foreground"> {/* Ensure font-sans uses Inter */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
