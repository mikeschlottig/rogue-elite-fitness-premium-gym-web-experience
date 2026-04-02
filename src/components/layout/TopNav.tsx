import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const programs = [
    { title: "Elite Strength", href: "/elite-strength", desc: "Forge raw power and lean muscle." },
    { title: "High Octane HIIT", href: "/high-octane-hiit", desc: "Maximum metabolic conditioning." },
    { title: "Combat Conditioning", href: "/combat-conditioning", desc: "Functional fight-ready fitness." },
  ];
  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-white/10 py-3 shadow-2xl'
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
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-300 hover:text-white hover:bg-white/5")}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-white/5">
                  Programs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-black border border-white/10 rounded-none md:w-[500px] md:grid-cols-2">
                    {programs.map((program) => (
                      <li key={program.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={program.href}
                            className="block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-black leading-none text-[#FF4500] uppercase">{program.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                              {program.desc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/method" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-300 hover:text-white hover:bg-white/5")}>
                    The Method
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport className="bg-black border border-white/10 shadow-2xl" />
          </NavigationMenu>
          <Button asChild className="bg-[#FF4500] hover:bg-[#E53E00] text-white font-black px-6 rounded-none ml-4 tracking-tighter">
            <Link to="/membership">JOIN THE ELITE</Link>
          </Button>
        </div>
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-[60px] bg-black z-40 md:hidden border-t border-white/10"
          >
            <div className="p-6 space-y-8 h-full flex flex-col">
              <div className="space-y-4">
                <Link to="/" className="block text-2xl font-black text-white uppercase tracking-tighter">Home</Link>
                <div className="space-y-4 pt-2">
                  <p className="text-[#FF4500] text-xs font-black uppercase tracking-widest">Programs</p>
                  {programs.map((program) => (
                    <Link key={program.title} to={program.href} className="block text-xl font-bold text-gray-300 pl-4">{program.title}</Link>
                  ))}
                </div>
                <Link to="/method" className="block text-2xl font-black text-white uppercase tracking-tighter pt-4">The Method</Link>
              </div>
              <div className="mt-auto pb-10">
                <Button asChild className="w-full bg-[#FF4500] hover:bg-[#E53E00] text-white font-black h-16 rounded-none text-lg">
                  <Link to="/membership">JOIN NOW</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}