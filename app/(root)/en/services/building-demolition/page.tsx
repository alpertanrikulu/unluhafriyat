import HizmetBanner from "@/components/en/HizmetBanner";
import WorkExamples from "@/components/en/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/en/bina-yikim";

export { metadata };

const page = () => {
  const images: string[] = [
    "/images/moloz1.jpg",
    "/images/moloz2.jpg",
    "/images/moloz3.jpg",
  ];

  const works: Works[] = [
    {
      img: "/unluimages/yikim.jpg",
      title:
        "Demolition and Debris Removal for Yalova Provincial Special Administration",
      date: "12/03/2024",
      content: `As part of the building renewal project led by the Yalova Provincial 
      Special Administration, we carried out the controlled demolition of a four-story 
      building located in the city center. The demolition was completed in a planned and 
      safe manner by our expert teams, prioritizing environmental and public safety. 
      All resulting debris and construction waste were quickly removed, and the area was 
      delivered clean and ready for further use.`,
    },
    {
      img: "/unluimages/yikimyardimlasma.jpeg",
      title: "Demolition Work for Yeni Mahalle Social Solidarity Association",
      date: "12/03/2024",
      content: `Prior to the construction of a new building for the Yeni Mahalle Social 
      Solidarity Association, we conducted the demolition of old, unused structures on the site. 
      The process was carried out with careful attention to safety and cleanliness. 
      Debris was swiftly removed after demolition, preparing the land for the upcoming 
      construction phase.`,
    },
  ];

  return (
    <main>
      <HizmetBanner hizmet="Building Demolition" images={images} />

      <section
        aria-labelledby="bina-yikim-baslik"
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
      >
        <h1 id="building-demolition-title" className="sr-only">
          Building Demolition
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
