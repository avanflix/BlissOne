import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../ui/FeatureCard";
import {
  Building2,
  ShieldCheck,
  MapPinned,
  Landmark,
  Gem,
  Trees,
} from "lucide-react";

const features = [
  {
    icon: MapPinned,
    title: "Prime Locations",
    description:
      "Strategically positioned developments in high-growth investment corridors.",
  },
  {
    icon: Building2,
    title: "Modern Architecture",
    description:
      "Designed with elegance, innovation, and contemporary lifestyle needs.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Transparency",
    description:
      "Clear processes, trustworthy transactions, and customer confidence.",
  },
  {
    icon: Landmark,
    title: "Investment Value",
    description:
      "Projects designed for long-term appreciation and stable returns.",
  },
  {
    icon: Gem,
    title: "Luxury Living",
    description:
      "Sophisticated living experiences with premium amenities and finishes.",
  },
  {
    icon: Trees,
    title: "Sustainable Development",
    description:
      "Responsible design focused on greener and future-ready communities.",
  },
];

export default function WhyChoose({
  openPopup,
}: {
  openPopup: () => void;
}) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <SectionTitle
          title="Why Choose Bliss Ventures"
          subtitle="Our Strength"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              openPopup={openPopup}
            />
          ))}
        </div>
      </div>
    </section>
  );
}