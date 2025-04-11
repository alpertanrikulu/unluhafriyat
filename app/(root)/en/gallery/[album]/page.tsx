// /app/en/galeri/[album]/page.tsx
import { albums } from "@/lib/albums-en";
import Image from "next/image";
import { notFound } from "next/navigation";
import { generateMetadata } from "@/lib/metadata/en/album";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ⬇️ SEO metadata export
export { generateMetadata };

interface Props {
  params: {
    album: string;
  };
}

const Page = async ({ params }: Props) => {
  const { album } = await params;
  const albumData = albums.find((a) => a.album === album);

  const range = (x: number, y: number) =>
    Array.from({ length: y - x + 1 }, (_, i) => x + i);

  const makeCarousel = (e: string) => {
    if (!albumData || !albumData.images) return;

    const index = albumData.images.findIndex((i) => i === e);
    if (index === -1) return;

    const l1 = range(index, albumData.images.length - 1);
    const l2 = range(0, index - 1);

    return l1.concat(l2).map((i) => albumData.images[i]);
  };

  if (!albumData) return notFound();

  return (
    <main>
      <header className="bg-gray-200 py-8 mb-5">
        <h1 className="text-4xl text-center font-semibold">
          {albumData.title} Image Gallery
        </h1>
      </header>

      <section
        aria-label={`${albumData.title} image gallery`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 md:px-24 my-48"
      >
        {albumData.images.map((src, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <button aria-label={`Image ${index + 1}`}>
                <Image
                  src={src}
                  alt={`${albumData.title} - image ${index + 1}`}
                  width={500}
                  height={400}
                  className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </button>
            </DialogTrigger>

            <DialogContent className="!max-w-[80vw] !h-fit !max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="sr-only">
                  {albumData.title} - Image Gallery
                </DialogTitle>
              </DialogHeader>

              <Carousel>
                <CarouselContent>
                  {makeCarousel(src)?.map((item, i) => (
                    <CarouselItem
                      key={i}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={item}
                        alt={`${albumData.title} - image ${i + 1}`}
                        width={1792}
                        height={1024}
                        className="!w-fit h-fit !max-h-[80vh]"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogContent>
          </Dialog>
        ))}
      </section>
    </main>
  );
};

export default Page;
