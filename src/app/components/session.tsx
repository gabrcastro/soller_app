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
          "text-base font-semibold mb-3 z-10"
        )}
      >
        {props.colorTitle || ""}
      </span>
      <h3
        className={clsx(
          props.subSession ? "text-xl" : "text-3xl",
          "font-bold text-center mb-4 z-10 px-2",
          props.light ? "text-white" : ""
        )}
      >
        {props.title || ""}
      </h3>
      <p
        className={clsx(
          "text-base text-center z-10",
          props.light ? "text-white" : ""
        )}
      >
        {props.text || ""}
      </p>
    </div>
  );
};
