"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "@/components/ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgWidth,
  imgHeight,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgWidth?: number;
  imgHeight?: number;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("82151637@qq.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 relative overflow-hidden flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl dark:shadow-none border border-white/[0.1]",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center h-full"}`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={imgWidth}
              height={imgHeight}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div className={`${id === 5 && "opacity-80"}`}>
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              fill
              className={"object-cover object-center"}
            />
          )}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 my-3",
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg  lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-2 lg:gap-5 w-fit absolute -right-3 md:-right-7 md:-top-7 lg:-top-4">
              <div className="flex flex-col gap-3 lg:gap-5 mt-4 lg:mt-0">
                <span />
                {[
                  { name: "TypeScript", icon: "/ts.svg" },
                  { name: "React.js", icon: "/re.svg" },
                  { name: "Next.js", icon: "/next.svg" },
                ].map(({ name, icon }, i) => (
                  <span
                    key={i}
                    className="flex gap-3 py-2 lg:py-4 lg:px-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg items-center justify-start bg-[#10132E] lg:min-w-[7vw]"
                  >
                    <Image src={icon} alt={name} width={24} height={24} />
                    {name}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 lg:-mt-1">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {[
                  { name: "Node.js", icon: "/node.svg" },
                  { name: "Django", icon: "/django.svg" },
                  { name: "Postgres", icon: "/pg.svg" },
                ].map(({ name, icon }, i) => (
                  <span
                    key={i}
                    className="flex gap-3 py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg items-center justify-start bg-[#10132E] lg:min-w-[7vw]"
                  >
                    <Image src={icon} alt={name} width={24} height={24} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
