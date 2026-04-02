import React from 'react';
import { TopNav } from './TopNav';
import { Footer } from './Footer';
import { Toaster } from "@/components/ui/sonner";
interface MarketingLayoutProps {
  children: React.ReactNode;
}
export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <TopNav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}