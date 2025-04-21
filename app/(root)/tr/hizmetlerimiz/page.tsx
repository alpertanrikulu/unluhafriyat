import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import metadata from "@/lib/metadata/tr/hizmetlerimiz";
import { serviceAlbums } from "@/lib/albums";

export { metadata };

const page = () => {
  return (
    <main>
      {/* Sayfa başlığı */}
      <header className="bg-gray-200 py-8 text-center">
        <h1 className="text-4xl font-bold">Hizmetlerimiz</h1>
      </header>

      {/* İçindekiler navigasyonu */}
      <nav aria-label="İçindekiler" className="text-center mt-4 md:hidden">
        <h2 className="text-xl font-medium mb-2">İçindekiler</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {[
            {
              href: "#hafriyat-moloz-tasima",
              label: "Hafriyat - Moloz Taşıma",
            },
            { href: "#alt-yapi", label: "Alt Yapı Çalışmaları" },
            { href: "#cevreduzenleme", label: "Çevre Düzenleme" },
            { href: "#bina-yikim", label: "Bina Yıkım" },
            { href: "#yol-yapim-parke", label: "Yol Yapım - Parke Döşeme" },
          ].map((item) => (
            <li
              key={item.href}
              className="bg-gray-100 rounded-2xl hover:scale-105 hover:bg-amber-300 hover:text-white px-3 py-1"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hizmetler bölümü */}
      <section
        aria-labelledby="hizmetlerimiz-baslik"
        className="flex flex-wrap justify-center md:px-[30px] lg:px-[100px] py-8"
      >
        {serviceAlbums.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center my-6 scroll-mt-72"
          >
            <Image
              className="rounded-t-2xl"
              src={service.img}
              alt={service.alt}
              width={350}
              height={215}
            />
            <div className="bg-gray-100 max-w-[350px] p-5 h-full flex flex-col justify-between rounded-b-2xl">
              <div>
                <h3 className="font-semibold text-2xl py-4 hover:text-amber-400">
                  {service.title}
                </h3>
                <p className="text-lg">{service.description}</p>
              </div>
              <div className="flex justify-center items-center mt-3 transition-transform duration-300 hover:scale-105">
                <Link href={service.href} className="sariButton gap-1">
                  İş Örneklerimiz <ArrowRight />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default page;
