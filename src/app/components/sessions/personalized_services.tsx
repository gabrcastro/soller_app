import { Constants } from "@/utils/constants";
import { SessionComponent } from "../session";
import Image from "next/image";

export const PersonalizedServices = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between w-full h-auto relative">
      <div className="relative w-screen h-[1000px] sm:h-[1200px] lg:h-[1000px] overflow-hidden my-20">
        <Image
          src={"/draws/draw2.svg"}
          alt="Draw 1"
          width={1080}
          height={1080}
          className="absolute scale-[1.4] sm:scale-[1] lg:scale-[1.2] -ml-32 lg:-ml-72 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-60 sm:-mt-56 lg:mt-0"
        />
      </div>

      <div className="px-4 md:px-10 lg:px-0 -ml-0 lg:-ml-44 flex flex-col items-center justify-center lg:justify-start w-full -mt-[30%] sm:-mt-[20%] md:-mt-[5%] lg:mt-10 relative mr-10">
        <SessionComponent
          colorTitle={Constants.SERVICES}
          title={Constants.PERSONALIZED_SERVICES}
          text={Constants.PERSONALIZED_TEXT}
        />

        <div className="grid grid-cols-2 items-start gap-y-20 mt-24 lg:mt-24 w-full">
          <SessionComponent
            subSession
            title={Constants.SERVICES_1}
            text={Constants.SERVICES_1_TEXT}
          />
          <SessionComponent
            subSession
            title={Constants.SERVICES_2}
            text={Constants.SERVICES_2_TEXT}
          />
          <SessionComponent
            subSession
            title={Constants.SERVICES_3}
            text={Constants.SERVICES_3_TEXT}
          />
          <SessionComponent
            subSession
            title={Constants.SERVICES_4}
            text={Constants.SERVICES_4_TEXT}
          />
        </div>
      </div>
    </div>
  );
};
