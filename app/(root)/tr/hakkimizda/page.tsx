import Image from "next/image";
import React from "react";
import metadata from "@/lib/metadata/tr/hakkimizda";

export { metadata };

const page = () => {
  return (
    <main>
      <header className="bg-gray-200 py-8">
        <h1 className="text-4xl text-center font-semibold">Hakkımızda</h1>
      </header>

      <section className="px-6 md:px-20 py-10 flex justify-center">
        <article className="clearfix md:max-w-[70vw]">
          {/* Görsel */}
          <div className="w-full md:w-auto float-none md:float-left md:mr-6 md:mb-4 mb-6">
            {/* <Image
              className="w-[300px] h-auto object-cover mx-auto md:mx-0"
              src="/unluimages/hakkimizda.webp"
              alt="Yalova hafriyat firması iş makinesi"
              width={500}
              height={500}
            /> */}
            <Image
              className="w-[300px] h-auto object-cover mx-auto md:mx-0"
              src="/unluimages/sefa.webp"
              alt="Yalova hafriyat firması iş makinesi"
              width={500}
              height={500}
            />
          </div>

          {/* Metinler */}
          <h2 className="text-3xl font-bold mb-4">Biz Kimiz?</h2>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">
              Köklü Bir Geçmiş, Güvenilir Bir Gelecek
            </h3>
            <p className="text-md font-medium mb-3">
              Ünlüsa Hafriyat, 1970 yılında Adem Ünlüsa tarafından Yalova’da
              kurulmuştur. Kuruluşundan bu yana sektördeki gelişmeleri yakından
              takip eden firmamız, bugün ikinci kuşak temsilcisi Sefa Ünlüsa
              liderliğinde faaliyetlerine devam etmektedir. Yarım asrı aşan
              tecrübemizle, hafriyat ve inşaat sektöründe güvenilir bir isim
              olmanın gururunu yaşıyoruz.
            </p>
            <h3 className="text-lg font-semibold">
              Geniş Hizmet Yelpazesi ve Modern Ekipmanlar
            </h3>
            <p className="text-md font-medium mb-3">
              Hizmet alanlarımız arasında hafriyat, alt ve üst yapı çalışmaları,
              yıkım işleri, peyzaj düzenlemeleri, asfalt ve parke yol yapımı,
              köy altyapı projeleri ile sulama göletleri inşası yer almaktadır.
              Ayrıca, saatlik, günlük ve aylık periyotlarla kiraya verdiğimiz iş
              makinelerimizle (kepçe, kamyon vb.) projelerinize esnek çözümler
              sunmaktayız. Sahip olduğumuz modern ekipmanlar ve uzman kadromuz
              ile her ölçekten projeye profesyonel destek sağlıyoruz.
            </p>
            <h3 className="text-lg font-semibold">
              Bölgesel Güç, Kaliteli Hizmet Anlayışı
            </h3>
            <p className="text-md font-medium mb-3">
              Yalova başta olmak üzere Marmara Bölgesi genelinde birçok projede
              yer alarak, geniş bir hizmet ağı oluşturduk. Müşteri memnuniyetini
              temel ilke edinen firmamız, her işte kalite, güven ve zamanında
              teslim prensipleriyle hareket etmektedir. Ünlüsa Hafriyat olarak,
              iş ortaklarımıza sadece bir hizmet değil, aynı zamanda
              sürdürülebilir ve sağlam çözümler sunmaya devam ediyoruz.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
};

export default page;
