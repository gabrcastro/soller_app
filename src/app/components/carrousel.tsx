"use client";

import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { UserComponent } from "./user";

export interface IUser {
  image: string;
  name: string;
  label: string;
  comment: string;
}

export const Carousel = (props: { items: IUser[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = window.innerWidth >= 1024 ? 4 : 1; // Mostrar 4 itens em telas grandes, 1 item em telas pequenas

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < props.items.length - itemsPerPage ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : props.items.length - itemsPerPage
    );
  };

  return (
    <div className="flex flex-col gap-16 mb-10">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-4"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
          }}
        >
          {props.items.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl bg-white p-10 flex flex-col items-start justify-end mt-20 h-[30rem] min-w-[90vw] lg:min-w-[30%] transition-transform duration-500 ${
                index === currentIndex ? "scale-105" : "scale-95"
              }`}
            >
              <p
                className={`mb-6 ${
                  index === currentIndex ? "text-xl font-medium" : "text-lg"
                }`}
              >
                {item.comment}
              </p>
              <UserComponent
                image={item.image}
                name={item.name}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center gap-10 justify-center mt-10 lg:justify-start lg:w-full lg:ml-10">
        <button
          type="button"
          onClick={prevSlide}
          className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-16 h-16 flex items-center justify-center"
        >
          <IoIosArrowRoundForward className="text-5xl rotate-180" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-16 h-16 flex items-center justify-center"
        >
          <IoIosArrowRoundForward className="text-5xl" />
        </button>
      </div>
    </div>
  );
};
