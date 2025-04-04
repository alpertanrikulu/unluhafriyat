import Image from "next/image";
import React from "react";

const ServicesCards = () => {
  return (
    <div className="flex flex-wrap justify-center max-md:hidden">
      <div className="w-1/2 lg:w-1/3">
        <div className="flex flex-col justify-center items-center gap-4 py-5">
          <Image
            className="rounded-4xl"
            src="/images/moloz.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-lg font-medium">Hafriyat - Moloz Taşıma</h4>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/3">
        <div className="flex flex-col justify-center items-center gap-4 py-5">
          <Image
            className="rounded-4xl"
            src="/images/altyapi.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-lg font-medium">Altyapı</h4>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/3">
        <div className="flex flex-col justify-center items-center gap-4 py-5">
          <Image
            className="rounded-4xl"
            src="/images/tesviye.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-lg font-medium">Arazi Düzeltme ve Tesviye</h4>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/3">
        <div className="flex flex-col justify-center items-center gap-4 py-5">
          <Image
            className="rounded-4xl"
            src="/images/yikim.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-lg font-medium">Bina Yıkım</h4>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/3">
        <div className="flex flex-col justify-center items-center gap-4 py-5">
          <Image
            className="rounded-4xl"
            src="/images/yol.jpg"
            width={292}
            height={215}
            alt="yalova kepçe"
          />
          <h4 className="text-lg font-medium">Yol Yapım - Parke Döşeme</h4>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
