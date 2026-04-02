import React from 'react';
import { ProgramLayout } from '@/components/programs/ProgramLayout';
export function CombatConditioning() {
  return (
    <ProgramLayout
      title="Combat Conditioning"
      subtitle="Built for the Arena"
      description="Functional fitness through the lens of combat sports. We incorporate heavy bags, mitt work, and ground conditioning to build agility, stamina, and rotational power."
      heroImage="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop"
      benefits={[
        "Rotational Power & Torque",
        "Functional Fight Stamina",
        "Reactive Agility",
        "Core Stability & Resilience"
      ]}
      schedule={[
        { day: "Monday", activity: "Heavy Bag Power & Footwork" },
        { day: "Tuesday", activity: "Combat Sprints & Drills" },
        { day: "Wednesday", activity: "Mobility & Flow" },
        { day: "Thursday", activity: "Ground & Pound Circuits" },
        { day: "Friday", activity: "Sparring-Specific HIIT" },
        { day: "Saturday", activity: "Total Combat Finale" }
      ]}
      trainer={{
        name: "Marcus Kross",
        role: "Combat Director",
        img: "https://i.pravatar.cc/150?u=marcusk",
        bio: "Former professional middleweight and elite conditioning coach. Marcus teaches you how to move like an athlete and strike with purpose."
      }}
    />
  );
}