import HizmetBanner from "@/components/HizmetBanner";
import WorkExamples from "@/components/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/tr/bina-yikim";

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
      title: "Yalova İl Özel İdaresi Bina Yıkım ve Moloz Kaldırma Çalışması",
      date: "03.12.2024",
      content: `Yalova İl Özel İdaresi tarafından yürütülen yapı yenileme çalışmaları 
      kapsamında, şehir merkezinde bulunan 4 katlı bir binanın kontrollü yıkım işlemini 
      gerçekleştirdik. Yıkım süreci, çevre güvenliği ön planda tutularak uzman ekiplerimiz 
      tarafından planlı bir şekilde tamamlandı. Ardından, sahada oluşan moloz ve inşaat 
      atıkları hızlıca kaldırılarak alan temiz bir şekilde teslim edildi.`,
    },
    {
      img: "/unluimages/yikimyardimlasma.jpeg",
      title: "Yeni Mahalle Sosyal Yardımlaşma Derneği Bina Yıkım Çalışması",
      date: "03.12.2024",
      content: `Yeni Mahalle Sosyal Yardımlaşma Derneği’nin yeni bina inşaatı öncesinde, 
      proje alanında bulunan atıl yapıların yıkım işlemlerini gerçekleştirdik. Eski 
      binanın kontrollü şekilde yıkılması sürecinde, çevre güvenliği ve saha temizliği 
      titizlikle sağlandı. Yıkım sonrası oluşan molozlar kısa sürede kaldırılarak arazi, 
      yeni yapı çalışmalarına hazır hale getirildi.`,
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
