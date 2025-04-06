import Image from "next/image";
import React from "react";

const WorkExamples = ({ work }: { work: Works }) => {
  const { img, title, date, content } = work;
  return (
    <div className="flex flex-wrap mb-20 bg-gray-100 max-w-[1440px]">
      <div className="w-full lg:w-1/3 flex justify-center lg:block mb-5 lg:mb-0 max-lg:px-5">
        <Image src={img} alt="Yalova hafriyat kepçe" width={400} height={400} />
      </div>
      <div className="w-full lg:w-2/3 flex items-start">
        <div className="w-full p-5 ">
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="text-sm mb-4 font-thin">{date}</p>
          <p className="text-lg lg:text-xl md:font-medium">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExamples;
