"use client";

import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { UserComponent } from "./user";
import * as React from "react";
import * as motion from "framer-motion/client";

export interface IUser {
  image: string;
  name: string;
  label: string;
  comment: string;
}

export const CarouselComponent = (props: { items: IUser[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCardWidth(window.innerWidth * 0.76);
      } else {
        setCardWidth(300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex w-full overflow-hidden py-10"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (cardWidth + 40)}px)`,
          }}
        >
          {props.items.map((item, index) => (
            <div
              key={index}
              aria-label="Comment Card"
              className={`${
                index === currentIndex
                  ? "bg-white scale-[1.05] shadow-lg"
                  : "bg-gray-200"
              } w-[76vw] sm:w-[300px] flex-shrink-0 rounded-xl p-7 mx-5 flex flex-col items-start justify-end transition-transform duration-300 ease-in-out`}
              style={{ width: `${cardWidth}px` }}
            >
              <p className="mb-6 mt-14 lg:mt-24 text-xs lg:text-base">
                {item.comment}
              </p>
              <UserComponent
                card
                image={item.image}
                name={item.name}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-row gap-10 mt-10 mb-20 items-center justify-center lg:justify-start ml-0 lg:ml-14"
      >
        <button
          type="button"
          aria-label="Preview card"
          onClick={prevSlide}
          className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-16 h-16 flex items-center justify-center bg-transparent"
        >
          <IoIosArrowRoundForward className="text-5xl rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next card"
          onClick={nextSlide}
          className="rounded-full border-[2px] border-[#FCD34D] text-[#FCD34D] w-16 h-16 flex items-center justify-center bg-transparent"
        >
          <IoIosArrowRoundForward className="text-5xl" />
        </button>
      </motion.div>
    </div>
  );
};
