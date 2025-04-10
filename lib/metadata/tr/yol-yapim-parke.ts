import type { Metadata } from "next";

const title = "Ünlü Hafriyat Yalova | Ünlü Hafriyat & Yıkım Hizmetleri";
const description =
  "Yalova ve Marmara Bölgesi'nde hafriyat, altyapı, yıkım ve iş makineleri kiralama hizmetleri. Ünlü Hafriyat ile güçlü makineler ve deneyimli ekip hizmetinizde!";
const keywords =
  "Yalova yol yapım, parke taşı döşeme, yol açma, parke uygulama, Ünlü Hafriyat, Yalova altyapı, Yalova parke hizmeti";

const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    url: "https://unluhafriyat.com.tr/tr/hizmetlerimiz/yol-yapim-parke",
    siteName: "Ünlü Hafriyat",
    locale: "tr_TR",
    type: "website",
  },
};

export default metadata;