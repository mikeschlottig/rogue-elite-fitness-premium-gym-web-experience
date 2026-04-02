import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
interface TrainerInfo {
  name: string;
  role: string;
  img: string;
  bio: string;
}
interface ProgramLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: string[];
  schedule: { day: string; activity: string }[];
  trainer: TrainerInfo;
}
export function ProgramLayout({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  schedule,
  trainer
}: ProgramLayoutProps) {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="z-10"
            >
              <p className="text-[#FF4500] font-black tracking-widest uppercase text-sm mb-4">{subtitle}</p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.85]">{title}</h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">{description}</p>
              <Button size="lg" className="bg-[#FF4500] hover:bg-[#E53E00] text-white font-black px-10 h-14 rounded-none tracking-tight">
                JOIN THIS PROGRAM
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <div className="absolute inset-0 bg-[#FF4500]/10 border border-[#FF4500]/20 -rotate-3" />
              <img 
                src={heroImage} 
                alt={title}
                className="w-full h-full object-cover shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Benefits & Schedule */}
      <section className="py-24 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                <CheckCircle2 className="text-[#FF4500]" /> THE PAYOFF
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-zinc-900/50 border border-white/5 group hover:border-[#FF4500]/30 transition-colors">
                    <div className="w-1.5 h-full bg-[#FF4500] shrink-0" />
                    <span className="text-gray-300 font-bold uppercase text-sm tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                <Calendar className="text-[#FF4500]" /> PROGRAM SCHEDULE
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {schedule.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/5 transition-colors group">
                    <span className="font-black text-gray-500 uppercase tracking-tighter text-xl group-hover:text-white transition-colors">{item.day}</span>
                    <span className="font-bold text-[#FF4500] uppercase tracking-widest text-sm">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trainer Bio */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-900/30 p-8 md:p-16 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Users className="w-64 h-64 text-white" />
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-none border-2 border-[#FF4500] overflow-hidden relative z-10">
              <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover grayscale" />
            </div>
            <div className="relative z-10">
              <p className="text-[#FF4500] font-black uppercase tracking-widest text-xs mb-2">Program Lead</p>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">{trainer.name}</h2>
              <p className="text-gray-400 leading-relaxed max-w-xl italic">"{trainer.bio}"</p>
            </div>
          </div>
        </div>
      </section>
      {/* Inquiry */}
      <section className="py-24 bg-[#FF4500]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-6 leading-none">Ready to step <br /> into the arena?</h2>
              <p className="text-black/80 font-bold text-lg uppercase max-w-md">Our {title} slots are limited to ensure elite coaching quality. Reserve your spot today.</p>
            </div>
            <div className="bg-black p-8 md:p-12 border border-black/10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-white text-xs uppercase tracking-widest opacity-50">Name</Label>
                    <Input className="bg-zinc-900 border-white/10 rounded-none h-12 text-white" placeholder="First Last" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white text-xs uppercase tracking-widest opacity-50">Email</Label>
                    <Input className="bg-zinc-900 border-white/10 rounded-none h-12 text-white" placeholder="athlete@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white text-xs uppercase tracking-widest opacity-50">Experience Level</Label>
                  <Input className="bg-zinc-900 border-white/10 rounded-none h-12 text-white" placeholder="Beginner, Pro, etc." />
                </div>
                <Button className="w-full bg-white hover:bg-gray-200 text-black font-black h-14 rounded-none text-lg">
                  APPLY FOR PROGRAM <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}