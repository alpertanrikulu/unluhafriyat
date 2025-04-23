import type { Metadata } from "next";

const servicesMetadata: Metadata = {
  title: "Ünlü Hafriyat Yalova | Ünlü Hafriyat & Demolition Services",
  description:
    "At Ünlü Hafriyat, we offer professional services in infrastructure, building demolition, excavation, debris removal, land leveling, grading, and road construction.",
  keywords: [
    "Yalova Excavation",
    "Yalova Backhoe",
    "Yalova Excavator",
    "Yalova Building Demolition",
    "Yalova Dump Truck",
    "Orhangazi Excavation",
    "Orhangazi Backhoe",
    "Orhangazi Excavator",
    "Orhangazi Dump Truck",
    "Orhangazi Building Demolition",
    "Izmit Excavation",
    "Izmit Backhoe",
    "Izmit Excavator",
    "Izmit Dump Truck",
    "Izmit Building Demolition",
    "Yalova Equipment Rental",
    "Infrastructure Works",
    "Excavation and Filling Works",
    "Ünlü Hafriyat Yalova",
  ],
  alternates: {
    canonical: "https://www.examplesite.com/en/services", // change to your own domain
  },
  openGraph: {
    title: "Our Services | Ünlü Hafriyat Yalova",
    description:
      "Discover professional services such as infrastructure, building demolition, excavation, and debris removal at Ünlü Hafriyat Yalova.",
    url: "https://www.examplesite.com/en/services",
    siteName: "Yalova Ünlü Hafriyat",
    images: [
      {
        url: "https://www.examplesite.com/images/debris.webp", // Social media image
        width: 1200,
        height: 630,
        alt: "Ünlü Hafriyat Yalova Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Ünlü Hafriyat Yalova",
    description:
      "Professional solutions for infrastructure, demolition, excavation, grading, and more.",
    images: ["https://www.examplesite.com/images/debris.webp"],
  },
};

export default servicesMetadata;
