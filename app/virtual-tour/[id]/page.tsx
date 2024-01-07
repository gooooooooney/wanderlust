import { VirtualTourService } from "@/services/virtualTour.service";
import React from "react";
import { Frame, FrameSkeleton } from "./_components/frame";
import { Container } from "@/components/Container";
import { Text } from "@/components/ui-kit/text";
import { Tags } from "@/components/tags";
import { cn } from "@/lib/utils";
import { title } from "@/components/primitives";

type VirtualTourProps = {
  params: {
    id: string;
  };
};

const VirtualTourPage = async ({ params }: VirtualTourProps) => {
  const { id } = params;
  const vt = await VirtualTourService.getVirtualTourInfo(id);
  if (!vt) {
    return <FrameSkeleton />;
  }
  return (
    <div>
      <Frame url={vt.link || ""} />
      <Container className="mt-8">
        <div
          className={cn(
            title({
              size: "sm",
              color: [
                "violet",
                "yellow",
                "blue",
                "cyan",
                "green",
                "pink",
                "foreground",
              ][(Math.random() * 7) | 0] as any,
            })
          )}
        >
          {vt.title}
        </div>
        <section className="flex gap-x-4 my-8">
          <Tags tags={vt.tags} />
        </section>
        <Text className="leading-7 [&:not(:first-child)]:mt-6">
          {vt.description}
        </Text>
      </Container>
    </div>
  );
};

export default VirtualTourPage;
