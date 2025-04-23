import HizmetBanner from "@/components/HizmetBanner";
import WorkExamples from "@/components/WorkExamples";
import metadata from "@/lib/metadata/tr/alt-yapi";
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
      title: "İzmir Rüzgar Türbinleri Altyapı ve Kablo Kanalı Çalışmaları",
      date: "03.12.2024",
      content: `EnerjiSA tarafından yürütülen İzmir Rüzgar Türbini Projesi kapsamında, 
      türbinlere enerji iletimi sağlamak amacıyla kablo kanalı altyapı çalışmaları 
      gerçekleştirdik. Proje doğrultusunda, belirlenen güzergâhlarda elektrik kablo 
      kanalları kazıldı, ardından uygun şekilde kumlama ve tesviye işlemleri tamamlandı. 
      Tüm süreç, EnerjiSA’nın teknik şartnamelerine uygun olarak yürütülerek kanal dolguları 
      güvenli bir şekilde kapatıldı ve altyapı sistemleri devreye alınmaya hazır hale getirildi.`,
    },
    {
      img: "/unluimages/altyapi1.webp",
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
      <HizmetBanner hizmet="Alt Yapı Çalışmaları" images={images} />

      <section
        aria-labelledby="alt-yapi-hizmetleri"
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
      >
        <h1 id="alt-yapi-hizmetleri" className="sr-only">
          Alt Yapı Hizmetleri
        </h1>

        {works.map((work, k) => (
          <article
            key={k}
            className="w-full max-w-7xl my-8"
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
