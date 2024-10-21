import { Constants } from "@/utils/constants";
import { ButtonComponent } from "../button";
import { SessionComponent } from "../session";
import { Carousel } from "../carrousel";

export const MakeSomethingAwesome = () => {
  return (
    <div className="w-full p-3 bg-[#581C87] flex flex-col gap-4 items-center justify-center z-20">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-14 lg:px-10 xl:px-2">
        <div className="w-[60%]">
          <SessionComponent
            light
            variant="amber"
            colorTitle={Constants.JOIN}
            title={Constants.JOIN_TITLE}
            text={Constants.JOIN_TEXT}
          />
        </div>
        <div className="w-[30%] flex items-end justify-end">
          <ButtonComponent variant="amber" />
        </div>
      </div>

      <Carousel items={Constants.COMMENTS} />
    </div>
  );
};
