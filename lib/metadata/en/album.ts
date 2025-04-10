// /lib/metadata/en/gallery/album.ts
import { Metadata } from "next";
import { albums } from "@/lib/albums";

export async function generateMetadata({
  params,
}: {
  params: { album: string };
}): Promise<Metadata> {
  const { album } = await params;
  const albumData = albums.find((a) => a.album === album);

  if (!albumData) {
    return {
      title: "Photo Album | Ünlü Hafriyat",
      description: "Album not found.",
    };
  }

  return {
    title: `${albumData.title} | Ünlü Hafriyat`,
    description: `You can explore the images of the ${albumData.title} album on this page.`,
    openGraph: {
      title: `${albumData.title} | Ünlü Hafriyat`,
      description: `You can explore the images of the ${albumData.title} album on this page.`,
      images: [
        {
          url: albumData.images[0],
          width: 800,
          height: 600,
          alt: albumData.title,
        },
      ],
    },
  };
}
