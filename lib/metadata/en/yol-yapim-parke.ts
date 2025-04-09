import type { Metadata } from "next";

const title = "Yol Yapım ve Parke Döşeme | Ünlü Hafriyat Yalova";
const description =
  "Yalova'da yol açma çalışmaları ve parke taşı döşeme hizmetlerimizle estetik ve dayanıklı yollar sunuyoruz. Profesyonel ekibimizle kaliteli çözümler.";
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