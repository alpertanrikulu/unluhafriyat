import type { Metadata } from "next";

const hizmetlerimizMetadata: Metadata = {
  title: "Ünlü Hafriyat Yalova | Ünlü Hafriyat & Yıkım Hizmetleri",
  description:
    "Ünlü Hafriyat olarak altyapı, bina yıkım, hafriyat - moloz taşıma, arazi düzeltme, tesviye ve yol yapım alanlarında profesyonel hizmet sunuyoruz.",
  keywords: [
    "Yalova Hafriyat",
    "Yalova Kepçe",
    "Yalova Ekskavatör",
    "Yalova Bina Yıkım",
    "Yalova Kamyon",
    "Orhangazi Hafriyat",
    "Orhangazi Kepçe",
    "Orhangazi Ekskavatör",
    "Orhangazi Kamyon",
    "Orhangazi Bina Yıkım",
    "İzmit Hafriyat",
    "İzmit Kepçe",
    "İzmit Ekskavatör",
    "İzmit Kamyon",
    "İzmit Bina Yıkım",
    "Yalova İş Makinesi Kiralama",
    "Alt yapı çalışmaları",
    "Kazı dolgu işleri",
    "Ünlü Hafriyat Yalova",
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
