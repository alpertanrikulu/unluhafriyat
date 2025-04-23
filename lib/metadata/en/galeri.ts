// lib/metadata/en/gallery.ts
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Ünlü Hafriyat Yalova | Ünlü Hafriyat & Demolition Services",
  description:
    "Browse our photo albums showcasing excavation, building demolition, infrastructure, and debris removal services we have carried out in Yalova and the surrounding areas.",
  keywords: [
    "excavation gallery",
    "photo album",
    "Ünlü Hafriyat images",
    "Yalova excavation works",
    "excavation photos",
    "heavy machinery images",
    "building demolition images"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Gallery | Ünlü Hafriyat",
    description:
      "View images of the projects we have carried out on the Ünlü Hafriyat Gallery page.",
    url: "https://www.yoursite.com/en/gallery",
    siteName: "Ünlü Hafriyat",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.yoursite.com/images/gallery-cover.webp",
        width: 800,
        height: 600,
        alt: "Ünlü Hafriyat heavy machinery and site works",
      },
    ],
  },
};

export default metadata;
