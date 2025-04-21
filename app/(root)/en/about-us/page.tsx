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
              src="/unluimages/sefa.jpg"
              alt="Excavation machinery of Yalova construction company"
              width={500}
              height={500}
            />
          </div>

          {/* Metinler */}
          <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">
              A Strong Heritage, A Reliable Future
            </h3>
            <p className="text-md font-medium mb-3">
              Ünlüsa Excavation was founded in 1970 by Adem Ünlüsa in Yalova.
              Since its establishment, our company has closely followed
              developments in the industry and continues its operations today
              under the leadership of the second-generation representative, Sefa
              Ünlüsa. With over half a century of experience, we take pride in
              being a trusted name in the excavation and construction sector.
            </p>
            <h3 className="text-lg font-semibold">
              Wide Range of Services and Modern Equipment
            </h3>
            <p className="text-md font-medium mb-3">
              Our services include excavation, infrastructure and superstructure
              works, demolition, landscaping, asphalt and paving road
              construction, rural infrastructure projects, and irrigation pond
              construction. We also offer flexible machinery rental solutions
              (such as backhoes and trucks) on an hourly, daily, or monthly
              basis. With our modern equipment and expert team, we provide
              professional support for projects of all scales.
            </p>
            <h3 className="text-lg font-semibold">
              Regional Strength, Commitment to Quality
            </h3>
            <p className="text-md font-medium mb-3">
              Operating primarily in Yalova and throughout the Marmara Region,
              we have built an extensive service network through numerous
              projects. Our company prioritizes customer satisfaction and
              adheres to principles of quality, reliability, and timely delivery
              in every job. At Ünlüsa Excavation, we are committed to offering
              our partners not just services, but also sustainable and robust
              solutions.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
};

export default page;
