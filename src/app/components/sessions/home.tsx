import { Constants } from "@/utils/constants";
import { UserComponent } from "../user";
import { ButtonComponent } from "../button";
import Image from "next/image";
import { HeaderComponent } from "../header";
import { SessionComponent } from "../session";

export const HomeSession = () => {
  return (
    <div className="w-screen relative">
      <HeaderComponent />
      <Image
        src="/images/man_solar.png"
        alt=""
        width={512}
        height={512}
        className="w-[80%] h-auto lg:w-[46%] xl:w-[36%] lg:h-auto absolute top-0 right-0"
      />
      <div className="w-full lg:w-[60%] flex flex-col mt-[65%] lg:-mt-72 items-center lg:items-start justify-center lg:justify-start p-8">
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
      </div>

      <div className=" flex flex-col w-full p-8 mt-14 xl:mt-0">
        <p className="text-lg sm:text-3xl lg:text-lg w-[90%] sm:w-[80%] lg:w-[50%] mb-10 sm:mb-0">
          {Constants.COMMENT}
        </p>
        <UserComponent
          image="/users/rwanda.png"
          name="Rwanda Melflor"
          label="zerowaste.com"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-16">
        <SessionComponent
          colorTitle={Constants.NO_MORE_WASTE}
          title={Constants.NO_MORE_WASTE_TITLE}
          text={Constants.NO_MORE_WASTE_TEXT}
          textW={"w-[95%] sm:w-[80%] lg:w-[70%]"}
          centered
        />
        <div className="relative w-screen h-[1000px] overflow-hidden -mt-72 sm:-mt-28">
          <Image
            src={"/draws/draw1.svg"}
            alt="Draw 1"
            width={1080}
            height={1080}
            className="hidden lg:flex absolute scale-[1.2] xl:scale-[1.35] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src={"/draws/draw5.svg"}
            alt="Draw 1"
            width={1080}
            height={1080}
            className="flex lg:hidden absolute scale-[1.7] xl:scale-[1.35] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};
