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
    <main>
      <HizmetBanner hizmet="Bina Yıkım Hizmetleri" images={images} />

      <section
        aria-labelledby="bina-yikim-baslik"
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
      >
        <h1 id="bina-yikim-baslik" className="sr-only">
          Bina Yıkım Hizmetleri
        </h1>

        {works.map((work, index) => (
          <article
            key={index}
            className="w-full max-w-5xl my-8"
            aria-label={`Çalışma: ${work.title}`}
          >
            <WorkExamples work={work} />
          </article>
        ))}
      </section>
    </main>
  );
};

export default page;
