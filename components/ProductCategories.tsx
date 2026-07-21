import Link from "next/link";
const capabilities = [
  {
    title: "Structural Handrail Systems",
    description:
      "Premium structural handrail solutions engineered for commercial buildings, industrial facilities, infrastructure projects, and public safety applications.",
  },

  {
    title: "Structural Slip-On Fittings",
    description:
      "Modular structural fittings designed for fast installation, long-term durability, and compliance across commercial and industrial environments.",
  },

  {
    title: "Custom Manufacturing Solutions",
    description:
      "Factory-direct manufacturing of custom structural components, castings, flanges, anchoring systems, and engineered metal hardware built to project specifications.",
  },

  {
    title: "Industrial Hardware Components",
    description:
      "Reliable industrial hardware and OEM manufacturing solutions supporting distributors, contractors, engineers, and equipment manufacturers across North America.",
  },
];

export default function ProductCategories() {
  return (
    <section
      id="capabilities"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-16 max-w-4xl">

          <p className="text-orange-600 font-semibold tracking-wider uppercase mb-4">
            Core Capabilities
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Manufacturing & Supply Capabilities
          </h2>

          <p className="text-lg text-slate-600 leading-8">
            From standard structural fittings to fully customized
            manufacturing, Conflux Trading delivers dependable,
            factory-direct industrial solutions designed to support
            long-term infrastructure and commercial projects.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {capabilities.map((item) => (

            <div
              key={item.title}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-8
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <div className="w-12 h-1 bg-orange-600 rounded-full mb-6"></div>

              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-14 flex flex-wrap gap-5">

         <div className="mt-12 flex flex-wrap gap-5">

  <Link
    href="/contact"
    className="
      inline-flex
      items-center
      justify-center
      bg-orange-600
      hover:bg-orange-700
      text-white
      px-8
      py-4
      rounded-lg
      font-semibold
      transition
      shadow-md
    "
  >
    Request Quote
  </Link>

  <a
    href="/documents/Conflux-Trading-Specifications.pdf"
    download
    className="
      inline-flex
      items-center
      justify-center
      border
      border-slate-300
      bg-white
      text-slate-800
      hover:bg-slate-100
      px-8
      py-4
      rounded-lg
      font-semibold
      transition
    "
  >
    Download Product Catalog (PDF)
  </a>

</div>
        </div>

      </div>
    </section>
  );
}