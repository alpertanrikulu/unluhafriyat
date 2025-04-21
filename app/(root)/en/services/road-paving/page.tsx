import HizmetBanner from "@/components/HizmetBanner";
import WorkExamples from "@/components/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/en/yol-yapim-parke";

export { metadata };

const page = () => {
  const images: string[] = [
    "/images/moloz1.jpg",
    "/images/moloz2.jpg",
    "/images/moloz3.jpg",
  ];

  const works: Works[] = [
    {
      img: "/unluimages/izmiryol2.jpeg",
      title: "İzmir Wind Turbine Road Construction Project",
      date: "12/03/2024",
      content: `As part of the wind turbine project carried out by EnerjiSA in İzmir, 
      we undertook the task of opening and expanding access roads to the turbine sites. 
      Throughout the six-month project, existing roads leading to the turbines were improved, 
      and new routes were opened with necessary widenings. Ground compaction work was completed 
      to ensure smooth transportation operations. In the end, durable and safe roads providing 
      access to the wind turbine sites were successfully delivered.`,
    },
    {
      img: "/unluimages/yolparke1.jpg",
      title:
        "Paving Road Construction for Yalova Provincial Special Administration",
      date: "12/03/2024",
      content: `Within the scope of the rural infrastructure improvement project conducted 
      by the Yalova Provincial Special Administration, we carried out paving road construction 
      in various villages across Yalova. After completing the surface preparations, paving stones 
      were meticulously laid to ensure long-lasting and durable village roads. All routes were 
      delivered ready for use, providing safe and comfortable transportation for local residents.`,
    },
  ];

  return (
    <main>
      <HizmetBanner hizmet="Road Construction - Paving" images={images} />

      <section
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
        aria-labelledby="work-examples-heading"
      >
        <h1 id="road-construction-title" className="sr-only">
          Road Construction - Paving
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
