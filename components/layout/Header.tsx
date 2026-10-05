'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Men', href: '/shop?category=men' },
    { name: 'Women', href: '/shop?category=women' },
    { name: 'New Arrivals', href: '/shop?category=new' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-stone-100 py-2' : 'bg-white border-stone-100 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 max-w-full">
        <div className="flex items-center justify-between relative">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -ml-2 text-stone-600 hover:text-[#1a1a1a] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium w-1/3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[#1a1a1a] hover:text-stone-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
            <Link href="/" className="flex-shrink-0">
              <span className="font-serif text-2xl font-bold tracking-tighter text-[#1a1a1a]">
                AURA
              </span>
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end gap-6 text-[11px] uppercase tracking-widest font-medium w-1/3">
            <button className="text-[#1a1a1a] hover:text-stone-400 transition-colors hidden sm:block" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/shop" className="hidden sm:flex items-center text-[#1a1a1a] hover:text-stone-400 transition-colors" aria-label="Account">
              Account
            </Link>
            <Link href="/cart" className="flex items-center gap-1 text-[#1a1a1a] hover:text-stone-400 transition-colors" aria-label="Cart">
              Cart (2)
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-3/4 max-w-sm bg-white z-50 shadow-2xl flex flex-col md:hidden"
            >
              <div className="p-5 flex items-center justify-between border-b border-stone-100">
                <span className="font-serif text-xl tracking-tighter font-bold text-[#1a1a1a]">
                  AURA
                </span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-stone-500 hover:text-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-6 text-[11px] uppercase tracking-widest font-medium">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#1a1a1a] hover:text-stone-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="pt-6 border-t border-stone-100 flex flex-col gap-4">
                  <Link href="/shop" className="text-[#1a1a1a] hover:text-stone-400" onClick={() => setIsMobileMenuOpen(false)}>
                    Account
                  </Link>
                  <Link href="/shop" className="text-[#1a1a1a] hover:text-stone-400" onClick={() => setIsMobileMenuOpen(false)}>
                    Wishlist
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
