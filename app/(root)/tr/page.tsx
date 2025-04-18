import OurServices from "@/components/OurServices";
import ServicesCards from "@/components/ServicesCards";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { metadata } from "@/lib/metadata/tr/anasayfa";
import Image from "next/image";

export { metadata };

const Page = () => {
  return (
    <main>
      {/* Hero Alanı */}
      <section
        aria-labelledby="hero-heading"
        className="relative bg-[url('/unluimages/yan-santiye.jpeg')] bg-cover bg-center"
        style={{ height: "calc(100vh - 112px)" }}
      >
        <div className="absolute w-full h-full bg-gradient-to-tr from-black/90 via-black/20 to-black/0">
          <div className="flex justify-end">
            <div className="space-y-3 mt-5 mr-7">
              <Link
                className="bg-amber-300 hover:bg-amber-200 transition-all hover:scale-105 duration-300 flex px-5 py-3 text-lg md:text-xl font-medium rounded-2xl hover:shadow-lg gap-2"
                href="/tr/iletisim"
              >
                Mesaj Bırak <ChevronRight />
              </Link>
              <Link
                className="bg-amber-300 hover:bg-amber-200 transition-all hover:scale-105 duration-300 flex px-5 py-3 text-lg md:text-xl font-medium rounded-2xl hover:shadow-lg gap-2"
                href="https://maps.app.goo.gl/3gKmi2D1PPgxZv8a6"
              >
                Haritada Gör <ChevronRight />
              </Link>
            </div>
          </div>
          <h1
            id="hero-heading"
            className="absolute text-white text-3xl sm:text-4xl lg:text-5xl font-black bottom-15 left-10 md:left-15 md:max-w-[55vw] leading-relaxed"
          >
            Ağır yükleri hafifletir,
            <br /> güçlü makinelerle geleceği inşa ederiz!
          </h1>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section
        className="px-[75px] py-10 flex items-center justify-center min-h-[100vh] bg-gray-100"
        aria-labelledby="about-heading"
      >
        <div className="rounded-3xl overflow-hidden">
          <div className="flex flex-wrap justify-center bg-white">
            <figure className="w-full lg:w-2/5 flex items-center">
              <Image
                src="/images/jcb.jpg"
                alt="Yalova kepçe"
                className="object-cover"
                width={4032}
                height={2268}
              />
            </figure>
            <div className="w-full lg:w-3/5 px-3 md:px-5 py-6 max-md:rounded-3xl md:rounded-r-3xl flex flex-col space-y-6 items-start justify-center">
              <h2 id="about-heading" className="text-3xl font-semibold">
                Biz Kimiz?
              </h2>
              <p className="text-md md:text-xl font-medium">
                Yalova ve Marmara Bölgesi&#39;nde hafriyat, alt yapı, üst yapı,
                yıkım ve kazı-dolgu gibi her türlü inşaat hizmetinde güvenilir
                ve profesyonel bir çözüm ortağıyız. Ünlü Hafriyat olarak,
                deneyimli ekibimiz ve güçlü iş makinelerimizle projelerinizi
                hızlı, güvenli ve zamanında tamamlamak için yanınızdayız.
                Yalova&#39;dan Orhangazi&#39;ye, İzmit&#39;ten çevre ilçelere
                kadar geniş hizmet ağımızla, iş makineleri kiralama veya komple
                proje çözümleri sunuyoruz. Müşteri memnuniyetini ön planda
                tutarak, her işte kaliteyi esas alıyoruz. Bizimle çalışarak,
                inşaat ve yıkım işlerinizin profesyonel bir şekilde ilerlediğini
                göreceksiniz!
              </p>

              <Link
                href="/tr/hakkimizda"
                className="sariButton hover:scale-110 hover:drop-shadow-lg transition-all duration-300 flex gap-2 font-normal"
              >
                Bizi Daha Yakından Tanıyın <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section
        className="px-[75px] py-6 text-center"
        id="hizmetlerimiz"
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" className="text-4xl font-bold mt-6 mb-10">
          Hizmetlerimiz
        </h2>
        <OurServices />
        <ServicesCards />
      </section>
    </main>
  );
};

export default Page;
