import { Tag, VirtualTour } from "@prisma/client";
import React from "react";
import { Card } from "./card";
import { VirtualTourWithTags } from "@/types";



type CardsProps = {
  vts: VirtualTourWithTags[]
};

export const Cards = ({ vts }: CardsProps) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-6xl ">
      {vts.map((vt) => (
        <Card key={vt.id} vt={vt} />
      ))}
    </section>
  );
};
