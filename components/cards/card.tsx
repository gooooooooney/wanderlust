import React from "react";
import { Card as NextUiCard, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Tag, VirtualTour } from "@prisma/client";
import { Text } from "@/components/ui-kit/text";
import { VirtualTourWithTags } from "@/types";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Skeleton } from "@nextui-org/skeleton";
import { cn } from "@/lib/utils";
import { Tags } from "../tags";
import { dateFormat } from "@/lib/date";

type CardProps = {
  vt: (VirtualTour & {tags: Tag[]});
  className?: string;
};

export const Card = ({ vt,className }: CardProps) => {
  const date = dateFormat(vt.createdAt);
  return (
    <NextUiCard isHoverable shadow="lg" className={cn(className)}>
      <CardBody>
        <Link as={NextLink} color="foreground" href={`/virtual-tour/${vt.id}`}>
          <Image
            shadow="sm"
            radius="sm"
            src={vt.coverSrc || ""}
            fallbackSrc="https://via.placeholder.com/300x200"
            as={NextImage}
            width={300}
            height={200}
            isZoomed
            isBlurred
            alt=""
          />
        </Link>
      </CardBody>
      <CardFooter>
        <section className="flex flex-col ">
          <div className=" flex items-center gap-x-2 text-xs">
            <time
              dateTime={date}
              className="text-gray-500"
            >
              {date}
            </time>
            <Tags tags={vt.tags} />
          </div>
          <div className="group relative">
            <h3 className="mt-5 text-lg font-semibold leading-6">
              <span className="absolute inset-0" />
              {vt.title}
            </h3>
            <Text className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
              {vt.description}
            </Text>
          </div>
          {/* <div className="text-lg font-semibold mt-4">{vt.title}</div>
          <Text className="max-w-3xl text-left leading-7 [&:not(:first-child)]:mt-2">
            {vt.description}
          </Text> */}
        </section>
      </CardFooter>
    </NextUiCard>
  );
};

export const CardSkeleton = () => {
  return (
    <NextUiCard className="w-[200px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </NextUiCard>
  );
};

