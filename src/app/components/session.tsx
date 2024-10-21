import clsx from "clsx";

export const SessionComponent = (props: {
  colorTitle?: string;
  title?: string;
  text?: string;
  subSession?: boolean;
  light?: boolean;
  variant?: "orange" | "amber";
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <span
        className={clsx(
          props.variant == "amber" ? "text-[#FCD34D]" : "text-[#D97706]",
          "text-2xl lg:text-base font-medium mb-3 z-10"
        )}
      >
        {props.colorTitle || ""}
      </span>
      <h3
        className={clsx(
          props.subSession ? "text-3xl px-10" : "text-5xl lg:text-4xl",
          "font-bold text-center mb-4 z-10 px-5",
          props.light ? "text-white" : ""
        )}
      >
        {props.title || ""}
      </h3>
      <p
        className={clsx(
          "text-2xl lg:text-base text-center font-light z-10 px-14 mt-5 lg:px-36",
          props.light ? "text-white" : ""
        )}
      >
        {props.text || ""}
      </p>
    </div>
  );
};
