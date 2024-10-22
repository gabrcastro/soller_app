import Image from "next/image";
import { SessionComponent } from "../session";
import { Constants } from "@/utils/constants";

export const PowerfullFeatures = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full h-auto relative -mt-[160%] sm:-mt-[90%] md:-mt-[70%] lg:-mt-[30%]">
      <div className="px-4 ml-0 lg:ml-14 flex flex-col items-center justify-center lg:justify-start w-full mt-44 lg:mt-10 relative mr-10 -mb-96 lg:-mb-0">
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
      </div>

      <div className="relative w-screen h-[1200px] lg:h-[1000px] overflow-hidden mt-0 mb-0 lg:mt-20 lg:mb-20">
        <Image
          src={"/draws/draw3.svg"}
          alt="Draw 1"
          width={1080}
          height={1080}
          className="absolute scale-[1.5] sm:scale-[1] lg:scale-[1.2] -mr-[10rem] lg:-mr-72 right-1/2 top-1/2 transform translate-x-1/2 -translate-y-0 lg:-translate-y-1/2 -mt-0 sm:-mt-56 lg:mt-0"
        />
      </div>
    </div>
  );
};
