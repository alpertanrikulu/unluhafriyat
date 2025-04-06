"use client";
import { useEffect, useState } from "react";

const HizmetBanner = ({
  hizmet,
  images,
}: {
  hizmet: string;
  images: string[];
}) => {
  const [sayi, setSayi] = useState<number>(0);
  useEffect(() => {
    setInterval(() => {
      setSayi((e: number): number => {
        if (e + 1 === images.length) {
          return 0;
        } else {
          return e + 1;
        }
      });
    }, 5000);
  }, []);
  return (
    <section className="relative w-full h-[40vh] overflow-hidden">
      <div
        className="absolute bg-center bg-cover inset-0 transition-discrete duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[sayi]})`,
        }}
      >
        <div className="bg-gradient-to-tr from-black/70 via-black/10 to-transparent w-full h-full"></div>
      </div>
      <p className="absolute bottom-7 left-10 text-amber-300 text-3xl sm:text-4xl lg:text-5xl font-black">
        {hizmet}
      </p>
    </section>
  );
};

export default HizmetBanner;
