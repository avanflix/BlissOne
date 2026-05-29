"use client";

import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import emailjs from "@emailjs/browser";
import { useState } from "react";


export default function LeadPopup(
  {
    open,
    setOpen,
  }: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch(
      "https://api.kylas.io/v1/leads/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key":
            "841597d1-3e1d-4536-b047-43d8350ccd1b:21705",
        },
        body: JSON.stringify({
          ownerId: 81947,
          lastName: formData.fullName,
          source: 2913180,

          emails: [
            {
              type: "OFFICE",
              value: formData.email,
              primary: true,
            },
          ],

          phoneNumbers: [
            {
              type: "MOBILE",
              code: "IN",
              primary: true,
              value: formData.phone,
            },
          ],

          customFieldValues: {
            cfMessage: formData.message,
          },

          facebook: null,
          twitter: null,
          linkedIn: null,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit lead");
    }

    alert("Inquiry submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      message: "",
    });

    setOpen(false);
  } catch (error) {
    console.error(error);
    alert("Failed to send inquiry.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      onClick={() => setOpen(false)}
      className="
        fixed inset-0 z-[99999]
        bg-black/70 backdrop-blur-sm
        flex items-center justify-center
        px-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white
          rounded-2xl
          overflow-hidden
          w-full
          max-w-3xl
          shadow-2xl
          relative
          grid md:grid-cols-2
        "
      >
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-4 right-4 z-20
            bg-white rounded-full p-2 shadow-md
          "
        >
          <X size={18} />
        </button>

        <div
          className="relative min-h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Landscape-1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex flex-col justify-center p-6 text-white">
            <p className="text-2xl md:text-2xl uppercase font-bold mb-10">
              Bliss Ventures Pvt.Ltd
            </p>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
              Premium Living Starts Here
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-7">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Book Consultation
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200"
              required
            />

            <div className="flex gap-3">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="px-3 py-2.5 rounded-xl border border-gray-200 min-w-[110px]"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+971">🇦🇪 +971</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-3 py-2.5 rounded-xl border border-gray-200"
                required
              />
            </div>

            <textarea
              rows={3}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 resize-none"
            />

            <Button variant="red" className="w-full" type="submit">
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}