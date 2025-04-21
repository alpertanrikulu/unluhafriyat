import HizmetBanner from "@/components/HizmetBanner";
import WorkExamples from "@/components/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/tr/tesviye";

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
      title: "Ahmediye Köyü Sulama Göleti Tel Örgü Çalışması",
      date: "03.12.2024",
      content: `Ahmediye Köyü'nde yer alan sulama göleti çevresinin güvenliğini 
      sağlamak amacıyla, tel örgü uygulamasını başarıyla tamamladık. Çevre 
      sınırlarının belirlenmesi ve korunması için yapılan bu çalışma, projenin 
      güvenlik ve altyapı bütünlüğüne katkı sağladı.`,
    },
    {
      img: "/unluimages/doga1.jpeg",
      title: "Yabani Hayvanlara Bakım Tesisi Çalışmaları",
      date: "03.12.2024",
      content: `Yabani hayvanlara yönelik bakım tesisi projesi kapsamında, 
      çevre düzenlemesi ile birlikte temel hafriyat işlerini tamamladık. 
      Tesisin altyapısını güvenli ve sağlam bir şekilde hazırlayarak inşaat 
      sürecine uygun zemin oluşturduk.`,
    },
    {
      img: "/unluimages/tasduvar1.jpeg",
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
      <HizmetBanner hizmet="Arazi Düzenleme Hizmetleri" images={images} />

      <section
        aria-labelledby="cevre-duzenleme-hizmetleri-baslik"
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
      >
        <h1 id="cevre-duzenleme-hizmetleri-baslik" className="sr-only">
          Arazi Düzenleme Hizmetleri
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
