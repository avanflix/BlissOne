import Image from "next/image";
import { Quote } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 card-shadow border border-gray-100 hover:-translate-y-2 transition-smooth">
      <div className="flex justify-between items-start mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center">
          <Quote className="w-5 h-5 text-white" />
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-6 italic">
        "{testimonial.feedback}"
      </p>

      <div>
        <h4 className="text-lg font-semibold text-gray-900">
          {testimonial.name}
        </h4>

        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  );
}