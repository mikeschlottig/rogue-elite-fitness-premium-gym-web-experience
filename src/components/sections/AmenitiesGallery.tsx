import React from 'react';
import { motion } from 'framer-motion';
const amenities = [
  { name: 'Recovery Spa', img: 'https://images.unsplash.com/photo-1544161515-4ae6ce6ca67d?q=80&w=800' },
  { name: 'Rogue Power Racks', img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800' },
  { name: 'Luxury Lockers', img: 'https://images.unsplash.com/photo-1601243228224-633010f3c051?q=80&w=800' },
  { name: 'Cardio Loft', img: 'https://images.unsplash.com/photo-1571902258032-6e4e5ad823c4?q=80&w=800' },
  { name: 'Juice Bar', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800' },
  { name: 'Personal Coaching', img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800' }
];
export function AmenitiesGallery() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">ELITE AMENITIES</h2>
          <p className="text-gray-500 mt-4 max-w-lg">The standard of excellence is in the details. Experience a facility designed for those who demand the best.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-black text-lg uppercase tracking-widest">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}