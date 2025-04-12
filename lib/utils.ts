import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


type PathMap = {
  tr: Record<string, string>;
  en: Record<string, string>;
};

const pathMap: PathMap = {
  tr: {
    "/en": "/tr",
    "/en/about-us": "/tr/hakkimizda",
    "/en/contact": "/tr/iletisim",
    "/en/gallery": "/tr/galeri",
    "/en/gallery/[album]": "/tr/galeri/[album]",
    "/en/services": "/tr/hizmetlerimiz",
    "/en/services/infrastructure": "/tr/hizmetlerimiz/alt-yapi",
    "/en/services/building-demolition": "/tr/hizmetlerimiz/bina-yikim",
    "/en/services/excavation-debris-removal": "/tr/hizmetlerimiz/hafriyat-moloz-tasima",
    "/en/services/grading": "/tr/hizmetlerimiz/tesviye",
    "/en/services/road-paving": "/tr/hizmetlerimiz/yol-yapim-parke",
  },
  en: {
    "/tr": "/en",
    "/tr/hakkimizda": "/en/about-us",
    "/tr/iletisim": "/en/contact",
    "/tr/galeri": "/en/gallery",
    "/tr/galeri/[album]": "/en/gallery/[album]",
    "/tr/hizmetlerimiz": "/en/services",
    "/tr/hizmetlerimiz/alt-yapi": "/en/services/infrastructure",
    "/tr/hizmetlerimiz/bina-yikim": "/en/services/building-demolition",
    "/tr/hizmetlerimiz/hafriyat-moloz-tasima": "/en/services/excavation-debris-removal",
    "/tr/hizmetlerimiz/tesviye": "/en/services/grading",
    "/tr/hizmetlerimiz/yol-yapim-parke": "/en/services/road-paving",
  },
};

export function convertPath(path: string): string {
  const lang = path.startsWith("/tr") ? "en" : "tr";
  return pathMap[lang][path] || path;
}
