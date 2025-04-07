import { Images } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { albums } from "@/lib/albums";

const page = () => {
  return (
    <section>
      <div className="bg-gray-200 py-8 mb-5">
        <h2 className="text-4xl text-center">Fotoğraf Albümlerimiz</h2>
      </div>
      <div className="flex flex-wrap justify-center my-10">
        {albums.map((e, k) => (
          <Link
            key={k}
            href={`/tr/galeri/${e.album}`}
            className="pb-5 px-5 rounded-2xl m-5 w-full md:w-1/3 lg:w-1/4 flex flex-col items-center"
          >
            <div className="relative w-fit bg-gray-100 flex flex-col items-center gap-5 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-[6px_6px_15px_rgba(0,0,0,0.35)]">
              <div className="p-3 bg-white absolute top-5 left-10  rounded-2xl">
                <Images className="scale-150 text-black" />
              </div>
              <Image
                className="rounded-t-2xl"
                src={e.images[0]}
                alt="asd"
                width={400}
                height={300}
              />
              <h3 className="text-xl font-semibold my-5">{e.album}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
