import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import GridBackground from "@/components/ui/GridBackground";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-14" id="contact">
      <GridBackground position="top-auto" />

      <div className="relative">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-10 md:my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:hello@bokun.pro">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="flex mt-32 md:flex-row flex-col gap-5 justify-center items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 Bokun Han
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
