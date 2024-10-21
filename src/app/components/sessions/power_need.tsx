import { Constants } from "@/utils/constants";
import { ButtonComponent } from "../button";
import { SessionComponent } from "../session";
import Image from "next/image";

export const PowerNeed = () => {
  return (
    <div className="w-full p-3 bg-[#7E22CE] flex flex-col gap-4 items-center justify-center relative">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-14 lg:px-10 xl:px-2">
        <div className="z-20 w-[60%]">
          <SessionComponent
            light
            variant="amber"
            colorTitle={Constants.GET}
            title={Constants.GET_TITLE}
          />
        </div>
        <div className="z-20 w-[30%] flex flex-col items-end justify-end gap-5">
          <ButtonComponent variant="amber" />
          <span className="text-white text-lg text-center">
            {Constants.GET_TEXT2}
          </span>
        </div>

        <div className="bg-[#A252EE] h-[550px] w-[550px] rounded-full absolute top-0 right-0 -mt-44 -mr-20" />
      </div>
      <div className="relative w-full h-[700px] overflow-hidden -mt-10">
        <Image
          src={"/draws/draw4.svg"}
          alt="Draw 1"
          width={1080}
          height={1080}
          className="absolute scale-[.85] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};
