import type { Metadata } from 'next';
import { Playfair_Display, Jost } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair' 
});

const jost = Jost({ 
  subsets: ['latin'], 
  variable: '--font-jost' 
});

export const metadata: Metadata = {
  title: 'AURA | Premium Fashion E-Commerce',
  description: 'Discover modern, premium fashion and accessories.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${jost.className} ${playfair.variable} antialiased bg-white text-neutral-900 flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
