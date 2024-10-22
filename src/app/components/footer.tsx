import { Constants } from "@/utils/constants";
import Image from "next/image";

export const FooterComponent = () => {
  return (
    <footer className="w-full h-fit flex flex-col lg:flex-row items-center justify-between bg-white py-10 relative px-10">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-start">
        <Image
          src={"/images/logo.svg"}
          alt="Logo Image"
          width={1080}
          height={1080}
          className="w-32 lg:w-24"
        />
        <span className="text-base lg:text-lg mb-5 lg:mb-0 text-center lg:text-start">{`@ ${new Date().getFullYear()} ${
          Constants.FOOTER_INFO
        }`}</span>
      </div>
      <ul className="text-base lg:text-lg flex flex-row items-center justify-end gap-4">
        <li className="hover:opacity-50 hover:cursor-pointer">Terms</li>
        <li className="hover:opacity-50 hover:cursor-pointer">Privacy</li>
        <li className="hover:opacity-50 hover:cursor-pointer">Support</li>
      </ul>
    </footer>
  );
};
