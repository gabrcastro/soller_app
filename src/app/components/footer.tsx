"use client";

import { Constants } from "@/utils/constants";
import Image from "next/image";

import * as motion from "framer-motion/client";

export const FooterComponent = () => {
  return (
    <footer className="w-full h-fit flex flex-col lg:flex-row items-center justify-between bg-white py-10 relative px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-5 items-center justify-start"
      >
        <Image
          src={"/images/logo.svg"}
          alt="Logo Soller"
          width={1080}
          height={1080}
          className="w-32 lg:w-24"
        />
        <span className="text-base lg:text-lg mb-5 lg:mb-0 text-center lg:text-start">{`@ ${new Date().getFullYear()} ${
          Constants.FOOTER_INFO
        }`}</span>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base lg:text-lg flex flex-row items-center justify-end gap-4"
      >
        <li className="hover:opacity-50 hover:cursor-pointer">Terms</li>
        <li className="hover:opacity-50 hover:cursor-pointer">Privacy</li>
        <li className="hover:opacity-50 hover:cursor-pointer">Support</li>
      </motion.ul>
    </footer>
  );
};
