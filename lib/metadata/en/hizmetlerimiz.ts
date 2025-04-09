import type { Metadata } from "next";

const hizmetlerimizMetadata: Metadata = {
  title: "Hizmetlerimiz | Ünlü Hafriyat Yalova",
  description:
    "Ünlü Hafriyat olarak altyapı, bina yıkım, hafriyat - moloz taşıma, arazi düzeltme, tesviye ve yol yapım alanlarında profesyonel hizmet sunuyoruz.",
  keywords: [
    "yalova hafriyat",
    "bursa hafriyat",
    "orhangazi hafriyat",
    "izmit hafriyat",
    "moloz taşıma",
    "bina yıkımı",
    "alt yapı çalışmaları",
    "tesviye",
    "yol yapım",
    "parke taşı döşeme",
    "inşaat hizmetleri",
    "hafriyat firması",
    "ekskavatör",
    "kamyon",
  ],
  alternates: {
    canonical: "https://www.orneksite.com/tr/hizmetlerimiz", // kendi domain adresinle değiştir
  },
  openGraph: {
    title: "Hizmetlerimiz | Ünlü Hafriyat Yalova",
    description:
      "Yalova Ünlü Hafriyat: Alt yapı, bina yıkım, hafriyat ve moloz taşıma gibi profesyonel hizmetleri keşfedin.",
    url: "https://www.orneksite.com/tr/hizmetlerimiz",
    siteName: "Yalova Ünlü Hafriyat",
    images: [
      {
        url: "https://www.orneksite.com/images/moloz.jpg", // Sosyal paylaşım görseli
        width: 1200,
        height: 630,
        alt: "Ünlü Hafriyat Yalova Hizmetlerimiz",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hizmetlerimiz | Ünlü Hafriyat Yalova",
    description:
      "Alt yapı, yıkım, hafriyat taşıma, tesviye ve daha fazlası için profesyonel çözümler.",
    images: ["https://www.orneksite.com/images/moloz.jpg"],
  },
};

export default hizmetlerimizMetadata;
