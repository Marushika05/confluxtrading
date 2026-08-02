"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Turnstile } from "@marsidev/react-turnstile";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.message
    ) {
      alert("Please fill all required fields");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("Enter a valid email");
      return;
    }

    if (!token) {
      alert("Please verify that you are human");
      return;
    }

    if (form.message.length < 10) {
      alert("Project requirements are too short");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          token,
        }),
      });

      const data = await response.json();

      console.log(data);

      alert("RFQ submitted successfully!");

      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });

      setToken("");

    } catch (error) {

      console.error(error);
      alert("Something went wrong");

    }

    setLoading(false);
  }

  return (
    <main className="bg-slate-50 py-16 md:py-20">

      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-10 md:mb-12">

          <p className="text-orange-600 font-semibold tracking-wider uppercase text-sm md:text-base mb-3">
            Request for Quote
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Start Your Procurement Discussion
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-8">
            Submit your project requirements,
            Bill of Materials, or sourcing needs.
            Our team will review your inquiry and
            respond with the most appropriate solution.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10 space-y-6"
        >

          <input
            type="text"
            placeholder="Full Name"
            required
            minLength={2}
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="text"
            placeholder="Company"
            value={form.company}
            onChange={(e) =>
              setForm({
                ...form,
                company: e.target.value,
              })
            }
            className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <PhoneInput
            country={"ca"}
            value={form.phone}
            onChange={(phone) =>
              setForm({
                ...form,
                phone,
              })
            }
            inputStyle={{
              width: "100%",
              height: "56px",
              borderRadius: "8px",
            }}
          />

          <input
            type="email"
            placeholder="Business Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            placeholder="Project Requirements / Bill of Materials"
            required
            minLength={10}
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full border border-slate-300 rounded-lg p-4 h-48 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="flex justify-center overflow-x-auto">

            <Turnstile
              siteKey={
                process.env
                  .NEXT_PUBLIC_TURNSTILE_SITE_KEY!
              }
              options={{
                theme: "light",
                size: "normal",
              }}
              onSuccess={(token) => {
                console.log(
                  "Turnstile success:",
                  token
                );
                setToken(token);
              }}
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-orange-600
              hover:bg-orange-700
              text-white
              py-4
              rounded-lg
              font-semibold
              transition
              disabled:opacity-50
            "
          >
            {loading
              ? "Submitting RFQ..."
              : "Submit RFQ"}
          </button>

        </form>

      </div>

    </main>
  );
}