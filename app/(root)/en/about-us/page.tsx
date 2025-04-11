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

      <section className="flex flex-wrap px-10 md:px-30 my-30">
        <div className="w-full md:w-1/3 px-3 max-md:mb-5">
          <Image
            className="mx-auto"
            src="/images/jcb.jpg"
            alt="Excavation machinery of Yalova construction company"
            width={500}
            height={500}
          />
        </div>

        <article className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold">Who Are We?</h2>

          <section className="my-5">
            <h3 className="text-xl font-semibold">Our Foundation</h3>
            <p className="text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nihil aut reprehenderit asperiores quisquam, earum illum repellat
              voluptates! Labore, voluptatem dignissimos. Cumque eos eaque
              incidunt impedit id sed neque vel.
            </p>
          </section>

          <section className="my-5">
            <h3 className="text-xl font-semibold">Areas We Serve</h3>
            <p className="text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nihil aut reprehenderit asperiores quisquam, earum illum repellat
              voluptates! Labore, voluptatem dignissimos. Cumque eos eaque
              incidunt impedit id sed neque vel.
            </p>
          </section>

          <section className="my-5">
            <h3 className="text-xl font-semibold">Our Policy</h3>
            <p className="text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nihil aut reprehenderit asperiores quisquam, earum illum repellat
              voluptates! Labore, voluptatem dignissimos. Cumque eos eaque
              incidunt impedit id sed neque vel.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
};

export default page;
