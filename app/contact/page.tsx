"use client";

import { useState } from "react";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";

import { Turnstile } from "@marsidev/react-turnstile";

export default function Contact() {

  console.log(
    "TURNSTILE KEY:",
    process.env
      .NEXT_PUBLIC_TURNSTILE_SITE_KEY
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState("");

  async function handleSubmit(e: any) {

    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.message
    ) {
      alert("Please fill all fields");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("Enter valid email");
      return;
    }

    if (!token) {
      alert("Please verify that you are human");
      return;
    }

    if (form.message.length < 10) {
      alert("Message too short");
      return;
    }

    setLoading(true);

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

    setLoading(false);

    alert("Inquiry submitted!");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    setToken("");
  }

  return (
    <main className="max-w-3xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-8">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Name"
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
          placeholder="Email"
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
          placeholder="Message"
          className="w-full border p-4 h-40 rounded"
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
          px-6
          py-3
          rounded
          disabled:opacity-50
          "
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>

    </main>
  );
}