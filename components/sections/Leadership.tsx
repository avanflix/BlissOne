import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-white">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative h-[650px] rounded-3xl overflow-hidden">
          <Image
            src="/images/leadership/founder.jpg"
            alt="Leadership"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <SectionTitle
            title="Leadership That Inspires Confidence"
            subtitle="Our Leadership"
            center={false}
          />

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              At Bliss Ventures, leadership is built on vision, trust, and a
              deep commitment to delivering excellence.
            </p>

            <p>
              Our leadership team combines strategic insight, industry
              experience, and customer-first thinking to create developments
              that stand as lasting symbols of quality and innovation.
            </p>

            <p>
              Every project reflects meticulous planning, ethical practices, and
              a relentless pursuit of superior living experiences.
            </p>

            <p>
              We believe real estate is not merely construction—it is the art of
              creating environments where families thrive and investments grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}