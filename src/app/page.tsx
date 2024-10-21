import { Constants } from "@/utils/constants";
import { ButtonComponent } from "./components/button";
import { HeaderComponent } from "./components/header";
import { UserComponent } from "./components/user";
import Image from "next/image";
import { SessionComponent } from "./components/session";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FooterComponent } from "./components/footer";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen overflow-x-hidden">
      <div className="p-3">
        <HeaderComponent />
      </div>

      <main className="flex flex-col w-full h-full">
        <div className="w-full flex flex-col">
          <div className="w-full lg:w-[60%] flex flex-col mt-96 lg:-mt-64 items-center lg:items-start justify-center lg:justify-start p-8">
            <h2 className="flex lg:hidden text-5xl font-bold text-[#0F172A] text-center mt-60 md:mt-72">
              {Constants.GET_SUN}
            </h2>
            <h2 className="hidden lg:flex text-4xl font-bold text-[#0F172A] text-start mt-60 md:mt-72 whitespace-pre-line">
              {Constants.GET_SUN_BREAKED}
            </h2>
            <p className="flex lg:hidden text-3xl lg:text-base font-normal text-[#0F172A] text-center lg:text-start my-6">
              {Constants.GET_SUN_SUBTITLE}
            </p>
            <p className="hidden lg:flex text-3xl lg:text-base font-normal text-[#0F172A] text-center lg:text-start my-6 whitespace-pre-line">
              {Constants.GET_SUN_SUBTITLE_BREAKED}
            </p>
            <ButtonComponent mobile class="flex lg:hidden" />
            <ButtonComponent class="hidden lg:flex" />
          </div>

          <div className=" flex flex-col w-full p-8">
            <p className="flex lg:hidden text-3xl">{Constants.COMMENT}</p>
            <p className="hidden lg:flex text-xs whitespace-pre-line">
              {Constants.COMMENT_BREAKED}
            </p>
            <UserComponent
              image="/images/rwanda.png"
              name="Rwanda Melflor"
              label="zerowaste.com"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-24 p-3 relative">
          <div className="w-full mb-60 md:mb-72">
            <SessionComponent
              colorTitle={Constants.NO_MORE_WASTE}
              title={Constants.PICK_SUN}
              text={Constants.PICK_SUN_TEXT}
            />
          </div>

          <div className="bg-[#F59E0B] rounded-full w-[500px] h-[500px] absolute bottom-0 left-0 -mb-48 -ml-80" />
          <div className="bg-[#7E22CE] rounded-full w-[400px] h-[400px] absolute bottom-0 right-0 -mb-44 -mr-80" />
          <Image
            src={"/images/desktop.svg"}
            alt="Desktop Image"
            width={1080}
            height={1080}
            className="flex lg:hidden absolute bottom-0 -mb-80 right-0"
          />
          <Image
            src={"/images/desktopweb.svg"}
            alt="Desktop Image"
            width={1080}
            height={1080}
            className="hidden lg:flex absolute bottom-0 -mb-80 right-0 px-32"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-96 px-3 relative">
          <SessionComponent
            colorTitle={Constants.SERVICES}
            title={Constants.PERSONALIZED_SERVICES}
            text={Constants.PERSONALIZED_TEXT}
          />

          <div className="grid grid-cols-2 gap-4 gap-y-20 mt-24">
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

        <div className="flex relative mt-16 p-3 ">
          <div className="bg-[#581C87] rounded-full w-[1000px] h-[800px] absolute top-0 right-24 -z-10 -rotate-[25deg]"></div>
          <Image
            src={"/images/phone.svg"}
            alt="Phone Image"
            width={1080}
            height={1080}
            className="ml-16 mb-20 z-20"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-0 px-3 relative">
          <SessionComponent
            colorTitle={Constants.SERVICES}
            title={Constants.PERSONALIZED_SERVICES}
            text={Constants.PERSONALIZED_TEXT}
          />

          <div className="grid grid-cols-2 gap-4 gap-y-20 mt-24">
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

        <div className="flex w-full relative mt-16 p-3 ">
          <div className="bg-[#FBBF24] rounded-full w-[1000px] h-[850px] absolute top-16 ml-10 -z-10 -rotate-[25deg]"></div>
          <Image
            src={"/images/phoneyellow.svg"}
            alt="Phone Image"
            width={1080}
            height={1080}
            className="ml-20 mb-20 z-20"
          />
        </div>

        <div className="w-full p-3 bg-[#581C87] flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center mt-14">
            <SessionComponent
              light
              variant="amber"
              colorTitle={Constants.JOIN}
              title={Constants.JOIN_TITLE}
              text={Constants.JOIN_TEXT}
            />
            <div className="mt-7" />
            <ButtonComponent variant="amber" mobile />
          </div>

          <div className="flex flex-col gap-16">
            <div className="rounded-3xl bg-white p-10 flex flex-col items-start justify-end mt-20 h-[38rem]">
              <p className="mb-6 text-3xl">{Constants.COMMENT2}</p>
              <UserComponent
                image="/images/jane.png"
                name="Jane Cooper"
                label="10KWh"
              />
            </div>

            <div className="flex flex-row items-center justify-center w-full gap-10">
              <button
                type="button"
                className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-16 h-16 flex items-center justify-center"
              >
                <IoIosArrowRoundForward className="text-5xl rotate-180" />
              </button>
              <button
                type="button"
                className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-16 h-16 flex items-center justify-center"
              >
                <IoIosArrowRoundForward className="text-5xl" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center mt-16">
            <SessionComponent
              light
              variant="amber"
              colorTitle={Constants.GET}
              title={Constants.GET_TITLE}
            />
            <ButtonComponent variant="amber" mobile />
            <span className="text-white text-2xl text-center">
              {Constants.GET_TEXT2}
            </span>
          </div>

          <div className="flex w-full relative mt-16 p-3">
            <div className="bg-[#A855F7] rounded-full w-[550px] h-[550px] absolute top-32 right-72 md:right-96 z-0"></div>
            <Image
              src={"/images/computer.svg"}
              alt="Phone Image"
              width={1080}
              height={1080}
              className="w-full mb-5 z-20 "
            />
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
