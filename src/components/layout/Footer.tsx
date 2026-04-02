import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-6 h-6 text-[#FF4500]" />
              <span className="text-xl font-black tracking-tighter text-white">
                ROGUE<span className="text-[#FF4500]">ELITE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium fitness destination in Grants Pass. Elevate your potential with elite coaching and world-class equipment.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#FF4500] cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#FF4500] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#FF4500] cursor-pointer transition-colors" />
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">EXPLORE</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Class Schedule</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personal Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Amenities</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">CONTACT</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF4500] shrink-0" />
                <span>123 Rogue River Hwy,<br />Grants Pass, OR 97526</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF4500] shrink-0" />
                <span>(541) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF4500] shrink-0" />
                <span>info@rogueelite.fit</span>
              </li>
            </ul>
          </div>
          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6">HOURS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between"><span>Mon - Fri</span><span>5am - 10pm</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>7am - 8pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>8am - 6pm</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Rogue Elite Fitness. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}