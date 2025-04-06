import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  return (
    <Carousel className="w-full max-w-2xl mx-auto md:hidden">
      <CarouselContent>
        <CarouselItem className="min-w-full">
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
            <h4 className="text-xl font-semibold">Hafriyat - Moloz Taşıma</h4>
          </Link>
        </CarouselItem>
        <CarouselItem className="min-w-full">
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
            <h4 className="text-xl font-semibold">Altyapı</h4>
          </Link>
        </CarouselItem>
        <CarouselItem className="min-w-full">
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
            <h4 className="text-xl font-semibold">Arazi Düzeltme ve Tesviye</h4>
          </Link>
        </CarouselItem>
        <CarouselItem className="min-w-full">
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
            <h4 className="text-xl font-semibold">Bina Yıkım</h4>
          </Link>
        </CarouselItem>
        <CarouselItem className="min-w-full">
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
            <h4 className="text-xl font-semibold">Yol Yapım - Parke Döşeme</h4>
          </Link>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default OurServices;
