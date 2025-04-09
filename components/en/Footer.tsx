import {
  AtSign,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-200 p-7 min-h-[40vh] flex flex-col justify-center"
      aria-label="Site Altbilgisi"
    >
      <div className="flex justify-center max-md:items-center flex-col md:flex-row md:justify-around gap-7">
        {/* Logo ve Sosyal Medya */}
        <div className="max-md:w-[85px] max-md:h-[46px] min-w-[85px] min-h-[46px] space-y-5">
          <Link href="/" aria-label="Anasayfa">
            <Image
              src="/logo.svg"
              alt="Yalova Ünlü Hafriyat logo"
              width={151}
              height={80}
            />
          </Link>
          <div className="flex flex-col gap-5 max-md:hidden py-3">
            <ul className="flex justify-between">
              <li>
                <Link href="#" aria-label="Facebook">
                  <div className="rounded-full p-2 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300">
                    <Facebook />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/unlu_hafriyat_77/"
                  aria-label="Instagram"
                >
                  <div className="rounded-full p-2 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300">
                    <Instagram />
                  </div>
                </Link>
              </li>
            </ul>
            <ul className="flex justify-between">
              <li>
                <Link href="#" aria-label="LinkedIn">
                  <div className="rounded-full p-2 hover:bg-gradient-to-tr hover:from-sky-700 hover:to-blue-900 hover:text-white transition-all duration-300">
                    <Linkedin />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="X (Twitter)">
                  <div className="group rounded-full p-2 hover:bg-gradient-to-tr hover:from-neutral-800 hover:to-black transition-all duration-300">
                    <Image
                      src="/x.svg"
                      alt="X sosyal medya ikonu"
                      width={24}
                      height={24}
                      className="transition-all duration-300 group-hover:invert group-hover:brightness-200"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Hızlı Menü */}
        <nav aria-label="Hızlı Menü" className="flex flex-col gap-3">
          <h4 className="font-medium text-xl max-md:text-center">Hızlı Menü</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1">
              <ChevronRight />
              <Link className="hover:underline text-md font-normal" href="/">
                Ana Sayfa
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight />
              <Link
                className="hover:underline text-md font-normal"
                href="/tr/hakkimizda"
              >
                Hakkımızda
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight />
              <Link
                className="hover:underline text-md font-normal"
                href="/tr/hizmetlerimiz"
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight />
              <Link
                className="hover:underline text-md font-normal"
                href="/tr/galeri"
              >
                Galeri
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight />
              <Link
                className="hover:underline text-md font-normal"
                href="/tr/iletisim"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobil Sosyal Medya */}
        <section
          aria-label="Sosyal Medya"
          className="flex flex-col gap-3 text-center md:hidden"
        >
          <h4 className="font-medium text-xl">Sosyal Medya</h4>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-1 items-center justify-center">
              <Facebook />
              <span>@unlu_hafriyat_77</span>
            </li>
            <li className="flex gap-1 items-center justify-center">
              <Instagram />
              <span>@unlu_hafriyat_77</span>
            </li>
            <li className="flex gap-1 items-center justify-center">
              <Linkedin />
              <span>@unlu_hafriyat_77</span>
            </li>
            <li className="flex gap-1 items-center justify-center">
              <Image src="/x.svg" alt="X sosyal medya" width={24} height={24} />
              <span>@unlu_hafriyat_77</span>
            </li>
          </ul>
        </section>

        {/* İletişim */}
        <section
          aria-label="İletişim Bilgileri"
          className="flex flex-col gap-4 text-center md:text-start justify-center md:items-start"
        >
          <h4 className="font-medium text-xl max-md:text-center">
            <Link href="/tr/iletisim">İletişim</Link>
          </h4>
          <address className="not-italic flex flex-col gap-2 text-md font-normal">
            <div className="flex items-start gap-1 justify-center md:justify-start">
              <MapPin />
              <a
                href="https://maps.app.goo.gl/3gKmi2D1PPgxZv8a6"
                className="no-underline max-w-[22vw]"
              >
                Mahalle Yalova, Taşköprü Yeni, İzmit Yalova Yolu no:85, 77600
                Taşköprü/Çiftlikköy/Yalova
              </a>
            </div>
            <div className="flex gap-1 items-center justify-center md:justify-start">
              <Phone />
              <a href="tel:05349355634" className="no-underline">
                0534 935 5634
              </a>
            </div>
            <div className="flex gap-1 items-center justify-center md:justify-start">
              <AtSign />
              <a
                href="mailto:unluhafriyatyikim@gmail.com"
                className="no-underline"
              >
                unluhafriyatyikim@gmail.com
              </a>
            </div>
          </address>
        </section>
      </div>

      <small className="text-sm font-light text-center md:text-end mt-10 md:mt-15 block">
        © 2025 Tüm Hakları Saklıdır – UnluHafriyat
      </small>
    </footer>
  );
};

export default Footer;
