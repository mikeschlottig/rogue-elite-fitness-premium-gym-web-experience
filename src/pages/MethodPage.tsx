import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Activity, ShieldCheck, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const pillars = [
  {
    title: "Elite Mindset",
    desc: "We build more than bodies. We cultivate the mental resilience required to conquer any obstacle, in or out of the gym.",
    icon: Brain
  },
  {
    title: "Precision Movement",
    desc: "Form is non-negotiable. Every rep is a lesson in biomechanics, ensuring longevity and maximum efficiency.",
    icon: Target
  },
  {
    title: "Bio-Adaptive Recovery",
    desc: "Training is only half the battle. Our recovery protocols utilize state-of-the-art tech to ensure you're always peak-ready.",
    icon: Activity
  },
  {
    title: "Evidence-Based Results",
    desc: "No fads. No shortcuts. Every program is rooted in sports science and validated by real-world athletic performance.",
    icon: ShieldCheck
  }
];
export function MethodPage() {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF4500]/10 via-transparent to-transparent opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4500]/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FF4500] font-black tracking-[0.3em] uppercase text-sm mb-6"
          >
            The Rogue Standard
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8"
          >
            THE <span className="text-[#FF4500]">METHOD</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We don't just exercise; we engineer performance. Discover the scientific blueprint behind the most effective training environment in Grants Pass.
          </motion.p>
        </div>
      </section>
      {/* Pillars Grid */}
      <section className="py-24 bg-black/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6 group"
              >
                <div className="w-16 h-16 bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center group-hover:bg-[#FF4500] transition-all duration-500">
                  <pillar.icon className="w-8 h-8 text-[#FF4500] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Video / Science Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
                THE SCIENCE OF <br />
                <span className="text-[#FF4500]">ELITE PERFORMANCE</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our methodology is built on the concept of Progressive Overload paired with Adaptive Recovery. We utilize real-time biometric data to ensure that every session is optimized for your body's current state. No overtraining, no wasted effort.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 border-l-2 border-[#FF4500] pl-6 py-2">
                  <span className="text-white font-bold text-lg italic">"The most precise training environment I've ever experienced."</span>
                </div>
              </div>
              <Button className="bg-[#FF4500] hover:bg-[#E53E00] text-white font-black px-8 rounded-none">
                VIEW RESEARCH PAPERS <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-zinc-900 overflow-hidden group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym Methodology"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#FF4500] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,69,0,0.5)]">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic">Ready to experience the standard?</h2>
          <Button asChild size="lg" className="bg-white hover:bg-gray-200 text-black font-black px-12 h-16 text-xl rounded-none">
            <a href="/membership">START YOUR ASSESSMENT</a>
          </Button>
        </div>
      </section>
    </div>
  );
}