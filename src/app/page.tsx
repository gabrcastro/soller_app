import { Constants } from "@/utils/constants";
import { ButtonComponent } from "./components/button";
import { HeaderComponent } from "./components/header";
import { UserComponent } from "./components/user";
import Image from "next/image";
import { SessionComponent } from "./components/session";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen overflow-x-hidden">
      <div className="p-3">
        <HeaderComponent />
      </div>

      <main className="flex flex-col w-full h-full">
        <div className="w-full flex flex-col mt-96 items-center justify-center p-3">
          <h2 className="text-3xl font-bold text-[#0F172A] text-center">
            {Constants.GET_SUN}
          </h2>
          <p className="text-base font-normal text-[#0F172A] text-center my-6">
            {Constants.GET_SUN_SUBTITLE}
          </p>
          <ButtonComponent mobile />
        </div>

        <div className="mt-20 flex flex-col w-full p-3">
          <p className="">{Constants.COMMENT}</p>
          <UserComponent
            image="/images/rwanda.png"
            name="Rwanda Melflor"
            label="zerowaste.com"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-24 p-3 relative">
          <SessionComponent
            colorTitle={Constants.NO_MORE_WASTE}
            title={Constants.PICK_SUN}
            text={Constants.PICK_SUN_TEXT}
          />

          <div className="bg-[#F59E0B] rounded-full w-64 h-64 absolute bottom-0 left-0 -mb-48 -ml-48" />
          <div className="bg-[#7E22CE] rounded-full w-64 h-64 absolute bottom-0 right-0 -mb-64 -mr-56" />
          <Image
            src={"/images/desktop.svg"}
            alt="Desktop Image"
            width={1080}
            height={1080}
            className="absolute bottom-0 -mb-80 right-0"
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
          <div className="bg-[#581C87] rounded-full w-[750px] h-[400px] absolute top-16 -left-96 -z-10 -rotate-[25deg]"></div>
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
          <div className="bg-[#FBBF24] rounded-full w-[750px] h-[400px] absolute top-6 ml-10 -z-10 -rotate-[25deg]"></div>
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
            <ButtonComponent variant="amber" mobile />
          </div>

          <div className="flex flex-col gap-16">
            <div className="rounded-xl bg-white p-8 flex flex-col items-start justify-end mt-20">
              <p className="mt-20">{Constants.COMMENT2}</p>
              <UserComponent
                image="/images/jane.png"
                name="Jane Cooper"
                label="10KWh"
              />
            </div>

            <div className="flex flex-row items-center justify-center w-full gap-10">
              <button
                type="button"
                className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-14 h-14 flex items-center justify-center"
              >
                <IoIosArrowRoundForward className="text-4xl rotate-180" />
              </button>
              <button
                type="button"
                className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-14 h-14 flex items-center justify-center"
              >
                <IoIosArrowRoundForward className="text-4xl" />
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
            <span className="text-white text-base text-center">
              {Constants.GET_TEXT2}
            </span>
          </div>

          <div className="flex w-full relative mt-16 p-3 ">
            <div className="bg-[#A855F7] rounded-full w-[400px] h-[400px] absolute top-20 right-36 z-10"></div>
            <Image
              src={"/images/computer.svg"}
              alt="Phone Image"
              width={1080}
              height={1080}
              className="w-full mb-20 z-20"
            />
          </div>
        </div>
      </main>

      <footer className="w-full h-max flex flex-col items-center justify-center bg-white -mt-24 py-10 z-40">
        <Image
          src={"/images/logo.png"}
          alt="Logo Image"
          width={1080}
          height={1080}
          className="mb-5 w-32"
        />
        <span className="text-base">{`@ ${new Date().getFullYear()} ${
          Constants.FOOTER_INFO
        }`}</span>
        <ul className="text-base flex flex-row items-center justify-center gap-4 mt-5 pb-10">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Support</li>
        </ul>
      </footer>
    </div>
  );
}
