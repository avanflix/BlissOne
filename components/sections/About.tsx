import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <SectionTitle
            title="About Bliss Ventures"
            subtitle="Who We Are"
            center={false}
          />

          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Bliss Ventures is a visionary real estate development company
              committed to redefining urban living through thoughtfully crafted
              residential communities.
            </p>

            <p>
              Built on trust, innovation, and excellence, we create premium
              spaces that deliver more than homes—they deliver elevated
              lifestyles and long-term value.
            </p>

            <p>
              Our focus lies in combining exceptional architecture, strategic
              locations, sustainable planning, and customer-first experiences.
            </p>

            <p>
              Every development reflects our commitment to quality,
              sophistication, and future-ready investment opportunities.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[600px] w-[auto] rounded-2xl overflow-hidden">
          <Image
            src="/images/About.jpeg"
            loading="eager"
            alt="About Bliss Ventures"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}