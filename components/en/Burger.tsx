"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface ChildProps {
  navIsOpen: (data: boolean) => void;
}

const Burger: React.FC<ChildProps> = ({ navIsOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    navIsOpen(!isOpen);
    setIsOpen((e) => !e);
  };

  return (
    <div className="md:hidden ">
      <button
        type="button"
        onClick={handleClick}
        className="relative w-[32px] h-[26px] rounded-md border-2 border-black"
      >
        <div
          className={cn(
            "absolute w-2/3 border border-black transition-all duration-300 ease-in-out",
            isOpen ? "top-1/2 left-1/6 transform rotate-45" : "top-1/4 left-1/6"
          )}
        ></div>
        <div
          className={cn(
            "absolute w-2/3 border border-black top-2/4 left-1/6",
            isOpen && "hidden"
          )}
        ></div>
        <div
          className={cn(
            "absolute w-2/3 border border-black transition-all duration-300 ease-in-out",
            isOpen
              ? "top-1/2 left-1/6 transform -rotate-45"
              : "top-3/4 left-1/6"
          )}
        ></div>
      </button>
    </div>
  );
};

export default Burger;
