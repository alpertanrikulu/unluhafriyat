// app/en/hizmetlerimiz/hafriyat-moloz-tasima/page.tsx

import HizmetBanner from "@/components/en/HizmetBanner";
import WorkExamples from "@/components/en/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/en/hafriyat-moloz-tasima";

export { metadata };

const page = () => {
  const images: string[] = [
    "/images/moloz1.jpg",
    "/images/moloz2.jpg",
    "/images/moloz3.jpg",
  ];

  const works: Works[] = [
    {
      img: "/unluimages/derekoy.jpg",
      title: "Derekoy Irrigation Pond Project",
      date: "03.12.2024",
      content: `Within the scope of the irrigation pond project located in the 
      Dereköy region of Yalova, we carried out the excavation works on-site. In 
      accordance with the boundaries and measurements specified in the project 
      plan, we first cleared the working area by removing the vegetation and trees
       in the region. The excavated material from the site was transported to the 
       designated fill areas. We successfully completed the project by finishing 
       the grading operations around the pond and in the areas designated for 
       membrane lining.`,
    },
    {
      img: "/unluimages/golet2.jpg",
      title: "İznik/Kirinti Village Irrigation Pond",
      date: "03.12.2024",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            dolor dolores incidunt aspernatur accusantium, doloremque placeat ab
            aperiam ratione, eveniet porro? Reprehenderit tenetur nulla in
            officia soluta, illo optio aliquam nemo facere natus reiciendis
            repellat, exercitationem libero alias assumenda voluptas aut dolorem
            quod mollitia? Ex quae maiores laboriosam, consectetur et placeat
            minus aut eveniet rerum quia aspernatur fuga aliquid illo optio
            molestias amet adipisci veritatis quaerat minima mollitia! Unde
            sequi iusto quisquam soluta excepturi dolorum!`,
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
