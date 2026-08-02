export default function MarketsServed() {
  return (
    <section
      id="markets"
      className="py-16 md:py-20 lg:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-12 md:mb-16 max-w-4xl">

          <p className="text-orange-600 font-semibold tracking-wider uppercase text-sm md:text-base mb-4">
            Industries Served
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Supporting Critical Industrial Sectors
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-8">
            Conflux Trading partners with contractors, engineers,
            distributors, and manufacturers across North America by
            delivering dependable structural components, precision
            manufacturing, and factory-direct industrial solutions.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-6 md:p-8
              hover:shadow-xl
              transition
            "
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-5">
              Commercial & Industrial Construction
            </h3>

            <p className="text-slate-600 leading-7 md:leading-8">
              Providing heavy-duty, code-compliant handrails and
              guardrails for manufacturing plants, warehouses,
              distribution centers, and commercial facilities.
            </p>
          </div>

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-6 md:p-8
              hover:shadow-xl
              transition
            "
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-5">
              Infrastructure & Civil Engineering
            </h3>

            <p className="text-slate-600 leading-7 md:leading-8">
              Supporting public works, transit stations,
              water treatment facilities, walkways, and
              infrastructure projects requiring durable,
              weather-resistant structural components.
            </p>
          </div>

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-6 md:p-8
              hover:shadow-xl
              transition
            "
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-5">
              Industrial Supply & Hardware Distribution
            </h3>

            <p className="text-slate-600 leading-7 md:leading-8">
              Partnering with regional and national
              distributors to provide a reliable,
              factory-direct supply of standard and
              custom handrail components.
            </p>
          </div>

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-6 md:p-8
              hover:shadow-xl
              transition
            "
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-5">
              Original Equipment Manufacturers (OEMs)
            </h3>

            <p className="text-slate-600 leading-7 md:leading-8">
              Supplying bulk structural components and
              custom-manufactured hardware integrated
              directly into industrial equipment,
              modular platforms, and safety systems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}