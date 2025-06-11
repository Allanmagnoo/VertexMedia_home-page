
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'VertexMedia', 
  description: 'High-Performance Video That Drives Revenue & Results.', // EN focused
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Defaulting to dark theme as per PRD and new brief's "dark mode"
    <html lang="en" className="dark"> 
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* PRD Fonts: Playfair Display for headlines, PT Sans for body */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased"> {/* font-body will use PT Sans */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}

    