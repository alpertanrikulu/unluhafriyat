import Image from "next/image";
import React from "react";

const WorkExamples = ({ work }: { work: Works }) => {
  const { img, title, date, content } = work;

  return (
    <article
      className="clearfix md:max-w-[70vw]"
      aria-labelledby={`work-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="w-full md:w-auto float-none md:float-left md:mr-6 md:mb-4 mb-6">
        <Image
          className="md:w-[500px] max-h-[400px] object-cover mx-auto md:mx-0"
          src={img}
          alt={`${title} - Yalova hafriyat çalışması`}
          width={800}
          height={800}
          loading="lazy"
        />
      </div>

      <section className="mb-6">
        <h2
          id={`work-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-xl lg:text-2xl font-bold mb-4"
        >
          {title}
        </h2>
        <time
          dateTime={new Date(date).toISOString()}
          className="text-sm mb-4 font-thin block"
        >
          {date}
        </time>
        <p className="text-md lg:text-lg md:font-medium">{content}</p>
      </section>
    </article>
  );
};

export default WorkExamples;
