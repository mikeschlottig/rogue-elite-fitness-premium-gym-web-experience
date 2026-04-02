import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ClassesSection } from '@/components/sections/ClassesSection';
import { AmenitiesGallery } from '@/components/sections/AmenitiesGallery';
import { Testimonials } from '@/components/sections/Testimonials';
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
export function HomePage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Gym Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/20 text-[#FF4500] text-xs font-bold tracking-widest uppercase mb-6">
              <Zap className="w-3 h-3" /> Elite Performance Only
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6 uppercase">
              FORGE YOUR <br />
              <span className="text-[#FF4500]">LEGACY.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              Experience the pinnacle of fitness in Grants Pass. High-end equipment, expert coaching, and a community of winners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#FF4500] hover:bg-[#E53E00] text-white font-black h-14 px-8 rounded-none uppercase tracking-tighter">
                <Link to="/membership">
                  START YOUR JOURNEY <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white font-black h-14 px-8 rounded-none uppercase tracking-tighter">
                <a href="#classes">VIEW PROGRAMS</a>
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>
      {/* Classes Section */}
      <section id="classes">
        <ClassesSection />
      </section>
      {/* Philosophy Section */}
      <section id="about" className="py-24 bg-black overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              {...fadeInUp}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">
                MORE THAN A GYM.<br />
                <span className="text-[#FF4500]">A STANDING REVOLUTION.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Biometric tracking and progress reporting",
                  "Small group sessions for maximum focus",
                  "Luxury locker rooms and recovery spa",
                  "Nutrition planning with professional dietitians"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF4500]" />
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-10 bg-transparent border border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white transition-all font-black rounded-none px-8 h-12 uppercase tracking-tighter">
                <Link to="/method">LEARN OUR METHOD</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-square bg-[#FF4500]/10 absolute -inset-4 rotate-3 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                alt="Trainer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section id="amenities">
        <AmenitiesGallery />
      </section>
      {/* Testimonials */}
      <Testimonials />
      {/* CTA Section */}
      <section className="py-24 bg-[#FF4500] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 uppercase tracking-tighter">READY TO BECOME ELITE?</h2>
          <p className="text-black/80 text-lg md:text-xl font-bold mb-10 max-w-2xl mx-auto uppercase">
            Join the ranks of the most dedicated athletes in Oregon. Your first training session is on us.
          </p>
          <Button asChild size="lg" className="bg-black hover:bg-zinc-900 text-white font-black h-16 px-12 rounded-none text-xl uppercase tracking-tighter">
            <Link to="/membership">CLAIM YOUR PASS</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}