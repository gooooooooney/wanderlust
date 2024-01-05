import { Tag, VirtualTour } from "@prisma/client";
import React from "react";
import { Card } from "./card";
import { VirtualTourWithTags } from "@/types";
import { cn } from "@/lib/utils";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";



type CardsProps = {
  vts: (VirtualTour & { tags: Tag[] })[]
};

export const Cards = ({ vts }: CardsProps) => {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <FadeInStagger faster className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl ">
      {vts.map((vt, i) => (
        <FadeIn key={vt.id}>
          <Card  vt={vt} className={rotations[i % rotations.length]} />
        </FadeIn>
      ))}
    </FadeInStagger>
  );
};
