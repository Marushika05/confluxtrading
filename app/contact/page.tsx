"use client";

import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {

    e.preventDefault();

    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log(data);

    setLoading(false);

    alert("Inquiry submitted!");
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
          placeholder="Name"
          className="w-full border p-4"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Phone"
          className="w-full border p-4"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="w-full border p-4"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Message"
          className="w-full border p-4 h-40"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
        />

        <button
          className="
          bg-orange-600
          text-white
          px-6
          py-3
          rounded
          "
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>

    </main>
  );
}