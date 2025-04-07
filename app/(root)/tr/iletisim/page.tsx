import GoogleMap from "@/components/GoogleMap";
import SendMail from "@/components/SendMail";
import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import metadata from "@/lib/metadata/tr/iletisim"; // SEO bilgisi burada

// SEO metadata'yı export ediyoruz
export { metadata };

const page = () => {
  return (
    <section className="py-20">
      <div className="bg-gray-200 py-8">
        <h2 className="text-4xl text-center font-semibold">Hizmetlerimiz</h2>
      </div>
      <div className="flex flex-wrap py-10 md:py-15 px-5 md:px-15">
        <div className="flex flex-col justify-center items-center px-5 py-5 gap-3 w-full md:w-1/3">
          <div className="flex flex-col items-center mb-5">
            <Phone size={36} />
            <p>
              <a href="tel:+05349355634" className="text-blue-600 md:text-xl">
                0534 935 5634
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center mb-5">
            <Image
              src="/whatsapp.svg"
              alt="whatsapp ikonu"
              width={36}
              height={36}
            />
            <p>
              <a
                href="https://wa.me/05349355634"
                className="text-green-600 md:text-xl"
              >
                WhatsApp
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center mb-5">
            <MapPin size={36} />
            <p className="text-center md:text-xl">
              Mahalle Yalova, Taşköprü Yeni, İzmit Yalova Yolu no:85, 77600
              Taşköprü/Çiftlikköy/Yalova
            </p>
          </div>
          <div className="flex gap-4 py-4">
            <div className="w-fit h-fit flex justify-center items-center rounded-full p-2 bg-gradient-to-tr from-blue-600 to-blue-800 text-white transition-all duration-300 hover:scale-150">
              <Facebook />
            </div>

            <div className="w-fit h-fit flex justify-center items-center rounded-full p-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition-all duration-300 hover:scale-150">
              <Link href="https://www.instagram.com/unlu_hafriyat_77/">
                <Instagram />
              </Link>
            </div>

            <div className="w-fit h-fit flex justify-center items-center rounded-full p-2 bg-gradient-to-tr from-sky-700 to-blue-900 text-white transition-all duration-300 hover:scale-150">
              <Linkedin />
            </div>

            <div className="w-fit h-fit flex justify-center items-center rounded-full p-2 bg-gradient-to-tr from-neutral-800 to-black transition-all duration-300 hover:scale-150">
              <Image
                src="/x.svg"
                alt="x icon"
                width={24}
                height={24}
                className="transition-all duration-300 invert brightness-200"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex justify-center md:justify-end">
          <div className="flex justify-center bg-gray-100 py-3 sm:py-10 px-3 sm:px-10 w-full sm:w-4/5 rounded-2xl ">
            <GoogleMap />
          </div>
        </div>
      </div>
      <div className="w-full px-5 md:px-15">
        <div className="flex flex-col justify-center items-center bg-gray-200 p-10 rounded-2xl">
          <h3 className="text-3xl text-center font-medium">Mesaj Gönder</h3>

          <SendMail />
        </div>
      </div>
    </section>
  );
};

export default page;
