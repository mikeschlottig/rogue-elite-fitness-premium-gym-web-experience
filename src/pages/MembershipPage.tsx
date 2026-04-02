import React from 'react';
import { motion } from 'framer-motion';
import { PricingCards } from '@/components/membership/PricingCards';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
export function MembershipPage() {
  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry Sent! An elite coach will reach out within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="bg-[#0A0A0A] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6"
          >
            CHOOSE YOUR <span className="text-[#FF4500]">RANK.</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flexible options for the most dedicated individuals. No long-term contracts, just results.
          </p>
        </header>
        <PricingCards />
        <section id="coaching-inquiry" className="mt-32 max-w-4xl mx-auto scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Personal Coaching</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Looking for 1-on-1 guidance? Our elite trainers create bespoke programs tailored to your unique physiology and lifestyle.
              </p>
              <ul className="space-y-4 text-gray-300 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF4500]" /> Weekly Check-ins
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF4500]" /> Macro-nutrient Planning
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF4500]" /> Movement Analysis
                </li>
              </ul>
            </div>
            <div className="bg-black p-8 border border-white/5">
              <h3 className="text-xl font-bold mb-6 text-white uppercase">Inquire about Coaching</h3>
              <form className="space-y-4" onSubmit={handleInquiry}>
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-widest text-gray-500">Name</Label>
                  <Input required className="bg-zinc-900 border-white/10 rounded-none h-12" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-widest text-gray-500">Goal</Label>
                  <Textarea required className="bg-zinc-900 border-white/10 rounded-none min-h-[100px]" placeholder="What are you training for?" />
                </div>
                <Button type="submit" className="w-full bg-[#FF4500] hover:bg-[#E53E00] text-white font-black h-12 rounded-none">
                  SEND INQUIRY
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}