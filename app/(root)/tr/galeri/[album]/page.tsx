import { albums } from "@/lib/albums";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

interface Props {
  params: {
    album: string;
  };
}

const page = ({ params }: Props) => {
  const albumData = albums.find((a) => a.album === params.album);

  const range = (x: number, y: number) =>
    Array.from({ length: y - x + 1 }, (_, i) => x + i);

  const makecarousel = (e: string) => {
    if (!albumData || !albumData.images) return;

    const index = albumData.images.findIndex((i) => i === e);

    if (index === -1) return;

    const l1: number[] = range(index, albumData.images.length - 1);
    const l2: number[] = range(0, index - 1);

    return l1.concat(l2).map((i) => albumData.images[i]);
  };

  if (!albumData) return notFound();

  return (
    <section className="">
      <div className="bg-gray-200 py-8 mb-5">
        <h2 className="text-4xl text-center">{albumData.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 md:px-24 my-48">
        {albumData.images.map((e, k) => (
          <Dialog key={k}>
            <DialogTrigger>
              <Image
                key={k}
                src={e}
                alt={`${albumData.album}-${k}`}
                width={500}
                height={400}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </DialogTrigger>
            <DialogContent className=" !max-w-[80vw] !h-fit !max-h-[90vh] ">
              <DialogTitle className="sr-only">Image Modal</DialogTitle>
              <Carousel className="">
                <CarouselContent>
                  {makecarousel(e)?.map((item, idx) => (
                    <CarouselItem
                      className="flex items-center justify-center"
                      key={idx}
                    >
                      <Image
                        className="!w-fit h-fit !max-h-[80vh]"
                        key={idx}
                        src={item}
                        alt={`${albumData.album}-${idx}`}
                        width={1792}
                        height={1024}
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
      </div>
    </section>
  );
};

export default page;
