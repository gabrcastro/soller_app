import clsx from "clsx";

export const SessionComponent = (props: {
  colorTitle?: string;
  title?: string;
  text?: string;
  subSession?: boolean;
  light?: boolean;
  variant?: "orange" | "amber";
  textW?: string;
  centered?: boolean;
  textCentered?: boolean;
}) => {
  return (
    <div
      className={clsx(
        props.textW ?? "w-full",
        "items-center justify-center lg:items-start lg:justify-start",
        "flex flex-col"
      )}
    >
      <span
        className={clsx(
          props.variant == "amber" ? "text-[#FCD34D]" : "text-[#D97706]",
          "text-xl sm:text-2xl lg:text-base font-medium mb-3 z-10 w-full",
          props.centered ? "text-center" : "text-center lg:text-start"
        )}
      >
        {props.colorTitle || ""}
      </span>
      <h3
        className={clsx(
          props.subSession
            ? "text-lg sm:text-xl lg:text-xl"
            : "text-2xl sm:text-5xl lg:text-4xl",
          "font-bold mb-4 z-10 w-full",
          props.light ? "text-white" : "",
          props.centered ? "text-center" : "text-center lg:text-start"
        )}
      >
        {props.title || ""}
      </h3>
      <p
        className={clsx(
          props.subSession
            ? "text-sm sm:text-base lg:text-base px-0"
            : "text-base sm:text-lg lg:text-base px-2 sm:px-4 lg:px-0",
          "font-light z-10 mt-5 ",
          props.light ? "text-white" : "",
          props.centered ? "text-center" : "text-center lg:text-start"
        )}
      >
        {props.text || ""}
      </p>
    </div>
  );
};
