import HizmetBanner from "@/components/HizmetBanner";
import WorkExamples from "@/components/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/tr/yol-yapim-parke";

export { metadata };

const page = () => {
  const images: string[] = [
    "/images/moloz1.webp",
    "/images/moloz2.webp",
    "/images/moloz3.webp",
  ];

  const works: Works[] = [
    {
      img: "/unluimages/izmiryol2.webp",
      title: "İzmir Rüzgar Türbini Yol Yapım Projesi",
      date: "03.12.2024",
      content: `EnerjiSA tarafından İzmir'de gerçekleştirilen rüzgar türbini projesi 
      kapsamında, türbin alanlarına ulaşımı sağlamak amacıyla yol açma ve genişletme 
      çalışmalarını üstlendik. Yaklaşık 6 ay süren proje süresince, türbinlere ulaşan 
      yolların mevcut yapısı iyileştirildi; yeni yol güzergahları açılarak gerekli 
      genişletmeler yapıldı. Nakliye işlemlerinin sorunsuz şekilde yürütülebilmesi 
      için zemin sıkıştırma çalışmaları tamamlandı. Proje sonunda, rüzgar türbini 
      sahasına güvenli ve dayanıklı ulaşım sağlayan yollar başarıyla teslim edildi.`,
    },
    {
      img: "/unluimages/yolparke1.webp",
      title: "Yalova İl Özel İdaresi Parke Yol Yapım Çalışmaları",
      date: "03.12.2024",
      content: `Yalova İl Özel İdaresi tarafından yürütülen kırsal altyapı iyileştirme projesi 
      kapsamında, Yalova’nın çeşitli köylerinde parke yol yapım çalışmalarını gerçekleştirdik. 
      Proje dahilinde, üstyapı hazırlıkları tamamlandıktan sonra köy içi yolların uzun ömürlü 
      ve dayanıklı olması amacıyla parke döşeme işlemleri titizlikle uygulandı. Tüm yollar, 
      bölge sakinlerinin güvenli ve konforlu ulaşım sağlayabileceği şekilde kullanıma hazır 
      olarak teslim edildi.`,
    },
  ];

  return (
    <main>
      <HizmetBanner hizmet="Yol Yapım - Parke Döşeme" images={images} />

      <section
        className="px-10 py-20 lg:px-40 lg:py-40 flex flex-col justify-center items-center"
        aria-labelledby="work-examples-heading"
      >
        <h1 id="yol-yapim-parke-doseme-baslik" className="sr-only">
          Yol Yapım - Parke Döşeme
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
