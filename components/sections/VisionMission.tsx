import SectionTitle from "../ui/SectionTitle";

export default function VisionMission() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <SectionTitle
          title="Vision & Mission"
          subtitle="Our Foundation"
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-white p-10 rounded-3xl card-shadow">
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              Our Vision
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              To redefine urban living by creating aspirational communities that
              combine luxury, innovation, and sustainable growth, setting new
              standards in premium real estate development.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 rounded-3xl card-shadow">
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              Our Mission
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              To deliver exceptional developments through integrity, customer
              trust, architectural excellence, and future-ready investment
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}