import {
  AtSign,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPinHouse,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-7 min-h-[40vh] flex flex-col justify-center">
      <div className="flex justify-center max-md:items-center flex-col md:flex-row md:justify-around gap-7">
        <div className="max-md:w-[85px] max-md:h-[46px] min-w-[85px] min-h-[46px] space-y-5">
          <Image
            src="/logo.svg"
            alt="Yalova ünlü hafriyat"
            width={151}
            height={80}
          />
          <div className="flex flex-col gap-5 max-md:hidden">
            <div className="flex justify-between">
              <div className="rounded-full p-2 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300 ">
                <Facebook />
              </div>
              <div className="rounded-full p-2 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300">
                <Link href="https://www.instagram.com/unlu_hafriyat_77/">
                  <Instagram />
                </Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="rounded-full p-2 hover:bg-gradient-to-tr hover:from-sky-700 hover:to-blue-900 hover:text-white transition-all duration-300">
                <Linkedin />
              </div>
              <div className="group rounded-full p-2 hover:bg-gradient-to-tr hover:from-neutral-800 hover:to-black transition-all duration-300">
                <Image
                  src="/x.svg"
                  alt="x icon"
                  width={24}
                  height={24}
                  className="transition-all duration-300 group-hover:invert group-hover:brightness-200"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-xl  max-md:text-center">
            Hızlı Menü
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex">
              <ChevronRight />
              <Link className="hover:underline text-md font-normal" href="/">
                Ana Sayfa
              </Link>
            </li>
            <li className="flex">
              <ChevronRight />
              <Link
                className="hover:underline text-md font-normal"
                href="/tr/hakkimizda"
              >
                Hakkımızda
              </Link>
            </li>
            <li className="flex">
              <ChevronRight />
              <Link
                className="hover:underline text-md font-normal"
                href="/tr/hizmetlerimiz"
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li className="flex">
              <ChevronRight />
              <Link
                className="hover:underline text-md font-normal"
                href="/tr/galeri"
              >
                Galeri
              </Link>
            </li>
            <li className="flex">
              <ChevronRight />
              <Link
                className="hover:underline text-md font-normal"
                href="/tr/iletisim"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-center md:hidden">
          <h4 className="font-medium text-xl">Sosyal Medya</h4>
          <div className="flex gap-1 justify-start items-center">
            <Facebook />
            <p className="text-md font-normal">sefa.f.unlu</p>
          </div>
          <div className="flex gap-1 justify-start items-center">
            <Instagram />
            <p className="text-md font-normal">@unlu_hafriyat_77</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start justify-center md:justify-start md:items-start">
          <h4 className="font-medium text-xl max-md:text-center">
            <Link href="/tr/iletisim">İletişim</Link>
          </h4>
          <div className="flex gap-1 justify-center md:justify-start items-start">
            <MapPinHouse />
            <a
              href="https://maps.app.goo.gl/3gKmi2D1PPgxZv8a6"
              className="text-md font-normal max-w-[22vw] no-underline"
            >
              Mahalle Yalova, Taşköprü Yeni, İzmit Yalova Yolu no:85, 77600
              Taşköprü/Çiftlikköy/Yalova
            </a>
          </div>
          <div className="flex gap-1 justify-center md:justify-start items-center">
            <Phone />
            <a
              href="tel:05349355634"
              className="no-underline text-md font-normal"
            >
              0534 935 5634
            </a>
          </div>
          <div className="flex gap-1 justify-center md:justify-start items-center">
            <AtSign />
            <a
              href="mailto:unluhafriyatyikim@gmail.com"
              className="no-underline text-md font-normal"
            >
              unluhafriyatyikim@gmail.com
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm font-light text-center md:text-end mt-10 md:mt-15">
        © 2025 Tüm Hakları Saklıdır UnluHafriyat
      </p>
    </footer>
  );
};

export default Footer;
