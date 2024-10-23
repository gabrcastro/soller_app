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
        props.mobile
          ? "w-[95%] sm:w-[70%] text-lg sm:text-3xl py-4"
          : "text-xs lg:text-base py-3",
        props.variant == "amber"
          ? "border-[2px] border-[#FCD34D] text-[#FCD34D] hover:bg-[#FCD34D] hover:text-[#78350F]"
          : "border-[2px] border-[#581C87] text-[#581C87] hover:bg-[#581C87] hover:text-[#FCD34D]",
        `rounded-full bg-transparent gap-2 font-bold flex items-center justify-center pl-5 lg:pl-10 pr-3 lg:pr-5  transition duration-500`
      )}
    >
      {Constants.REQUEST}
      <IoIosArrowRoundForward
        className={clsx(
          props.mobile ? "text-4xl ml-2" : "text-2xl xl:text-3xl"
        )}
      />
    </button>
  );
};
