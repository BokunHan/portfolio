import React from "react";
import { cn } from "@/lib/utils";

const GridBackground = ({
  position = "top-0",
  opacity = "4d",
}: {
  position?: string;
  opacity?: string;
}) => {
  return (
    <div
      className={`absolute ${position} left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100`}
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          `[background-image:linear-gradient(to_right,#26262666_2px,transparent_1px),linear-gradient(to_bottom,#26262666_2px,transparent_1px)]`,
          `dark:[background-image:linear-gradient(to_right,rgba(38,38,38,${opacity})_2px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,${opacity})_2px,transparent_1px)]`,
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black-100" />
    </div>
  );
};
export default GridBackground;
