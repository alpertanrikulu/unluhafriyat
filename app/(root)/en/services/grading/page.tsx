import HizmetBanner from "@/components/en/HizmetBanner";
import WorkExamples from "@/components/en/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/en/tesviye";

export { metadata };

const page = () => {
  const images: string[] = [
    "/images/moloz1.jpg",
    "/images/moloz2.jpg",
    "/images/moloz3.jpg",
  ];

  const works: Works[] = [
    {
      img: "/unluimages/telorgu1.jpg",
      title: "Fencing Work Around Ahmediye Village Irrigation Pond",
      date: "12/03/2024",
      content: `We successfully completed the installation of a security fence 
      around the irrigation pond located in Ahmediye Village. This work contributed 
      to the safety and infrastructure integrity of the project by clearly defining 
      and protecting the perimeter.`,
    },
    {
      img: "/unluimages/doga1.jpeg",
      title: "Wildlife Care Facility Site Preparation",
      date: "12/03/2024",
      content: `As part of the wildlife care facility project, we carried out both 
      earthworks for the foundation and environmental landscaping. The area was 
      properly prepared to ensure a stable and secure base for the upcoming construction phase.`,
    },
    {
      img: "/unluimages/tasduvar1.jpeg",
      title: "Debris Removal for the Forestry Directorate",
      date: "12/03/2024",
      content: `We successfully executed debris removal works for the Forestry Directorate, 
      ensuring the clearing of rubble and construction waste from the designated areas. 
      All procedures were conducted with care for safety and environmental standards, 
      leaving the site ready for further use.`,
    },
  ];

  return (
    <main>
      <HizmetBanner hizmet="Land Grading" images={images} />

      <section
        aria-labelledby="yol-yapim-parke-baslik"
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
      >
        <h1 id="land-grading-title" className="sr-only">
          Land Grading
        </h1>

        {works.map((work, k) => (
          <article
            key={k}
            className="w-full max-w-7xl my-8"
            aria-label={`Work: ${work.title}`}
          >
            <WorkExamples work={work} />
          </article>
        ))}
      </section>
    </main>
  );
};

export default page;
