import { Tag, VirtualTour } from "@prisma/client";
import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type VirtualTourWithTags = VirtualTour & {
  Tag: Tag[];
};
