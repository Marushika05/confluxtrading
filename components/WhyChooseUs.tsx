export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 text-white py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-16 max-w-4xl">

          <p className="text-orange-500 font-semibold tracking-wider uppercase mb-4">
            Quality Assurance & Logistics
          </p>

          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Manufacturing Excellence You Can Depend On
          </h2>

          <p className="text-slate-300 text-lg leading-8">
            Every project depends on dependable manufacturing,
            consistent quality, and predictable delivery. Conflux
            Trading works directly with its manufacturing partners
            to ensure every shipment meets the performance,
            reliability, and logistical expectations of industrial
            procurement teams across North America.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div
            className="
              border
              border-slate-700
              rounded-2xl
              p-8
              hover:border-orange-500
              transition
            "
          >

            <div className="w-12 h-1 bg-orange-600 rounded-full mb-6"></div>

            <h3 className="text-2xl font-bold mb-5">
              Manufacturing Standards
            </h3>

            <p className="text-slate-300 leading-8">
              Precision-engineered structural fittings
              manufactured to demanding North American
              specifications with rigorous quality control
              throughout the production process.
            </p>

          </div>

          <div
            className="
              border
              border-slate-700
              rounded-2xl
              p-8
              hover:border-orange-500
              transition
            "
          >

            <div className="w-12 h-1 bg-orange-600 rounded-full mb-6"></div>

            <h3 className="text-2xl font-bold mb-5">
              Quality Assurance
            </h3>

            <p className="text-slate-300 leading-8">
              Strict inspection procedures, material
              verification, and hot-dip galvanization
              standards help ensure long-term durability
              and dependable field performance.
            </p>

          </div>

          <div
            className="
              border
              border-slate-700
              rounded-2xl
              p-8
              hover:border-orange-500
              transition
            "
          >

            <div className="w-12 h-1 bg-orange-600 rounded-full mb-6"></div>

            <h3 className="text-2xl font-bold mb-5">
              Global Logistics
            </h3>

            <p className="text-slate-300 leading-8">
              From factory production to international
              freight coordination, customs management,
              and final delivery, we simplify the entire
              procurement process.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}