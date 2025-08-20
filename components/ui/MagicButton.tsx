import React from "react";
import { cn } from "@/lib/utils";

const MagicButton = ({
  title,
  icon,
  position,
  size = "small",
  rounded = "rounded-lg",
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  size?: string;
  rounded?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full overflow-hidden p-[1.5px] focus:outline-none md:w-60 md:mt-10 ${rounded}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          `inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 text-white backdrop-blur-3xl gap-2 ${rounded} ${otherClasses}`,
          size === "small"
            ? " text-sm font-medium px-3 py-1"
            : " text-2xl font-bold px-5 py-2",
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
export default MagicButton;
