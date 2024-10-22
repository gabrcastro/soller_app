import { Constants } from "@/utils/constants";
import { ButtonComponent } from "../button";
import { SessionComponent } from "../session";
import Image from "next/image";

export const PowerNeed = () => {
  return (
    <div className="w-full h-auto p-3 bg-[#581C87] lg:bg-[#7E22CE] flex flex-col gap-4 items-center justify-center relative">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-14 lg:px-10 xl:px-2">
        <div className="z-20 w-[90%] lg:w-[60%]">
          <SessionComponent
            light
            variant="amber"
            colorTitle={Constants.GET}
            title={Constants.GET_TITLE}
          />
        </div>
        <div className="z-20 w-[70%] lg:w-[30%] flex flex-col items-center lg:items-end justify-end gap-5">
          <ButtonComponent variant="amber" mobile class="flex lg:hidden" />
          <ButtonComponent variant="amber" class="hidden lg:flex" />
          <span className="text-white text-lg text-center">
            {Constants.GET_TEXT2}
          </span>
        </div>
        <div className="flex lg:hidden bg-[#A252EE] h-[380px] w-[380px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full absolute bottom-0 left-0 -mb-48 lg:-mb-44 -ml-32 lg:-ml-56" />
        <div className="hidden lg:flex bg-[#A252EE] h-[550px] w-[550px] rounded-full absolute top-0 right-0 -mt-44 -mr-20" />
      </div>
      <div className="relative w-full h-[330px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden -mt-10">
        <Image
          src={"/draws/draw4.svg"}
          alt="Draw 1"
          width={1080}
          height={1080}
          className="absolute scale-[.85] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-0 lg:-translate-y-1/2 -mt-[20%] sm:-mt-44 lg:-mt-0 "
        />
      </div>
    </div>
  );
};
