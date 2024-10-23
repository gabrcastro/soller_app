import clsx from "clsx";
import Image from "next/image";

export const UserComponent = (props: {
  image: string;
  name: string;
  label: string;
  card?: boolean;
}) => {
  return (
    <div className="flex flex-row items-center justify-start mt-5 xl:mb-0">
      <Image
        src={props.image}
        alt="User Picture"
        width={512}
        height={512}
        className={clsx(
          props.card
            ? "w-12 h-12"
            : "w-16 sm:w-20 h-16 sm:h-20 lg:w-12 lg:h-12",
          "mr-4 rounded-full"
        )}
      />
      <div className="flex flex-col items-start justify-center">
        <span
          className={clsx(
            props.card ? "text-[14px]" : "text-xl sm:text-3xl lg:text-base ",
            "font-medium"
          )}
        >
          {props.name}
        </span>
        <span
          className={clsx(
            props.card ? "text-[14px]" : "text-xl sm:text-2xl lg:text-xs ",
            "font-light"
          )}
        >
          {props.label}
        </span>
      </div>
    </div>
  );
};
