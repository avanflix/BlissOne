import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Testimonials"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}