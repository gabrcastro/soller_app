import { Constants } from "@/utils/constants";
import { SessionComponent } from "../session";
import Image from "next/image";

export const PersonalizedServices = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between justify-start w-full h-auto mt-24">
      <Image
        src={"/draws/draw2.svg"}
        alt="Draw 1"
        width={1080}
        height={1080}
        className="flex scale-[1.4] sm:scale-[1.3] md:scale-[1.3] lg:scale-[1.4] -ml-[8rem] sm:-ml-[14rem] md:-ml-[18rem] lg:-ml-[25%] -mt-10 md:mt-10 lg:mt-0"
      />

      <div className="px-4 md:px-10 lg:px-0 -ml-0 flex flex-col items-center justify-center lg:justify-start w-full -mt-[15%] sm:-mt-[5%] md:-mt-[5%] lg:mt-10 relative pr-10 mb-44 lg:mb-0 lg:pl-32">
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
