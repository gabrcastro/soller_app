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
        props.centered
          ? "items-center justify-center"
          : "items-start justify-start",
        "flex flex-col"
      )}
    >
      <span
        className={clsx(
          props.variant == "amber" ? "text-[#FCD34D]" : "text-[#D97706]",
          "text-3xl xl:text-base font-medium mb-3 z-10 w-full",
          props.centered ? "text-center" : ""
        )}
      >
        {props.colorTitle || ""}
      </span>
      <h3
        className={clsx(
          props.subSession ? "text-xl" : "text-6xl xl:text-4xl",
          "font-bold mb-4 z-10",
          props.light ? "text-white" : "",
          props.centered ? "text-center" : ""
        )}
      >
        {props.title || ""}
      </h3>
      <p
        className={clsx(
          "text-3xl xl:text-base font-light z-10 mt-5",
          props.light ? "text-white" : "",
          props.centered ? "text-center" : ""
        )}
      >
        {props.text || ""}
      </p>
    </div>
  );
};
