"use client";

import { Constants } from "@/utils/constants";
import { ButtonComponent } from "../button";
import { SessionComponent } from "../session";
import { CarouselComponent } from "../carrousel";
import * as motion from "framer-motion/client";

export const MakeSomethingAwesome = () => {
  return (
    <div className="w-full p-3 bg-[#581C87] flex flex-col gap-4 items-center justify-center z-20">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-14 px-0 lg:px-10 xl:px-2"
      >
        <div className="w-[90%] lg:w-[60%]">
          <SessionComponent
            light
            variant="amber"
            colorTitle={Constants.JOIN}
            title={Constants.JOIN_TITLE}
            text={Constants.JOIN_TEXT}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-20 w-[70%] lg:w-[30%] flex flex-col items-center lg:items-end justify-end gap-5 mt-10 lg:mt-0"
        >
          <ButtonComponent
            aria-label="Request a quot"
            variant="amber"
            mobile
            class="flex lg:hidden"
          />
          <ButtonComponent
            aria-label="Request a quot"
            variant="amber"
            class="hidden lg:flex"
          />
        </motion.div>
      </motion.div>

      <CarouselComponent items={Constants.COMMENTS} />
    </div>
  );
};
