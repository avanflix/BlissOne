import SectionTitle from "../ui/SectionTitle";

export default function VisionMission() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <SectionTitle
          title="Two Phases, One Vision"
          subtitle="Choose the opportunity that suits your timeline and investment goals."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Phase One */}
          <div className="bg-white p-10 rounded-3xl card-shadow">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-red-800 mb-2">
                Phase One
              </h3>

              <p className="text-lg font-semibold text-yellow-600">
                Ready to Move In
              </p>
            </div>

            <div className="mb-6 p-4 bg-red-50 rounded-xl">
              <p className="font-semibold text-gray-800">
                Handover: August 2026
              </p>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Completion stage – final touches underway</li>
              <li>✓ All structural work complete</li>
              <li>✓ Home loan available</li>
              <li>✓ OC process initiated</li>
              <li>✓ Limited units remaining</li>
            </ul>
          </div>

          {/* Phase Two */}
          <div className="bg-white p-10 rounded-3xl card-shadow">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-red-800 mb-2">
                Phase Two
              </h3>

              <p className="text-lg font-semibold text-yellow-600">
                Now Launched (Early Bird Opportunity)
              </p>
            </div>

            <div className="mb-6 p-4 bg-red-50 rounded-xl">
              <p className="font-semibold text-gray-800">
                Secure the best pricing and unit selection today
              </p>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Best pricing available now</li>
              <li>✓ Fresh launch – best floor & unit selection</li>
              <li>✓ Pre-launch pricing advantage</li>
              <li>✓ Flexible payment plan available</li>
              <li>✓ Same premium specifications as Phase 1</li>
              <li>✓ Limited units – register interest now</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}