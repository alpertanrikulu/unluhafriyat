// app/en/hizmetlerimiz/hafriyat-moloz-tasima/page.tsx

import HizmetBanner from "@/components/en/HizmetBanner";
import WorkExamples from "@/components/en/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/en/hafriyat-moloz-tasima";

export { metadata };

const page = () => {
  const images: string[] = [
    "/images/moloz1.webp",
    "/images/moloz2.webp",
    "/images/moloz3.webp",
  ];

  const works: Works[] = [
    {
      img: "/unluimages/derekoy.webp",
      title: "Dereköy Irrigation Pond Project",
      date: "12/03/2024",
      content: `As part of the irrigation pond project located in the Dereköy area of Yalova, 
      we carried out all on-site excavation works. In line with the boundaries and measurements 
      specified in the project plan, we first cleared the site by removing the vegetation and trees. 
      The excavated material was transported to designated fill areas. After completing the grading 
      of the pond surroundings and the membrane installation zones, we successfully delivered the project.`,
    },
    {
      img: "/unluimages/golet2.webp",
      title: "İznik/Kırıntı Village Irrigation Pond",
      date: "12/03/2024",
      content: `We took part in an irrigation pond project initiated by Bursa Metropolitan Municipality 
      to help prevent forest fires and support agricultural and livestock activities. Over the course 
      of four months, we meticulously completed all excavation and grading operations using 4 trucks, 
      3 excavators, and 2 loaders. The ground was prepared to meet the pond’s water-holding capacity, 
      and the entire area was delivered ready for use.`,
    },
    {
      img: "/unluimages/bahcesehir.webp",
      title: "Urban Transformation Excavation Works in Bahçeşehir, Istanbul",
      date: "12/03/2024",
      content: `As part of the urban transformation project in Bahçeşehir, Istanbul, 
      we performed excavation and demolition works for the foundations of new buildings. 
      Throughout the one-month project, we carefully removed remnants of existing structures 
      with a focus on structural safety and excavated the ground to appropriate depths, 
      preparing the site for construction. The project was successfully completed and handed 
      over to the construction teams, ready for the next phase.`,
    },
    {
      img: "/unluimages/koyevleri1.webp",
      title: "Foundation Excavation for Village Houses in Yalova",
      date: "12/03/2024",
      content: `Within the scope of a planned rural housing project across various areas in Yalova, 
      we successfully carried out foundation excavation works at multiple locations. For each building, 
      excavation depths were determined according to ground surveys, and the work was performed safely 
      using our heavy equipment. The excavated materials were relocated to designated areas for use 
      in landscaping and site preparation. All operations were conducted with precision to ensure 
      stable and secure foundations for construction.`,
    },
  ];

  return (
    <main>
      <HizmetBanner hizmet="Excavation - Debris Removal" images={images} />

      <section
        aria-labelledby="hafriyat-isleri-baslik"
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
      >
        <h1 id="excavation-debris-removal-title" className="sr-only">
          Excavation - Debris Removal
        </h1>

        {works.map((work, index) => (
          <article
            key={index}
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
