import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Ünlü Hafriyat Yalova | Ünlü Hafriyat & Yıkım Hizmetleri",
  description:
    "Yalova ve çevresinde gerçekleştirdiğimiz hafriyat, bina yıkımı, altyapı ve moloz taşıma hizmetlerine ait fotoğraf albümlerimizi inceleyin.",
  keywords: [
    "hafriyat galeri",
    "fotoğraf albümü",
    "ünlü hafriyat görseller",
    "Yalova hafriyat çalışmaları",
    "hafriyat fotoğrafları",
    "iş makineleri görselleri",
    "bina yıkımı görselleri"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Galeri | Ünlü Hafriyat",
    description:
      "Gerçekleştirdiğimiz projelere ait görselleri Ünlü Hafriyat Galeri sayfasında görüntüleyin.",
    url: "https://www.orneksite.com/tr/galeri",
    siteName: "Ünlü Hafriyat",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.orneksite.com/images/galeri-kapak.jpg",
        width: 800,
        height: 600,
        alt: "Ünlü Hafriyat iş makineleri ve saha çalışmaları",
      },
    ],
  },
};

export default metadata;
