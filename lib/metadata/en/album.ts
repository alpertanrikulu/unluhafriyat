// /lib/metadata/tr/galeri/album.ts
import { Metadata } from "next";
import { albums } from "@/lib/albums";

export async function generateMetadata({
  params,
}: {
  params: { album: string };
}): Promise<Metadata> {
  const album = albums.find((a) => a.album === params.album);

  if (!album) {
    return {
      title: "Fotoğraf Albümü | Ünlü Hafriyat",
      description: "Albüm bulunamadı.",
    };
  }

  return {
    title: `${album.title} | Ünlü Hafriyat`,
    description: `${album.title} albümüne ait görselleri bu sayfada inceleyebilirsiniz.`,
    openGraph: {
      title: `${album.title} | Ünlü Hafriyat`,
      description: `${album.title} albümüne ait görselleri bu sayfada inceleyebilirsiniz.`,
      images: [
        {
          url: album.images[0],
          width: 800,
          height: 600,
          alt: album.title,
        },
      ],
    },
  };
}
