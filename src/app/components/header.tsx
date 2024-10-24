"use client";
import { Constants } from "@/utils/constants";
import { MdOutlineHeadphones } from "react-icons/md";
import { ButtonComponent } from "./button";
import * as motion from "framer-motion/client";
export const HeaderComponent = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full flex flex-row items-center justify-between p-4"
    >
      <div className="flex items-center gap-8">
        <span className="text-[#0F172A] font-bold text-2xl sm:text-5xl lg:text-3xl lowercase">
          {Constants.SOLLER}
        </span>

        <ul className="hidden lg:flex items-center gap-4 lg:gap-8 text-lg font-semibold">
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

      <div className="hidden lg:flex items-center gap-5 lg:gap-10 z-10">
        <span className="flex items-center text-[#0369A1] text-xs lg:text-base">
          <MdOutlineHeadphones className="mr-4 text-lg lg:text-xl" />
          {Constants.PHONE}
        </span>

        <ButtonComponent aria-label="Request a quot" />
      </div>
    </motion.nav>
  );
};
