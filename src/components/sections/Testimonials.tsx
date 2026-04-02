import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
const reviews = [
  {
    name: "Alex Johnson",
    role: "Athlete",
    quote: "Rogue Elite isn't just a gym; it's where I rebuilt myself. The coaching is unmatched in Oregon.",
    stats: "18% Body Fat Lost",
    img: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Miller",
    role: "Powerlifter",
    quote: "The equipment is top-tier. Hammer Strength and Rogue everywhere. Exactly what I needed for prep.",
    stats: "+85lb Bench Press",
    img: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Chen",
    role: "MMA Fighter",
    quote: "Intense atmosphere, professional community. If you want to train seriously, this is the only spot.",
    stats: "Peak Conditioning",
    img: "https://i.pravatar.cc/150?u=marcus"
  }
];
export function Testimonials() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">VOICES OF THE ELITE</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF4500] text-[#FF4500]" />
            ))}
          </div>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {reviews.map((item, idx) => (
              <CarouselItem key={idx}>
                <Card className="bg-black border-white/5 rounded-none p-8 md:p-12">
                  <CardContent className="flex flex-col items-center text-center p-0">
                    <Avatar className="w-24 h-24 mb-8 border-2 border-[#FF4500]">
                      <AvatarImage src={item.img} />
                      <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-xl md:text-2xl font-bold italic text-gray-200 mb-8 leading-relaxed">
                      "{item.quote}"
                    </p>
                    <div>
                      <h4 className="text-white font-black text-lg">{item.name}</h4>
                      <p className="text-[#FF4500] font-bold text-sm tracking-widest uppercase">{item.stats}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-zinc-900 border-white/10 text-white" />
            <CarouselNext className="bg-zinc-900 border-white/10 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}