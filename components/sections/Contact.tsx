"use client";

import SectionTitle from "../ui/SectionTitle";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        <SectionTitle
          title="Book Your Consultation"
          subtitle="Get In Touch"
        />

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-10 md:p-14 card-shadow">
          <form className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              type="text"
              placeholder="Enter your name"
            />

            <InputField
              label="Email Address"
              type="email"
              placeholder="Enter your email"
            />

            <InputField
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone"
            />

            <InputField
              label="Interested Project"
              type="text"
              placeholder="Project name"
            />

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your requirement"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="md:col-span-2 text-center mt-4">
              <Button variant="red" className="px-10">
                Book Site Visit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}