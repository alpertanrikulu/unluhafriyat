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
    <Carousel
      className="w-full max-w-2xl mx-auto md:hidden"
      aria-label="Hizmetlerimiz mobil kaydırıcı"
    >
      <CarouselContent>
        {/* 1. Kart */}
        <CarouselItem className="min-w-full">
          <article>
            <Link
              href="/tr/hizmetlerimiz/hafriyat-moloz-tasima"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/moloz.jpg"
                  width={292}
                  height={215}
                  alt="Hafriyat ve moloz taşıma hizmeti"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">
                    Hafriyat - Moloz Taşıma
                  </h3>
                </figcaption>
              </figure>
            </Link>
          </article>
        </CarouselItem>

        {/* 2. Kart */}
        <CarouselItem className="min-w-full">
          <article>
            <Link
              href="/tr/hizmetlerimiz/alt-yapi"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/altyapi.jpg"
                  width={292}
                  height={215}
                  alt="Altyapı hizmeti"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">Altyapı</h3>
                </figcaption>
              </figure>
            </Link>
          </article>
        </CarouselItem>

        {/* 3. Kart */}
        <CarouselItem className="min-w-full">
          <article>
            <Link
              href="/tr/hizmetlerimiz/tesviye"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/tesviye.jpg"
                  width={292}
                  height={215}
                  alt="Arazi düzeltme ve tesviye hizmeti"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">
                    Arazi Düzeltme ve Tesviye
                  </h3>
                </figcaption>
              </figure>
            </Link>
          </article>
        </CarouselItem>

        {/* 4. Kart */}
        <CarouselItem className="min-w-full">
          <article>
            <Link
              href="/tr/hizmetlerimiz/bina-yikim"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/yikim.jpg"
                  width={292}
                  height={215}
                  alt="Bina yıkım hizmeti"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">
                    Bina Yıkım
                  </h3>
                </figcaption>
              </figure>
            </Link>
          </article>
        </CarouselItem>

        {/* 5. Kart */}
        <CarouselItem className="min-w-full">
          <article>
            <Link
              href="/tr/hizmetlerimiz/yol-yapim-parke"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/yol.jpg"
                  width={292}
                  height={215}
                  alt="Yol yapımı ve parke döşeme hizmeti"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">
                    Yol Yapım - Parke Döşeme
                  </h3>
                </figcaption>
              </figure>
            </Link>
          </article>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default OurServices;
