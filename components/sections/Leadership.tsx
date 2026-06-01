"use client";

import SectionTitle from "../ui/SectionTitle";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const stats = [
  {
    number: 280,
    suffix: "+",
    title: "Units in Bliss One",
    description: "Thoughtfully designed 2 & 3 BHK apartments",
  },
  // {
  //   number: 55,
  //   suffix: "+",
  //   title: "Acres in Bliss Bilva",
  //   description: "Master-planned farmland community",
  // },
  {
    number: 5,
    suffix: "",
    title: "Completed Projects",
    description: "Successfully delivered developments",
  },
  {
    number: 2,
    suffix: "",
    title: "Ongoing Projects",
    description: "Future-ready developments in progress",
  },
];

const recognitions = [
  {
    image: "/images/naredco.png",
    title: "Proud Member NAREDCO",
    description: "National Real Estate Development Council",
  },
  {
    image: "/images/sbi.png",
    title: "Projects Funded by SBI",
    description: "Trusted financial partnership",
  },
];

export default function Leadership() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="leadership"
      className="section-padding bg-gray-50"
      ref={ref}
    >
      <div className="container-width">
        <SectionTitle
          title="Our Achievement Story"
          subtitle="Numbers that define trust"
        />

        <p className="text-center max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-16">
          Numbers that speak louder than words. Our commitment to excellence is
          reflected in every milestone we've achieved.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                text-center
                hover:shadow-xl
                transition
              "
            >
              <h3 className="text-5xl font-bold text-red-800 mb-4">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                  />
                )}
                {stat.suffix}
              </h3>

              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {stat.title}
              </h4>

              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Recognition */}
        {/* <div className="grid md:grid-cols-2 gap-10">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                text-center
                hover:shadow-xl
                transition
              "
            >
              <div className="relative w-full h-28 mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h4>

              <p className="text-gray-600 text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}