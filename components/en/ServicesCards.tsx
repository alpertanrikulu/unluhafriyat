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
          href="/en/hizmetlerimiz/hafriyat-moloz-tasima"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/moloz.jpg"
              width={292}
              height={215}
              alt="Excavation and debris removal service"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-xl md:text-2xl font-semibold">
                Excavation & Debris Removal
              </h3>
            </figcaption>
          </figure>
        </Link>
      </article>

      {/* Kart 2 */}
      <article className="w-1/2 lg:w-1/3 h-fit">
        <Link
          href="/en/hizmetlerimiz/alt-yapi"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/altyapi.jpg"
              width={292}
              height={215}
              alt="Infrastructure service"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-xl md:text-2xl font-semibold">
                Infrastructure
              </h3>
            </figcaption>
          </figure>
        </Link>
      </article>

      {/* Kart 3 */}
      <article className="w-1/2 lg:w-1/3 h-fit">
        <Link
          href="/en/hizmetlerimiz/tesviye"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/tesviye.jpg"
              width={292}
              height={215}
              alt="Land leveling and grading service"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-xl md:text-2xl font-semibold">
                Land Leveling & Grading
              </h3>
            </figcaption>
          </figure>
        </Link>
      </article>

      {/* Kart 4 */}
      <article className="w-1/2 lg:w-1/3 h-fit">
        <Link
          href="/en/hizmetlerimiz/bina-yikim"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/yikim.jpg"
              width={292}
              height={215}
              alt="Building demolition service"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-xl md:text-2xl font-semibold">
                Building Demolition
              </h3>
            </figcaption>
          </figure>
        </Link>
      </article>

      {/* Kart 5 */}
      <article className="w-1/2 lg:w-1/3 h-fit">
        <Link
          href="/en/hizmetlerimiz/yol-yapim-parke"
          className="flex flex-col justify-center items-center gap-4 py-5 hover:scale-105 transition-all duration-300"
        >
          <figure className="flex flex-col items-center">
            <Image
              className="rounded-4xl"
              src="/images/yol.jpg"
              width={292}
              height={215}
              alt="Road construction and paving service"
            />
            <figcaption className="mt-2 text-center">
              <h3 className="text-xl md:text-2xl font-semibold">
                Road Construction & Paving
              </h3>
            </figcaption>
          </figure>
        </Link>
      </article>
    </div>
  );
};

export default ServicesCards;
