"use client";
import React from "react";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getMediaUrl } from "@/lib/notion/guard/block-guard";
import "./image.css";
import { Skeleton } from "@nextui-org/skeleton";

type RenderImageProps = {
  block: ImageBlockObjectResponse;
};

export const RenderImageSkeleton = () => {
  return (
    <div className="w-full">
      <Skeleton className="rounded-md">
        <div className="h-[400px] rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  );
};
export const RenderImage = ({ block }: RenderImageProps) => {
  const src = getMediaUrl(block.image);

  return (
    <Gallery>
      <Item original={src} thumbnail={src} width="1024" height="768">
        {({ ref, open }) => (
          <Image
            ref={ref}
            className="relative object-cover rounded-md cursor-pointer h-auto w-full"
            src={src}
            classNames={{
              wrapper: " !max-w-none w-full overflow-hidden",
            }}
            alt={block.image.caption?.[0]?.plain_text || "image"}
            onClick={open}
          />
        )}
      </Item>
    </Gallery>
  );
};
