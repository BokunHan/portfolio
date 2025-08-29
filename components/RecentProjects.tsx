import React from "react";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="flex items-center justify-center overflow-hidden sm:w-[570px] w-[80vw] sm:h-[36vh] h-[27vh] mb-5">
                <div className="flex justify-center overflow-hidden w-full h-full lg:rounded-3xl bg-[#13162D]">
                  <Image src="/bg.png" alt="bg-img" fill />
                  <Image
                    src={img}
                    alt={title}
                    width={464}
                    height={300}
                    className="z-10 w-[362px] sm:w-[483px] h-[234px] sm:h-[313px]"
                  />
                </div>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-0 sm:mb-2">
                {title}
              </h1>

              <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-3">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image src={icon} alt={icon} fill className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentProjects;
