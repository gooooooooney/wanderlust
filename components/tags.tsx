import { Chip } from "@nextui-org/chip";
import React from "react";
import NextLink from "next/link";
import { Tag } from "@prisma/client";
import { generateColor } from "@/lib/color";

type TagsProps = {
  tags: {
    id: string,
    name: string
  }[]
};

export const Tags = ({ tags }: TagsProps) => {
  return (
    <>
      {tags.map((tag) => (
        <Chip
          className="h-5"
          size="sm"
          as={NextLink}
          style={{
            backgroundColor: generateColor(tag.name).backgroundColor,
            color: generateColor(tag.name).color,
          }}
          key={tag.id}
          href={`/category/${tag.id}`}
        >
          {tag.name}
        </Chip>
      ))}
    </>
  );
};
