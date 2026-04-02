import React from 'react';
import { ProgramLayout } from '@/components/programs/ProgramLayout';
export function HighOctaneHIIT() {
  return (
    <ProgramLayout
      title="High Octane HIIT"
      subtitle="Metabolic Fire"
      description="Maximum effort, minimum rest. This is an all-out assault on your cardiovascular system designed to shred body fat and skyrocket your anaerobic capacity."
      heroImage="https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2074&auto=format&fit=crop"
      benefits={[
        "Maximum Caloric Afterburn",
        "Metabolic Conditioning",
        "VO2 Max Improvement",
        "Explosive Power Output"
      ]}
      schedule={[
        { day: "Monday", activity: "Tabata Sprints & Power" },
        { day: "Tuesday", activity: "EMOM Metabolic Circuits" },
        { day: "Wednesday", activity: "LISS Recovery / Core" },
        { day: "Thursday", activity: "AMRAP Bodyweight Burn" },
        { day: "Friday", activity: "Elite Interval Finale" },
        { day: "Saturday", activity: "Team Pursuit Challenge" }
      ]}
      trainer={{
        name: "Sofia Mendez",
        role: "Conditioning Specialist",
        img: "https://i.pravatar.cc/150?u=sofia",
        bio: "Sofia is an ex-track athlete and certified metabolic coach. Her philosophy is simple: find your limit, then break it."
      }}
    />
  );
}