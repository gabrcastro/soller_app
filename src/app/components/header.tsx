import { Constants } from "@/utils/constants";
import { MdOutlineHeadphones } from "react-icons/md";
import { ButtonComponent } from "./button";
import Image from "next/image";

export const HeaderComponent = () => {
  return (
    <nav className="relative w-full flex flex-row items-center justify-between">
      <div className="flex items-center gap-8">
        <span className="text-[#0F172A] font-bold text-3xl lowercase">
          {Constants.SOLLER}
        </span>

        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-lg font-semibold">
          {Constants.MENU.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                className="text-sm text-[#0F172A] hover:opacity-60"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-5 lg:gap-10">
        <span className="flex items-center text-[#0369A1] text-xs lg:text-base">
          <MdOutlineHeadphones className="mr-4 text-lg lg:text-xl" />
          {Constants.PHONE}
        </span>

        <ButtonComponent />
      </div>

      <div className="flex lg:hidden w-[99%] h-auto -mt-10 -mr-10 absolute top-0 right-0">
        <Image
          src="/images/man_solar.png"
          alt=""
          width={512}
          height={512}
          className="w-full h-full"
        />
      </div>
    </nav>
  );
};