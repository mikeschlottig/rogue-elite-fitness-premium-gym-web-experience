import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Trophy, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Dumbbell,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
              FORGE YOUR <br />
              <span className="text-[#FF4500]">LEGACY.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              Experience the pinnacle of fitness in Grants Pass. High-end equipment, expert coaching, and a community of winners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FF4500] hover:bg-[#E53E00] text-white font-bold h-14 px-8 rounded-none">
                START YOUR JOURNEY <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white font-bold h-14 px-8 rounded-none">
                VIEW CLASSES
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Grid */}
      <section className="py-24 border-y border-white/5 relative bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: "Elite Coaching", desc: "Train with certified professionals dedicated to your specific physiological goals." },
              { icon: ShieldCheck, title: "Premium Gear", desc: "Access the latest Hammer Strength and Rogue Fitness equipment in a clean environment." },
              { icon: Flame, title: "Intense Results", desc: "Our methodology is proven to build strength, endurance, and mental fortitude." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-black/40 border-white/10 hover:border-[#FF4500]/50 transition-colors rounded-none group h-full">
                  <CardContent className="p-8">
                    <feature.icon className="w-12 h-12 text-[#FF4500] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section id="about" className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              {...fadeInUp}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
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
              <Button className="mt-10 bg-transparent border border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white transition-all font-bold rounded-none px-8">
                LEARN OUR METHOD
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
      {/* CTA Section */}
      <section className="py-24 bg-[#FF4500] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8">READY TO BECOME ELITE?</h2>
          <p className="text-black/80 text-lg md:text-xl font-bold mb-10 max-w-2xl mx-auto uppercase">
            Join the ranks of the most dedicated athletes in Oregon. Your first training session is on us.
          </p>
          <Button size="lg" className="bg-black hover:bg-zinc-900 text-white font-black h-16 px-12 rounded-none text-xl">
            CLAIM YOUR PASS
          </Button>
        </div>
      </section>
    </div>
  );
}