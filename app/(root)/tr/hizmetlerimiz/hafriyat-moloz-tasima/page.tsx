// app/tr/hizmetlerimiz/hafriyat-moloz-tasima/page.tsx

import HizmetBanner from "@/components/HizmetBanner";
import WorkExamples from "@/components/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/tr/hafriyat-moloz-tasima";

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
      title: "Dereköy Sulama Göleti Projesi",
      date: "03.12.2024",
      content: `Yalova Dereköy mevkiinde yer alan sulama göleti projesi kapsamında, 
      saha içi hafriyat çalışmalarını gerçekleştirdik. Proje planında belirtilen sınır 
      ve ölçülere uygun olarak, öncelikle çalışma alanının temizliğini yaparak bölgedeki 
      bitki örtüsünü ve ağaçları kaldırdık. Sahada çıkan hafriyat malzemesi, doldurulması 
      gereken bölgelere taşındı. Gölet çevresi ile membran kaplamasının yapılacağı alanların 
      tesviye işlemlerini tamamlayarak projeyi başarıyla sonuçlandırdık.`,
    },
    {
      img: "/unluimages/golet2.jpg",
      title: "İznik/Kırıntı köyü Sulama Göleti",
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
      <HizmetBanner hizmet="Hafriyat - Moloz Taşıma" images={images} />

      <section
        aria-labelledby="hafriyat-isleri-baslik"
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
      >
        <h1 id="hafriyat-isleri-baslik" className="sr-only">
          Hafriyat ve Moloz Taşıma Çalışmalarımız
        </h1>

        {works.map((work, index) => (
          <article
            key={index}
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
