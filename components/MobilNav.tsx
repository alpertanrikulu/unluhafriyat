import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobilNav = () => {
  return (
    <ul
      className="max-md:absolute max-md:top-[112px] max-md:left-[75px] max-md:z-10 max-md:p-10 max-md:bg-gray-100 max-md:rounded-2xl max-md:space-y-4 md:flex md:justify-end md:gap-2"
      style={{ width: "calc(100% - 150px)" }}
    >
      <li className="text-lg md:text-xl lg:text-2xl font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        <Link href="/tr">Ana Sayfa</Link>
      </li>
      <li className="text-lg md:text-xl lg:text-2xl font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        <Link href="/tr/hakkimizda">Hakkımızda</Link>
      </li>
      <li className="text-lg md:text-xl lg:text-2xl font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        <Link href="/tr/hizmetlerimiz">Hizmetlerimiz</Link>
      </li>
      <li className="text-lg md:text-xl lg:text-2xl font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        <Link href="/tr/galeri">Galeri</Link>
      </li>
      <li className="text-lg md:text-xl lg:text-2xl font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        <Link href="/tr/iletisim">İletişim</Link>
      </li>
      <li className="md:hidden">
        <div className="flex justify-around">
          <div className="ml-5 rounded-full p-2 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300 ">
            <Facebook />
          </div>
          <div className="rounded-full p-2 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300">
            <Link href="https://www.instagram.com/unlu_hafriyat_77/">
              <Instagram />
            </Link>
          </div>
          <div className="rounded-full p-2 hover:bg-gradient-to-tr hover:from-sky-700 hover:to-blue-900 hover:text-white transition-all duration-300">
            <Linkedin />
          </div>
          <div className="mr-5 group rounded-full p-2 hover:bg-gradient-to-tr hover:from-neutral-800 hover:to-black transition-all duration-300">
            <Image
              src="/x.svg"
              alt="x icon"
              width={24}
              height={24}
              className="transition-all duration-300 group-hover:invert group-hover:brightness-200"
            />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MobilNav;
