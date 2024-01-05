"use client";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";
import Iframe from "react-iframe";
import { useIsClient } from "usehooks-ts";

export const Frame = ({ url }: { url: string }) => {
  const [loading, setLoading] = React.useState(true);
  const isClient = useIsClient()
  // make sure the iframe is not rendered on the server
    if (!isClient) {
        return <FrameSkeleton />
    }

  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <div className="relative">
      {loading && <FrameSkeleton />}
      <Iframe
        url={url}
        width="100%"
        height="800px"
        id=""
        onLoad={handleLoad}
        display={loading ? "none" : "block"}
      />
    </div>
  );
};

export const FrameSkeleton = () => {
  return (
    <div className="w-full relative">
      <Skeleton className="rounded-md">
        <div className="h-[800px] bg-default-300"></div>
      </Skeleton>
    </div>
  );
};
