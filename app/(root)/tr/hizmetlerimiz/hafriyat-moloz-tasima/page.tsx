// app/tr/hizmetlerimiz/hafriyat-moloz-tasima/page.tsx

import HizmetBanner from "@/components/HizmetBanner";
import WorkExamples from "@/components/WorkExamples";
import React from "react";
import metadata from "@/lib/metadata/tr/hafriyat-moloz-tasima";

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
      img: "/unluimages/golet2.webp",
      title: "İznik/Kırıntı köyü Sulama Göleti",
      date: "03.12.2024",
      content: `Bursa Büyükşehir Belediyesi tarafından, orman yangınlarını önlemek, 
      tarım ve hayvancılık faaliyetlerine destek sağlamak amacıyla başlatılan 
      sulama göleti projesinde yer aldık. Yaklaşık dört ay süren çalışmalar kapsamında, 
      sahada 4 kamyon, 3 ekskavatör ve 2 loder kullanarak tüm hafriyat ve tesviye işlemlerini 
      titizlikle gerçekleştirdik. Proje süresince göletin su tutma kapasitesine uygun 
      zemin hazırlığı yapıldı ve alan, kullanıma hazır şekilde teslim edildi.`,
    },
    {
      img: "/unluimages/bahcesehir.webp",
      title: "İstanbul Bahçeşehir Kentsel Dönüşüm Hafriyat Çalışmaları",
      date: "03.12.2024",
      content: `İstanbul Bahçeşehir bölgesinde yürütülen kentsel dönüşüm projesi kapsamında, 
      yeni yapıların temelleri için kazı ve kırım işlemlerini gerçekleştirdik. Yaklaşık 1 
      ay süren çalışmalar boyunca, yapı güvenliğini temel alarak eski yapı kalıntıları 
      özenle kırıldı ve zemin uygun derinlikte kazılarak inşaata hazır hale getirildi. 
      Proje, sıkışık şehir dokusu içinde güvenli ve planlı bir şekilde tamamlanarak ilgili 
      inşaat ekiplerine eksiksiz teslim edildi.`,
    },
    {
      img: "/unluimages/koyevleri1.webp",
      title: "Yalova Köy Evleri Temel Kazı Çalışmaları",
      date: "03.12.2024",
      content: `Yalova genelinde yapımı planlanan köy evleri projesi kapsamında, birden 
      fazla noktada temel kazı çalışmalarını başarıyla tamamladık. Proje süresince her 
      yapının zemin etüdüne uygun olarak kazı derinlikleri belirlendi ve iş makinelerimizle 
      kazılar güvenli bir şekilde gerçekleştirildi. Kazı sonrası çıkan hafriyat malzemeleri, 
      çevre düzenlemelerinde kullanılmak üzere uygun alanlara taşındı. Tüm çalışmalar, yapı 
      temellerinin sağlam ve sorunsuz inşa edilebilmesi için özenle yürütüldü.`,
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
          Hafriyat ve Moloz Taşıma Hizmetlerimiz
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
