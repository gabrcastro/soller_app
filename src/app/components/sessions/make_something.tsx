import { Constants } from "@/utils/constants";
import { ButtonComponent } from "../button";
import { SessionComponent } from "../session";
import { CarouselComponent } from "../carrousel";

export const MakeSomethingAwesome = () => {
  return (
    <div className="w-full p-3 bg-[#581C87] flex flex-col gap-4 items-center justify-center z-20">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-14 px-0 lg:px-10 xl:px-2">
        <div className="w-[60%]">
          <SessionComponent
            light
            variant="amber"
            colorTitle={Constants.JOIN}
            title={Constants.JOIN_TITLE}
            text={Constants.JOIN_TEXT}
          />
        </div>

        <div className="z-20 w-[70%] lg:w-[30%] flex flex-col items-center lg:items-end justify-end gap-5 mt-10 lg:mt-0">
          <ButtonComponent variant="amber" mobile class="flex lg:hidden" />
          <ButtonComponent variant="amber" class="hidden lg:flex" />
        </div>
      </div>

      <CarouselComponent items={Constants.COMMENTS} />
    </div>
  );
};
