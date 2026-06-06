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
      "Near Pocharam IT Hub and East Hyderabad growth corridor with seamless access to Schools, Hospitals, and Major Highways.",
  },
  {
    icon: Building2,
    title: "Modern Architecture",
    description:
      "Smartly planned homes designed for modern family living.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Transparency",
    description:
      "Clear process, trustworthy transactions, and customer confidence.",
  },
  {
    icon: Landmark,
    title: "Investment Value",
    description:
      "A Promising investment destination in Hyderabad's fast-growing east corridor.",
  },
  {
    icon: Gem,
    title: "Luxury Living",
    description:
      "Experience premium amenities, security, and a vibrant community lifestyle.",
  },
  {
    icon: Trees,
    title: "Sustainable Development",
    description:
      "Responsible design focused on greenery and future-ready communities.",
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
          title="Bliss Ventures Private Limited"
          subtitle="Why Choose"
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