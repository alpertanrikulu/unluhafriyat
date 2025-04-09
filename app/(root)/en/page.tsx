import OurServices from "@/components/en/OurServices";
import ServicesCards from "@/components/en/ServicesCards";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { metadata } from "@/lib/metadata/en/anasayfa";

export { metadata };

const Page = () => {
  return (
    <main>
      {/* Hero Alanı */}
      <section
        aria-labelledby="hero-heading"
        className="relative bg-[url('/kepce-bg.jpg')] bg-cover bg-center"
        style={{ height: "calc(100vh - 112px)" }}
      >
        <div className="absolute w-full h-full bg-gradient-to-tr from-black/70 via-black/10 to-black/0">
          <div className="flex justify-end">
            <div className="space-y-3 mt-5 mr-7">
              <Link
                className="sariButton hover:bg-amber-200"
                href="/tr/iletisim"
              >
                Mesaj Bırak <ChevronRight />
              </Link>
              <Link className="sariButton hover:bg-amber-200" href="#">
                Şantiyemiz <ChevronRight />
              </Link>
            </div>
          </div>
          <h1
            id="hero-heading"
            className="absolute font-medium text-2xl lg:text-4xl md:text-3xl text-white bottom-10 left-5 md:left-10 md:max-w-[50vw]"
          >
            Ağır yükleri hafifletir,
            <br /> güçlü makinelerle geleceği inşa ederiz!
          </h1>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section
        className="px-[75px] flex items-center justify-center h-[100vh] bg-gray-100"
        aria-labelledby="about-heading"
      >
        <div className="flex justify-center">
          <figure className="h-full hidden md:block">
            <img
              src="/images/jcb.jpg"
              alt="Yalova kepçe"
              className="object-cover rounded-l-3xl"
            />
          </figure>
          <div className="px-3 md:px-5 py-6 bg-white max-md:rounded-3xl md:rounded-r-3xl flex flex-col space-y-6 items-start justify-center">
            <h2 id="about-heading" className="text-3xl font-semibold">
              Biz Kimiz?
            </h2>
            <p className="text-md md:text-xl font-medium">
              Yalova ve Marmara Bölgesi'nde hafriyat, alt yapı, üst yapı ve
              yıkım işleriyle güvenilir hizmet sunuyoruz. İhtiyacınıza uygun
              kiralayabileceğiniz iş makineleri veya deneyimli ekibimizle,
              projelerinizi hızlı ve sorunsuz tamamlamanızı sağlıyoruz. Güçlü
              makinelerimiz ve tecrübemizle her türlü kazı, dolgu ve yıkım
              işinde yanınızdayız!
            </p>
            <Link
              href="/tr/hakkimizda"
              className="sariButton hover:scale-110 hover:drop-shadow-lg transition-all duration-300 flex gap-2 font-normal"
            >
              Bizi Daha Yakından Tanıyın <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section
        className="px-[75px] py-6 text-center"
        id="hizmetlerimiz"
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" className="text-3xl font-semibold mb-5">
          Hizmetlerimiz
        </h2>
        <OurServices />
        <ServicesCards />
      </section>
    </main>
  );
};

export default Page;
