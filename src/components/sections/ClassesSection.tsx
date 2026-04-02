import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Zap, Flame, ArrowRight } from 'lucide-react';
const classes = [
  {
    title: "Elite Strength",
    desc: "Master the fundamental lifts and push your physical boundaries with progressive overload.",
    icon: Dumbbell,
    img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
    color: "from-zinc-900 to-black",
    href: "/elite-strength"
  },
  {
    title: "High Octane HIIT",
    desc: "Maximum intensity intervals designed to shred body fat and skyrocket cardiovascular capacity.",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1549476464-37392f71755a?q=80&w=800&auto=format&fit=crop",
    color: "from-[#FF4500]/20 to-black",
    href: "/high-octane-hiit"
  },
  {
    title: "Combat Conditioning",
    desc: "Functional fight-style training incorporating boxing, power movements, and core stability.",
    icon: Flame,
    img: "https://images.unsplash.com/photo-1599058917233-3583e717c06c?q=80&w=800&auto=format&fit=crop",
    color: "from-zinc-900 to-black",
    href: "/combat-conditioning"
  }
];
export function ClassesSection() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">THE PROGRAMS</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Scientifically backed, athlete tested. Choose your path to dominance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-black border-white/5 rounded-none h-full hover:border-[#FF4500]/50 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color}`} />
                </div>
                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <item.icon className="w-12 h-12 text-[#FF4500] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity text-sm">
                    {item.desc}
                  </p>
                  <Link to={item.href} className="flex items-center gap-2 text-sm font-black text-[#FF4500] group/btn uppercase tracking-widest">
                    LEARN MORE <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}