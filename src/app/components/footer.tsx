import { Constants } from "@/utils/constants";
import Image from "next/image";

export const FooterComponent = () => {
  return (
    <footer className="w-full h-max flex flex-col items-center justify-center bg-white py-10 relative z-20">
      <Image
        src={"/images/logo.png"}
        alt="Logo Image"
        width={1080}
        height={1080}
        className="mb-5 w-48"
      />
      <span className="text-2xl">{`@ ${new Date().getFullYear()} ${
        Constants.FOOTER_INFO
      }`}</span>
      <ul className="text-2xl flex flex-row items-center justify-center gap-4 mt-5 pb-10">
        <li className="hover:opacity-50 hover:cursor-pointer">Terms</li>
        <li className="hover:opacity-50 hover:cursor-pointer">Privacy</li>
        <li className="hover:opacity-50 hover:cursor-pointer">Support</li>
      </ul>
    </footer>
  );
};
