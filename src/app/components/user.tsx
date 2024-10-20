import Image from "next/image";

export const UserComponent = (props: {
  image: string;
  name: string;
  label: string;
}) => {
  return (
    <div className="flex flex-row items-center justify-start mt-5">
      <Image
        src={props.image}
        alt="User Thumb"
        width={512}
        height={512}
        className="mr-4 rounded-full w-14 h-14"
      />
      <div className="flex flex-col items-start justify-center">
        <span className="text-base font-medium">{props.name}</span>
        <span className="text-[14px] font-light">{props.label}</span>
      </div>
    </div>
  );
};
