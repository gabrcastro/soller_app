"use client";

import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { UserComponent } from "./user";
import * as React from "react";

export interface IUser {
  image: string;
  name: string;
  label: string;
  comment: string;
}

export const CarouselComponent = (props: { items: IUser[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 300;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full overflow-x-hidden p-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          style={{
            transform: `translateX(-${
              currentIndex * (cardWidth + currentIndex * 10)
            }px)`,
          }}
        >
          {props.items.map((item, index) => (
            <div
              key={index}
              className={`${
                index === currentIndex
                  ? "bg-white scale-105 shadow-lg" // Card destacado
                  : "bg-gray-200"
              } w-screen sm:w-[300px] flex-shrink-0 rounded-xl p-7 mx-5 flex flex-col items-start justify-end transition-transform duration-300 ease-in-out`}
            >
              <p className="mb-6 mt-24">{item.comment}</p>
              <UserComponent
                card
                image={item.image}
                name={item.name}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-10 mt-10 mb-20 items-center justify-center lg:justify-start ml-14">
        <button
          type="button"
          onClick={prevSlide}
          className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-16 h-16 flex items-center justify-center bg-transparent"
        >
          <IoIosArrowRoundForward className="text-5xl rotate-180" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-16 h-16 flex items-center justify-center bg-transparent"
        >
          <IoIosArrowRoundForward className="text-5xl" />
        </button>
      </div>
    </div>
  );
};
