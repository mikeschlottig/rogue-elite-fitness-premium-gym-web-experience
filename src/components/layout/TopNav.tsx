import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
export function TopNav() {
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
    { name: 'Home', href: '#' },
    { name: 'Classes', href: '#classes' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'About', href: '#about' },
  ];
  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Dumbbell className="w-8 h-8 text-[#FF4500] group-hover:rotate-12 transition-transform" />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
            ROGUE<span className="text-[#FF4500]">ELITE</span>
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#FF4500] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-[#FF4500] hover:bg-[#E53E00] text-white font-bold px-6 rounded-none">
            JOIN NOW
          </Button>
        </div>
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-300"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full bg-[#FF4500] hover:bg-[#E53E00] text-white font-bold rounded-none">
                JOIN NOW
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}