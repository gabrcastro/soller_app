import { Constants } from "@/utils/constants";
import clsx from "clsx";
import { IoIosArrowRoundForward } from "react-icons/io";

export const ButtonComponent = (props: {
  variant?: "purple" | "amber";
  mobile?: boolean;
  class?: string;
}) => {
  return (
    <button
      type="button"
      className={clsx(
        props.class,
        props.mobile ? "w-[70%] text-3xl py-6" : "text-xs lg:text-base py-3",
        props.variant == "amber"
          ? "border-[2px] border-[#FCD34D] text-[#FCD34D]"
          : "border-[2px] border-[#581C87] text-[#581C87]",
        `rounded-full bg-transparent gap-2 font-bold flex items-center justify-center pl-5 lg:pl-10 pr-3 lg:pr-5 hover:opacity-50`
      )}
    >
      {Constants.REQUEST}
      <IoIosArrowRoundForward
        className={clsx(
          props.mobile ? "text-4xl ml-5" : "text-2xl xl:text-3xl"
        )}
      />
    </button>
  );
};
