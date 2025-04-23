import HizmetBanner from "@/components/en/HizmetBanner";
import WorkExamples from "@/components/en/WorkExamples";
import metadata from "@/lib/metadata/en/alt-yapi";
import React from "react";

// SEO metadata export
export { metadata };

const page = () => {
  const images: string[] = [
    "/images/moloz1.webp",
    "/images/moloz2.webp",
    "/images/moloz3.webp",
  ];

  const works: Works[] = [
    {
      img: "/unluimages/izmiraltyapi1.webp",
      title: "Infrastructure and Cable Trenching for İzmir Wind Turbines",
      date: "12/03/2024",
      content: `As part of the İzmir Wind Turbine Project led by EnerjiSA, 
      we carried out cable trenching and infrastructure works to ensure power transmission to the turbines. 
      In line with the project scope, electrical cable channels were excavated along the designated routes. 
      These trenches were then properly sanded and leveled. The entire process was conducted in compliance with 
      EnerjiSA’s technical specifications, and the channels were securely backfilled, making the system ready 
      for operation.`,
    },
    {
      img: "/unluimages/altyapi1.webp",
      title: "Debris Removal for the Forestry Directorate",
      date: "12/03/2024",
      content: `We successfully completed a debris removal project for the Forestry Directorate. 
      The work involved clearing construction and demolition waste from designated areas, ensuring 
      environmental and operational safety. All debris was transported to authorized disposal facilities, 
      and the site was delivered clean and ready for future use.`,
    },
  ];

  return (
    <main>
      <HizmetBanner hizmet="Infrastructure Works" images={images} />

      <section
        aria-labelledby="alt-yapi-hizmetleri"
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
      >
        <h1 id="infrastructure-works-title" className="sr-only">
          Infrastructure Works
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
