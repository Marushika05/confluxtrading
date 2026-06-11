 
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    <main className="max-w-4xl mx-auto p-10">
      <div className="mb-12">
        <p className="text-orange-600 font-semibold mb-3">
          REQUEST FOR QUOTE
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Start Your Procurement Discussion
        </h1>

        <p className="text-gray-600 text-lg">
          Submit your project requirements,
          bill of materials, or sourcing needs.
          Our team will review your inquiry and
          respond with the most appropriate solution.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-4 rounded"
          value={form.name}
          required
          minLength={2}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Company"
          className="w-full border p-4 rounded"
          value={form.company}
          onChange={(e) =>
            setForm({
              ...form,
              company: e.target.value,
            })
          }
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
          }}
        />

        <input
          type="email"
          placeholder="Business Email"
          className="w-full border p-4 rounded"
          value={form.email}
          required
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Project Requirements / Bill of Materials"
          className="w-full border p-4 h-48 rounded"
          value={form.message}
          required
          minLength={10}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
        />

        <div className="flex justify-center">
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
            bg-orange-600
            text-white
            px-8
            py-4
            rounded-lg
            font-semibold
            disabled:opacity-50
          "
        >
          {loading
            ? "Submitting RFQ..."
            : "Submit RFQ"}
        </button>
      </form>
    </main>
  );
}
