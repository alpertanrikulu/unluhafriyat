import HizmetBanner from "@/components/HizmetBanner";
import WorkExamples from "@/components/WorkExamples";
import React from "react";

const page = () => {
  const images: string[] = [
    "/images/moloz1.jpg",
    "/images/moloz2.jpg",
    "/images/moloz3.jpg",
  ];

  const works: Works[] = [
    {
      img: "/images/moloz.jpg",
      title: "Orman müdürlüğünün moloz kaldırma işi",
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
    {
      img: "/images/moloz.jpg",
      title: "Orman müdürlüğünün moloz kaldırma işi",
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
    {
      img: "/images/moloz.jpg",
      title: "Orman müdürlüğünün moloz kaldırma işi",
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
    <>
      <HizmetBanner hizmet={"Hafriyat - Moloz Taşıma"} images={images} />
      <section className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center">
        {/* <WorkExamples works={works} /> */}
        {works.map((work, k) => (
          <WorkExamples key={k} work={work} />
        ))}
      </section>
    </>
  );
};

export default page;
