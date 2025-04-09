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
      aria-label="Our Services Mobile Slider"
    >
      <CarouselContent>
        {/* 1. Kart */}
        <CarouselItem className="min-w-full">
          <article>
            <Link
              href="/en/hizmetlerimiz/hafriyat-moloz-tasima"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/moloz.jpg"
                  width={292}
                  height={215}
                  alt="Excavation and debris removal service"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">
                    Excavation & Debris Removal
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
              href="/en/hizmetlerimiz/alt-yapi"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/altyapi.jpg"
                  width={292}
                  height={215}
                  alt="Infrastructure service"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">
                    Infrastructure
                  </h3>
                </figcaption>
              </figure>
            </Link>
          </article>
        </CarouselItem>

        {/* 3. Kart */}
        <CarouselItem className="min-w-full">
          <article>
            <Link
              href="/en/hizmetlerimiz/tesviye"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/tesviye.jpg"
                  width={292}
                  height={215}
                  alt="Land leveling and grading service"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">
                    Land Leveling & Grading
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
              href="/en/hizmetlerimiz/bina-yikim"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/yikim.jpg"
                  width={292}
                  height={215}
                  alt="Building demolition service"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">
                    Building Demolition
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
              href="/en/hizmetlerimiz/yol-yapim-parke"
              className="flex flex-col justify-center items-center gap-4 py-5"
            >
              <figure>
                <Image
                  className="rounded-4xl"
                  src="/images/yol.jpg"
                  width={292}
                  height={215}
                  alt="Road construction and paving service"
                />
                <figcaption className="mt-2">
                  <h3 className="text-xl font-semibold text-center">
                    Road Construction & Paving
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
