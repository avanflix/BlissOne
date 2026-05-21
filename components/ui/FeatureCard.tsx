import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 card-shadow hover:-translate-y-2 transition-smooth border border-gray-100">
      <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}