import { SessionComponent } from "../session";
import { Constants } from "@/utils/constants";

import * as motion from "framer-motion/client";

export const PowerfullFeatures = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full h-full md:-mt-[70%] lg:mt-[2%]">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="px-4 ml-0 lg:ml-14 flex flex-col items-center justify-center lg:justify-start w-full h-full mt-24 md:mt-[80%] lg:-mt-16 mr-10 -mb-0 lg-mb-96 lg:-mb-0"
      >
        <SessionComponent
          colorTitle={Constants.FEATURES}
          title={Constants.FEATURES_TITLE}
          text={Constants.FEATURES_TEXT}
        />

        <div className="grid grid-cols-2 items-start gap-4 gap-y-20 mt-24 w-full">
          <SessionComponent
            subSession
            title={Constants.FEATURES_1}
            text={Constants.FEATURES_1_TEXT}
          />
          <SessionComponent
            subSession
            title={Constants.FEATURES_2}
            text={Constants.FEATURES_2_TEXT}
          />
          <SessionComponent
            subSession
            title={Constants.FEATURES_3}
            text={Constants.FEATURES_3_TEXT}
          />
          <SessionComponent
            subSession
            title={Constants.FEATURES_4}
            text={Constants.FEATURES_4_TEXT}
          />
        </div>
      </motion.div>

      {/* <div className="relative w-screen h-[1200px] lg:h-[1000px] overflow-hidden mt-0 mb-0 lg:mt-20 lg:mb-20"> */}
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        src={"/draws/draw3.svg"}
        alt="Draw 1"
        width={1080}
        height={1080}
        className="flex scale-[1.3] sm:scale-[1] md:scale-[1.2] lg:scale-[1] -mr-[10rem] sm:-mr-[20rem] lg:-mr-[46%] xl:-mr-[30%] my-32 mt-14 sm:mt-10 md:mt-20 lg:mt-0 ml-[10rem] sm:ml-[14rem] md:ml-[22rem] lg:ml-0"
        // className="absolute scale-[1.5] sm:scale-[1] lg:scale-[1.2] -mr-[10rem] lg:-mr-72 right-1/2 top-1/2 transform translate-x-1/2 -translate-y-0 lg:-translate-y-1/2 -mt-0 sm:-mt-56 lg:mt-0"
      />
      {/* </div> */}
    </div>
  );
};
