import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="bg-gray-200 py-8">
        <h2 className="text-4xl text-center font-semibold">Hakkımızda</h2>
      </div>
      <div className="flex flex-wrap px-10 md:px-30 my-30">
        <div className="w-full md:w-1/3 px-3 max-md:mb-5">
          <Image
            className="mx-auto"
            src="/images/jcb.jpg"
            alt="Yalova kepçe ekskavatör hafriyat"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-3xl font-bold">Biz Kimiz?</h3>
          <div className="my-5">
            <h5 className="text-xl font-semibold">Kuruluşumuz</h5>
            <p className="text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nihil aut reprehenderit asperiores quisquam, earum illum repellat
              voluptates! Labore, voluptatem dignissimos. Cumque eos eaque
              incidunt impedit id sed neque vel.
            </p>
          </div>
          <div className="my-5">
            <h5 className="text-xl font-semibold">Hizmet Verdiğimiz Bölge</h5>
            <p className="text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nihil aut reprehenderit asperiores quisquam, earum illum repellat
              voluptates! Labore, voluptatem dignissimos. Cumque eos eaque
              incidunt impedit id sed neque vel.
            </p>
          </div>
          <div className="my-5">
            <h5 className="text-xl font-semibold">Politikamız</h5>
            <p className="text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nihil aut reprehenderit asperiores quisquam, earum illum repellat
              voluptates! Labore, voluptatem dignissimos. Cumque eos eaque
              incidunt impedit id sed neque vel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
