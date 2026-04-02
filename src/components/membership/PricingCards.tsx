import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const tiers = [
  {
    name: "Silver",
    price: "49",
    desc: "The essential fitness foundation.",
    features: [
      "Full Gym Access",
      "Standard Locker Access",
      "Free Fitness Assessment",
      "Guest Passes (1/mo)"
    ],
    highlight: false
  },
  {
    name: "Elite",
    price: "89",
    desc: "Our most popular performance package.",
    features: [
      "All Silver Features",
      "Unlimited Group Classes",
      "Premium Spa Access",
      "Biometric Tracking",
      "Guest Passes (4/mo)"
    ],
    highlight: true
  },
  {
    name: "Legacy",
    price: "149",
    desc: "The ultimate luxury for the dedicated.",
    features: [
      "All Elite Features",
      "Executive Locker Suite",
      "Weekly 1-on-1 Prep",
      "Supplements Included",
      "Priority Booking"
    ],
    highlight: false
  }
];
export function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={tier.highlight ? { scale: 1.02 } : {}}
          className={cn(
            "relative p-8 border flex flex-col h-full transition-all duration-300",
            tier.highlight
              ? "bg-[#FF4500]/5 border-[#FF4500] shadow-[0_0_50px_-12px_rgba(255,69,0,0.3)] z-10"
              : "bg-black border-white/10"
          )}
        >
          {tier.highlight && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF4500] text-white text-[10px] font-black px-4 py-1 uppercase tracking-tighter">
              Most Popular
            </div>
          )}
          <div className="mb-8">
            <h3 className="text-sm font-black text-[#FF4500] uppercase tracking-widest mb-2">{tier.name} Rank</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-white">${tier.price}</span>
              <span className="text-gray-500 font-bold">/MO</span>
            </div>
            <p className="text-gray-400 mt-4 text-sm font-medium">{tier.desc}</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {tier.features.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="w-4 h-4 text-[#FF4500] shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className={cn(
              "w-full h-12 font-black rounded-none transition-all",
              tier.highlight
                ? "bg-[#FF4500] hover:bg-[#E53E00] text-white"
                : "bg-zinc-900 hover:bg-zinc-800 text-white"
            )}
          >
            <a href="#coaching-inquiry">SELECT PLAN</a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}