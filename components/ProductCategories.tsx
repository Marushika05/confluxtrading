const capabilities = [
  {
    title: "Malleable Iron NPT Fittings",
    description:
      "Industrial-grade threaded fittings engineered for plumbing, gas distribution, and infrastructure applications requiring strict compliance and long-term durability.",
  },

  {
    title: "Structural Slip-On Fittings",
    description:
      "Modular railing, barrier, and structural connection systems designed for commercial construction, public infrastructure, and safety installations.",
  },

  {
    title: "Custom Flanges & Anchoring Hardware",
    description:
      "Custom-manufactured components produced to project specifications, including flanges, anchoring systems, castings, and engineered metal hardware.",
  },

  {
    title: "OEM & Private Label Manufacturing",
    description:
      "End-to-end manufacturing support including CAD-based development, custom tooling, private branding, and scalable production runs.",
  },
];

export default function ProductCategories() {
  return (
    <section
  id="capabilities"
  className="py-24 bg-gray-50"
>

      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-16">

          <p className="text-orange-600 font-semibold mb-3">
            CAPABILITIES
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Manufacturing & Supply Capabilities
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl">
            Conflux Trading delivers industrial hardware,
            structural components, and custom manufacturing
            solutions for contractors, engineers, distributors,
            and OEM partners across North America.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {capabilities.map((item) => (

            <div
              key={item.title}
              className="
              bg-white
              border
              rounded-2xl
              p-8
              hover:shadow-lg
              transition
              "
            >

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-12 flex flex-wrap gap-4">

          <button
            className="
            bg-orange-600
            text-white
            px-8
            py-4
            rounded-lg
            font-semibold
            "
          >
            Request Quote
          </button>

          <button
            className="
            border
            border-gray-300
            px-8
            py-4
            rounded-lg
            font-semibold
            "
          >
            Download Specifications
          </button>

        </div>

      </div>

    </section>
  );
}