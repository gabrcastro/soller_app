import Image from "next/image";
import { SessionComponent } from "../session";
import { Constants } from "@/utils/constants";

export const PowerfullFeatures = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between w-full h-auto relative">
      <div className="ml-14 flex flex-col items-center justify-center lg:justify-start w-full mt-10 lg:mt-10 relative  mr-10">
        <SessionComponent
          colorTitle={Constants.FEATURES}
          title={Constants.FEATURES_TITLE}
          text={Constants.FEATURES_TEXT}
        />

        <div className="grid grid-cols-2 gap-4 gap-y-20 mt-24 w-full">
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

      <div className="relative w-screen h-[1000px] overflow-hidden">
        <Image
          src={"/draws/draw3.svg"}
          alt="Draw 1"
          width={1080}
          height={1080}
          className="absolute scale-[1.2] -mr-56 xl:-mr-72 right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};
