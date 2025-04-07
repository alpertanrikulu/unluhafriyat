import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="bg-gray-200 py-8">
        <h2 className="text-4xl text-center">Hizmetlerimiz</h2>
      </div>
      <div className="flex flex-wrap justify-center md:px-[30px] lg:px-[100px] py-8">
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center my-6">
          <Image
            className="rounded-t-2xl"
            src="/images/moloz.jpg"
            alt="Yalova ünlü hafriyat"
            width={350}
            height={215}
          />
          <div className="bg-gray-100 max-w-[350px] p-5 h-full flex flex-col justify-between rounded-b-2xl">
            <div>
              <h3 className="font-semibold text-2xl py-4 hover:text-amber-400">
                Hafriyat - Moloz Taşıma
              </h3>
              <p className="text-lg">
                İnşaat, tadilat veya yıkım süreçlerinde ortaya çıkan atıkların
                taşınması ve ortamın temizlenmesi için profesyonel moloz taşıma
                hizmeti sunuyoruz. Alanında deneyimli ekibimiz ve modern
                ekipmanlarımızla, hızlı, güvenli ve çevreye duyarlı çözümler
                sağlıyoruz. Projenizin sorunsuz ilerlemesi için yükünüzü
                hafifletiyor, temiz bir çalışma alanı oluşturuyoruz.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3 transition-transform duration-300 hover:scale-105">
              <Link
                href="/tr/hizmetlerimiz/hafriyat-moloz-tasima"
                className="sariButton gap-1"
              >
                İş Örneklerimiz <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center my-6">
          <Image
            className="rounded-t-2xl"
            src="/images/altyapi.jpg"
            alt="Yalova ünlü hafriyat"
            width={350}
            height={215}
          />
          <div className="bg-gray-100 max-w-[350px] p-5 h-full flex flex-col justify-between rounded-b-2xl">
            <div>
              <h3 className="font-semibold text-2xl py-4 hover:text-amber-400">
                Alt Yapı Çalışmaları
              </h3>
              <p className="text-lg">
                Firmamız, altyapı projelerinde deneyimli kadrosu ve modern
                ekipmanlarıyla, kaliteli ve güvenilir çözümler sunmaktadır.
                Kanalizasyon sistemleri, su hatları ve doğalgaz hatlarının
                döşenmesi gibi altyapı işlerinde, projelerin ihtiyaçlarına özel
                çözümleri üretiyoruz. Tüm süreçlerde uzun ömürlü ve güvenli
                uygulamalarla hizmet veriyor, kamu ve özel sektör projelerinde
                yüksek memnuniyet sağlıyoruz.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3 transition-transform duration-300 hover:scale-105">
              <Link
                href="/tr/hizmetlerimiz/alt-yapi"
                className="sariButton gap-1"
              >
                İş Örneklerimiz <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center my-6">
          <Image
            className="rounded-t-2xl"
            src="/images/tesviye.jpg"
            alt="Yalova ünlü hafriyat"
            width={350}
            height={215}
          />
          <div className="bg-gray-100 max-w-[350px] p-5 h-full flex flex-col justify-between rounded-b-2xl">
            <div>
              <h3 className="font-semibold text-2xl py-4 hover:text-amber-400">
                Arazi Düzeltme ve Tesviye
              </h3>
              <p className="text-lg">
                İnşaat öncesi hazırlıkların en önemli adımlarından biri olan
                tesviye işlemlerini, hassasiyetle ve profesyonelce
                gerçekleştiriyoruz. Zeminin projeye uygun hale getirilmesi için
                gerekli tüm düzenlemeleri modern ekipmanlarımızla yapıyoruz.
                Sağlam bir temel, doğru şekilde hazırlanmış bir zeminle başlar.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3 transition-transform duration-300 hover:scale-105">
              <Link
                href="/tr/hizmetlerimiz/tesviye"
                className="sariButton gap-1"
              >
                İş Örneklerimiz <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center my-6">
          <Image
            className="rounded-t-2xl"
            src="/images/yikim.jpg"
            alt="Yalova ünlü hafriyat"
            width={350}
            height={215}
          />
          <div className="bg-gray-100 max-w-[350px] p-5 h-full flex flex-col justify-between rounded-b-2xl">
            <div>
              <h3 className="font-semibold text-2xl py-4 hover:text-amber-400">
                Bina Yıkım
              </h3>
              <p className="text-lg">
                Yıkım süreci, titizlik ve uzmanlık gerektiren bir iştir.
                Firmamız, küçük ölçekli yapılardan büyük endüstriyel binalara
                kadar her türlü yıkımı, güvenli ve planlı bir şekilde
                gerçekleştirir. Alanın yeniden kullanıma hazır hale gelmesi için
                gerekli tüm işlemleri eksiksiz olarak yürütürüz.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3 transition-transform duration-300 hover:scale-105">
              <Link
                href="/tr/hizmetlerimiz/bina-yikim"
                className="sariButton gap-1"
              >
                İş Örneklerimiz <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center my-6">
          <Image
            className="rounded-t-2xl"
            src="/images/yol.jpg"
            alt="Yalova ünlü hafriyat"
            width={350}
            height={215}
          />
          <div className="bg-gray-100 max-w-[350px] p-5 h-full flex flex-col justify-between rounded-b-2xl">
            <div>
              <h3 className="font-semibold text-2xl py-4 hover:text-amber-400">
                Yol Yapım - Parke Döşeme
              </h3>
              <p className="text-lg">
                Firmamız, yol açma çalışmaları ve parke taşı döşeme alanında
                güvenilir ve pratik çözümler sunar. Ekipmanlarımız ve deneyimli
                kadromuzla, her türlü zemine uygun, uzun ömürlü uygulamalar
                gerçekleştiriyoruz. Ulaşım yollarının düzenlenmesi ve çevre
                düzenleme projelerinde yanınızdayız.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3 transition-transform duration-300 hover:scale-105">
              <Link
                href="/tr/hizmetlerimiz/yol-yapim-parke"
                className="sariButton gap-1"
              >
                İş Örneklerimiz <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
