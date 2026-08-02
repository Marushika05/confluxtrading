"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What products does Conflux Trading supply?",
      answer:
        "We supply premium structural handrail systems, malleable iron NPT fittings, structural slip-on fittings, custom flanges, anchoring hardware, and precision-engineered industrial components for commercial and industrial applications.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work with commercial and industrial construction companies, infrastructure and civil engineering projects, industrial hardware distributors, and Original Equipment Manufacturers (OEMs) throughout North America.",
    },
    {
      question: "Do you offer custom manufacturing solutions?",
      answer:
        "Yes. We provide custom manufacturing services based on technical drawings, CAD files, project specifications, and customer requirements for industrial applications.",
    },
    {
      question: "Can you support bulk procurement orders?",
      answer:
        "Absolutely. Our supply chain is designed to support high-volume procurement, long-term supply agreements, and recurring industrial orders.",
    },
    {
      question: "Which regions do you serve?",
      answer:
        "We primarily serve customers across North America with dependable global sourcing and logistics support.",
    },
    {
      question: "How can I request a quotation?",
      answer:
        "Simply visit our Request Quote page and submit your project requirements or Bill of Materials. Our procurement team will review your inquiry and respond promptly.",
    },
    {
      question: "What quality standards do your products meet?",
      answer:
        "Our manufacturing partners follow strict quality control procedures and produce components designed to meet applicable North American industrial standards and project specifications.",
    },
    {
      question: "Do you provide logistics support?",
      answer:
        "Yes. We coordinate international sourcing, freight management, customs handling, and delivery logistics to simplify the procurement process for our customers.",
    },
    {
      question: "How quickly will I receive a response?",
      answer:
        "Most inquiries receive an initial response within one business day, depending on project complexity.",
    },
    {
      question: "How can I contact your procurement team?",
      answer:
        "You can submit an RFQ through our Request Quote page or use the contact information provided in the website footer.",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-12 md:mb-16">

          <p className="text-orange-600 font-semibold tracking-wider uppercase text-sm md:text-base mb-3">
            Frequently Asked Questions
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-8">
            Find answers to common questions regarding our products,
            manufacturing capabilities, procurement process, logistics,
            and industrial supply services.
          </p>

        </div>

        <div className="space-y-4 md:space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center gap-4 text-left p-5 md:p-8 hover:bg-slate-50 transition"
              >

                <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                  {faq.question}
                </h2>

                <span className="text-2xl md:text-3xl font-light text-orange-600 flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                <div className="px-5 md:px-8 pb-5 md:pb-8">

                  <p className="text-slate-600 leading-7 md:leading-8">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 md:mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-8 mb-8">
            Our procurement specialists are available to discuss your
            project requirements, sourcing needs, custom manufacturing,
            and bulk order inquiries.
          </p>

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              w-full
              sm:w-auto
              bg-orange-600
              hover:bg-orange-700
              px-8
              py-4
              rounded-lg
              font-semibold
              transition
            "
          >
            Request a Quote
          </a>

        </div>

      </div>
    </main>
  );
}