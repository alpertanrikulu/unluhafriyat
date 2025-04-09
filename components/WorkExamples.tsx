import Image from "next/image";
import React from "react";

const WorkExamples = ({ work }: { work: Works }) => {
  const { img, title, date, content } = work;

  return (
    <article
      className="flex flex-wrap mb-20 bg-gray-100 max-w-[1440px]"
      aria-labelledby={`work-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="w-full lg:w-1/3 flex justify-center lg:block mb-5 lg:mb-0 max-lg:px-5">
        <Image
          src={img}
          alt={`${title} - Yalova hafriyat çalışması`}
          width={400}
          height={400}
          loading="lazy"
        />
      </div>
      <div className="w-full lg:w-2/3 flex items-start">
        <div className="w-full p-5">
          <h2
            id={`work-${title.replace(/\s+/g, "-").toLowerCase()}`}
            className="text-3xl md:text-4xl"
          >
            {title}
          </h2>
          <time
            dateTime={new Date(date).toISOString()}
            className="text-sm mb-4 font-thin block"
          >
            {date}
          </time>
          <p className="text-lg lg:text-xl md:font-medium">{content}</p>
        </div>
      </div>
    </article>
  );
};

export default WorkExamples;
