import React from 'react';
import { ProgramLayout } from '@/components/programs/ProgramLayout';
export function EliteStrength() {
  return (
    <ProgramLayout
      title="Elite Strength"
      subtitle="The Foundation of Power"
      description="Our flagship strength program focused on the Big Three and auxiliary movements. Designed for those who want to build serious, functional muscle and CNS adaptations."
      heroImage="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
      benefits={[
        "Neuromuscular Adaptation",
        "Hypertrophy Mastery",
        "Compound Lift Precision",
        "Absolute Strength Increases"
      ]}
      schedule={[
        { day: "Monday", activity: "Max Effort Lower (Squat Focus)" },
        { day: "Tuesday", activity: "Upper Body Hypertrophy" },
        { day: "Wednesday", activity: "Active Recovery / Mobility" },
        { day: "Thursday", activity: "Dynamic Effort Lower (Deadlift Focus)" },
        { day: "Friday", activity: "Heavy Upper (Bench Focus)" },
        { day: "Saturday", activity: "Strongman / Accessory Work" }
      ]}
      trainer={{
        name: "Jaxson Vane",
        role: "Head of Strength",
        img: "https://i.pravatar.cc/150?u=jaxson",
        bio: "With 15 years in competitive powerlifting and a PhD in Sports Biomechanics, Jaxson doesn't just coach strength—he engineers it."
      }}
    />
  );
}