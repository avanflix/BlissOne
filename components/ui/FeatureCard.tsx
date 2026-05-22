import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  openPopup: () => void;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  openPopup,
}: FeatureCardProps) {
  return (
    <div
      onClick={openPopup}
      className="
        bg-white
        rounded-3xl
        p-8
        card-shadow
        hover:-translate-y-2
        transition-smooth
        border border-gray-100
        cursor-pointer
      "
    >
      <div className="w-16 h-16 rounded-2xl bg-red-800 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}