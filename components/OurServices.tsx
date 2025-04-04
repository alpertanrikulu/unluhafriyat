import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const OurServices = () => {
  return (
    <Carousel className="w-full max-w-2xl mx-auto md:hidden">
      <CarouselContent>
        <CarouselItem className="min-w-full">
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
        </CarouselItem>
        <CarouselItem className="min-w-full">
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
        </CarouselItem>
        <CarouselItem className="min-w-full">
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
        </CarouselItem>
        <CarouselItem className="min-w-full">
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
        </CarouselItem>
        <CarouselItem className="min-w-full">
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
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default OurServices;
