import OurServices from "@/components/en/OurServices";
import ServicesCards from "@/components/en/ServicesCards";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { metadata } from "@/lib/metadata/en/anasayfa";

export { metadata };

const Page = () => {
  return (
    <main>
      {/* Hero Alanı */}
      <section
        aria-labelledby="hero-heading"
        className="relative bg-[url('/kepce-bg.jpg')] bg-cover bg-center"
        style={{ height: "calc(100vh - 112px)" }}
      >
        <div className="absolute w-full h-full bg-gradient-to-tr from-black/70 via-black/10 to-black/0">
          <div className="flex justify-end">
            <div className="space-y-3 mt-5 mr-7">
              <Link
                className="sariButton hover:bg-amber-200"
                href="/tr/iletisim"
              >
                Leave a Message <ChevronRight />
              </Link>
              <Link className="sariButton hover:bg-amber-200" href="#">
                Our Construction Site <ChevronRight />
              </Link>
            </div>
          </div>
          <h1
            id="hero-heading"
            className="absolute font-medium text-2xl lg:text-4xl md:text-3xl text-white bottom-10 left-5 md:left-10 md:max-w-[50vw]"
          >
            We lighten heavy loads &<br /> build the future with powerful
            machines!
          </h1>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section
        className="px-[75px] flex items-center justify-center h-[100vh] bg-gray-100"
        aria-labelledby="about-heading"
      >
        <div className="flex justify-center">
          <figure className="h-full hidden md:block">
            <img
              src="/images/jcb.jpg"
              alt="Yalova kepçe"
              className="object-cover rounded-l-3xl"
            />
          </figure>
          <div className="px-3 md:px-5 py-6 bg-white max-md:rounded-3xl md:rounded-r-3xl flex flex-col space-y-6 items-start justify-center">
            <h2 id="about-heading" className="text-3xl font-semibold">
              Who Are We?
            </h2>
            <p className="text-md md:text-xl font-medium">
              We offer reliable services in excavation, infrastructure,
              superstructure, and demolition across Yalova and the Marmara
              Region. Whether you need to rent suitable construction machinery
              or get support from our experienced team, we ensure your projects
              are completed quickly and smoothly. With our powerful machines and
              expertise, we are here for all types of excavation, filling, and
              demolition work!
            </p>
            <Link
              href="/tr/hakkimizda"
              className="sariButton hover:scale-110 hover:drop-shadow-lg transition-all duration-300 flex gap-2 font-normal"
            >
              Get to Know Us Better <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section
        className="px-[75px] py-6 text-center"
        id="hizmetlerimiz"
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" className="text-3xl font-semibold mb-5">
          Our Services
        </h2>
        <OurServices />
        <ServicesCards />
      </section>
    </main>
  );
};

export default Page;
