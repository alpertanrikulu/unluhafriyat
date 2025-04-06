import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesCards = () => {
  return (
    <div className="flex flex-wrap justify-center max-md:hidden items-center  lg:min-h-[90vh]">
      <div className="w-1/2 lg:w-1/3">
        <Link
          href="/tr/hizmetlerimiz/hafriyat-moloz-tasima"
          className="flex flex-col justify-center items-center gap-4 py-5"
        >
          <Image
            className="rounded-4xl"
            src="/images/moloz.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-2xl lg:3xl font-semibold">
            Hafriyat - Moloz Taşıma
          </h4>
        </Link>
      </div>
      <div className="w-1/2 lg:w-1/3">
        <Link
          href="/tr/hizmetlerimiz/alt-yapi"
          className="flex flex-col justify-center items-center gap-4 py-5"
        >
          <Image
            className="rounded-4xl"
            src="/images/altyapi.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-2xl lg:3xl font-semibold">Altyapı</h4>
        </Link>
      </div>
      <div className="w-1/2 lg:w-1/3">
        <Link
          href="/tr/hizmetlerimiz/tesviye"
          className="flex flex-col justify-center items-center gap-4 py-5"
        >
          <Image
            className="rounded-4xl"
            src="/images/tesviye.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-2xl lg:3xl font-semibold">
            Arazi Düzeltme ve Tesviye
          </h4>
        </Link>
      </div>
      <div className="w-1/2 lg:w-1/3">
        <Link
          href="/tr/hizmetlerimiz/bina-yikim"
          className="flex flex-col justify-center items-center gap-4 py-5"
        >
          <Image
            className="rounded-4xl"
            src="/images/yikim.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-2xl lg:3xl font-semibold">Bina Yıkım</h4>
        </Link>
      </div>
      <div className="w-1/2 lg:w-1/3">
        <Link
          href="/tr/hizmetlerimiz/yol-yapim-parke"
          className="flex flex-col justify-center items-center gap-4 py-5"
        >
          <Image
            className="rounded-4xl"
            src="/images/yol.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-2xl lg:3xl font-semibold">
            Yol Yapım - Parke Döşeme
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCards;
