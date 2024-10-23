"use client";

import { Constants } from "@/utils/constants";
import { UserComponent } from "../user";
import { ButtonComponent } from "../button";
import Image from "next/image";
import { HeaderComponent } from "../header";
import { SessionComponent } from "../session";

import * as motion from "framer-motion/client";

export const HomeSession = () => {
  return (
    <div className="w-screen relative">
      <HeaderComponent />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full -mr-10"
      >
        <Image
          src="/images/man_solar.png"
          alt=""
          width={512}
          height={512}
          className="absolute top-0 right-0 w-[80%] h-auto lg:w-[46%] xl:w-[36%] lg:h-auto "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-[60%] flex flex-col mt-[65%] lg:-mt-72 items-center lg:items-start justify-center lg:justify-start p-8"
      >
        <h2 className="flex lg:hidden text-3xl sm:text-5xl w-[90%] sm:w-[60%] lg:w-auto font-bold text-[#0F172A] text-center mt-24 sm:mt-60 lg:mt-72">
          {Constants.GET_SUN}
        </h2>
        <h2 className="hidden lg:flex text-4xl font-bold text-[#0F172A] text-start mt-60 md:mt-72 whitespace-pre-line">
          {Constants.GET_SUN_BREAKED}
        </h2>
        <p className="flex lg:hidden text-xl sm:text-4xl lg:text-base w-[95%] sm:w-[80%] lg:w-auto font-normal text-[#0F172A] text-center lg:text-start my-14 lg:my-6">
          {Constants.GET_SUN_SUBTITLE}
        </p>
        <p className="hidden lg:flex text-3xl lg:text-base font-normal text-[#0F172A] text-center lg:text-start my-6 whitespace-pre-line">
          {Constants.GET_SUN_SUBTITLE_BREAKED}
        </p>
        <ButtonComponent mobile class="flex lg:hidden" />
        <ButtonComponent class="hidden lg:flex" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" flex flex-col w-full p-8 mt-14 xl:mt-0"
      >
        <p className="text-lg sm:text-3xl lg:text-lg w-[90%] sm:w-[80%] lg:w-[50%] mb-10 sm:mb-0">
          {Constants.COMMENT}
        </p>
        <UserComponent
          image="/users/rwanda.png"
          name="Rwanda Melflor"
          label="zerowaste.com"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex flex-col items-center justify-center mt-16"
      >
        <div className="w-full flex items-center justify-center mb-10 sm:mb-0">
          <SessionComponent
            colorTitle={Constants.NO_MORE_WASTE}
            title={Constants.NO_MORE_WASTE_TITLE}
            text={Constants.NO_MORE_WASTE_TEXT}
            textW={"w-[95%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"}
            centered
          />
        </div>
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden -mt-32 sm:-mt-28">
          <Image
            src={"/draws/draw1.svg"}
            alt="Draw 1"
            width={1080}
            height={1080}
            className="hidden lg:flex scale-[1.2] lg:scale-[1.35] xl:scale-[1.55] my-48"
          />
          <Image
            src={"/draws/draw5.svg"}
            alt="Draw 1"
            width={1080}
            height={1080}
            className="flex lg:hidden scale-[1.7] lg:scale-[1.35] xl:scale-[1.55] my-48"
          />
        </div>
      </motion.div>
    </div>
  );
};
