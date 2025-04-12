// /lib/metadata/tr/galeri/album.ts
import { Metadata } from "next";
import { albums } from "@/lib/albums";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ album: string }>;
}): Promise<Metadata> {
  const {album} = await params;
  const albumum = albums.find((a) => a.album === album);

  if (!albumum) {
    return {
      title: "Fotoğraf Albümü | Ünlü Hafriyat",
      description: "Albüm bulunamadı.",
    };
  }

  return {
    title: `${albumum.title} | Ünlü Hafriyat`,
    description: `${albumum.title} albümüne ait görselleri bu sayfada inceleyebilirsiniz.`,
    openGraph: {
      title: `${albumum.title} | Ünlü Hafriyat`,
      description: `${albumum.title} albümüne ait görselleri bu sayfada inceleyebilirsiniz.`,
      images: [
        {
          url: albumum.images[0],
          width: 800,
          height: 600,
          alt: albumum.title,
        },
      ],
    },
  };
}
