import Image from "next/image";
import React from "react";
import metadata from "@/lib/metadata/en/hakkimizda";

export { metadata };

const page = () => {
  return (
    <main>
      <header className="bg-gray-200 py-8">
        <h1 className="text-4xl text-center font-semibold">About Us</h1>
      </header>

      <section className="px-6 md:px-20 py-10 flex justify-center">
        <article className="clearfix md:max-w-[70vw]">
          {/* Görsel */}
          <div className="w-full md:w-auto float-none md:float-left md:mr-6 md:mb-4 mb-6">
            {/* <Image
              className="w-[300px] h-auto object-cover mx-auto md:mx-0"
              src="/unluimages/hakkimizda.jpeg"
              alt="Yalova hafriyat firması iş makinesi"
              width={500}
              height={500}
            /> */}
            <Image
              className="w-[300px] h-auto object-cover mx-auto md:mx-0"
              src="/unluimages/sefa.jpeg"
              alt="Excavation machinery of Yalova construction company"
              width={500}
              height={500}
            />
          </div>

          {/* Metinler */}
          <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>

          <section className="mb-6">
            <h3 className="text-xl font-semibold">Our Foundation</h3>
            <p className="text-lg font-medium mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id
              deserunt similique eum est ea. Possimus sunt quo temporibus, ut
              mollitia quisquam enim officiis alias dolores voluptatibus aut
              dolorem sequi sed rem exercitationem facere natus asperiores ex
              optio id consequatur.
            </p>
            <h3 className="text-xl font-semibold">Areas We Serve</h3>
            <p className="text-lg font-medium mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id
              deserunt similique eum est ea. Possimus sunt quo temporibus, ut
              mollitia quisquam enim officiis alias dolores voluptatibus aut
              dolorem sequi sed rem exercitationem facere natus asperiores ex
              optio id consequatur.
            </p>
            <h3 className="text-xl font-semibold">Our Policy</h3>
            <p className="text-lg font-medium mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id
              deserunt similique eum est ea. Possimus sunt quo temporibus, ut
              mollitia quisquam enim officiis alias dolores voluptatibus aut
              dolorem sequi sed rem exercitationem facere natus asperiores ex
              optio id consequatur.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
};

export default page;
