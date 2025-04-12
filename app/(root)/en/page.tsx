import OurServices from "@/components/en/OurServices";
import ServicesCards from "@/components/en/ServicesCards";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { metadata } from "@/lib/metadata/en/anasayfa";
import Image from "next/image";

export { metadata };

const Page = () => {
  return (
    <main>
      {/* Hero Alanı */}
      <section
        aria-labelledby="hero-heading"
        className="relative bg-[url('/unluimages/yan-santiye.jpeg')] bg-cover bg-center"
        style={{ height: "calc(100vh - 112px)" }}
      >
        <div className="absolute w-full h-full bg-gradient-to-tr from-black/90 via-black/10 to-black/0">
          <div className="flex justify-end">
            <div className="space-y-3 mt-5 mr-7">
              <Link
                className="bg-amber-300 hover:bg-amber-200 transition-all hover:scale-105 duration-300 flex px-5 py-3 text-lg md:text-xl font-medium rounded-2xl hover:shadow-lg gap-2"
                href="/tr/iletisim"
              >
                Leave a Message <ChevronRight />
              </Link>
              <Link
                className="bg-amber-300 hover:bg-amber-200 transition-all hover:scale-105 duration-300 flex px-5 py-3 text-lg md:text-xl font-medium rounded-2xl hover:shadow-lg gap-2"
                href="https://maps.app.goo.gl/3gKmi2D1PPgxZv8a6"
              >
                Show in Map <ChevronRight />
              </Link>
            </div>
          </div>
          <h1
            id="hero-heading"
            className="absolute text-white text-3xl sm:text-4xl lg:text-5xl font-black bottom-15 left-10 md:left-15 md:max-w-[55vw] leading-relaxed"
          >
            We lighten heavy loads &
            <br /> build the future with powerful machines!
          </h1>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section
        className="px-[75px] py-10 flex items-center justify-center min-h-[100vh] bg-gray-100"
        aria-labelledby="about-heading"
      >
        <div className="rounded-3xl overflow-hidden">
          <div className="flex flex-wrap justify-center bg-white">
            <figure className="w-full lg:w-2/5 flex items-center">
              <Image
                src="/images/jcb.jpg"
                alt="Yalova kepçe"
                className="object-cover rounded-l-3xl"
                width={4032}
                height={2268}
              />
            </figure>
            <div className="w-full lg:w-3/5 px-3 md:px-5 py-6 max-md:rounded-3xl md:rounded-r-3xl flex flex-col space-y-6 items-start justify-center">
              <h2 id="about-heading" className="text-3xl font-semibold">
                Who Are We?
              </h2>
              <p className="text-md md:text-xl font-medium">
                We offer reliable services in excavation, infrastructure,
                superstructure, and demolition across Yalova and the Marmara
                Region. Whether you need to rent suitable construction machinery
                or get support from our experienced team, we ensure your
                projects are completed quickly and smoothly. With our powerful
                machines and expertise, we are here for all types of excavation,
                filling, and demolition work!
              </p>
              <Link
                href="/tr/hakkimizda"
                className="sariButton hover:scale-110 hover:drop-shadow-lg transition-all duration-300 flex gap-2 font-normal"
              >
                Get to Know Us Better <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section
        className="px-[75px] py-6 text-center"
        id="hizmetlerimiz"
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" className="text-4xl font-bold mt-6 mb-10">
          Our Services
        </h2>
        <OurServices />
        <ServicesCards />
      </section>
    </main>
  );
};

export default Page;
