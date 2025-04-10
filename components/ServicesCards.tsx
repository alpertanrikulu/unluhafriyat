import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesCards = () => {
  return (
    <div
      className="flex flex-wrap justify-center max-md:hidden lg:min-h-[90vh]"
      aria-label="Hizmet kartları masaüstü görünümü"
    >
      {/* Kart 1 */}
      <article className="w-1/2 lg:w-1/3 h-fit">
        <Link
          href="/tr/hizmetlerimiz/hafriyat-moloz-tasima"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/moloz.jpg"
              width={292}
              height={215}
              alt="Hafriyat ve moloz taşıma hizmeti"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-2xl lg:text-3xl font-semibold">
                Hafriyat - Moloz Taşıma
              </h3>
            </figcaption>
          </figure>
        </Link>
      </article>

      {/* Kart 2 */}
      <article className="w-1/2 lg:w-1/3 h-fit">
        <Link
          href="/tr/hizmetlerimiz/alt-yapi"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/altyapi.jpg"
              width={292}
              height={215}
              alt="Altyapı çalışmaları hizmeti"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-2xl lg:text-3xl font-semibold">Altyapı</h3>
            </figcaption>
          </figure>
        </Link>
      </article>

      {/* Kart 3 */}
      <article className="w-1/2 lg:w-1/3 h-fit">
        <Link
          href="/tr/hizmetlerimiz/tesviye"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/tesviye.jpg"
              width={292}
              height={215}
              alt="Arazi düzeltme ve tesviye hizmeti"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-2xl lg:text-3xl font-semibold">
                Arazi Düzeltme ve Tesviye
              </h3>
            </figcaption>
          </figure>
        </Link>
      </article>

      {/* Kart 4 */}
      <article className="w-1/2 lg:w-1/3 h-fit">
        <Link
          href="/tr/hizmetlerimiz/bina-yikim"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/yikim.jpg"
              width={292}
              height={215}
              alt="Bina yıkım hizmeti"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-2xl lg:text-3xl font-semibold">Bina Yıkım</h3>
            </figcaption>
          </figure>
        </Link>
      </article>

      {/* Kart 5 */}
      <article className="w-1/2 lg:w-1/3 h-fit">
        <Link
          href="/tr/hizmetlerimiz/yol-yapim-parke"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/yol.jpg"
              width={292}
              height={215}
              alt="Yol yapım ve parke döşeme hizmeti"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-2xl lg:text-3xl font-semibold">
                Yol Yapım - Parke Döşeme
              </h3>
            </figcaption>
          </figure>
        </Link>
      </article>
    </div>
  );
};

export default ServicesCards;
