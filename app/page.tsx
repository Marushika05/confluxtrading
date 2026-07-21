import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentlyViewed from "@/components/RecentlyViewed";
import MarketsServed from "@/components/MarketsServed";
import AboutConflux from "@/components/AboutConflux";
// import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}

      <section className="bg-slate-950 text-white py-36">

        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[0.25em] text-orange-500 mb-6">
            Conflux Trading
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight max-w-5xl mb-8">
            Direct-to-Foundry Industrial Hardware
            <br />
            for North American Infrastructure
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">
            Industrial handrail solutions, delivered with dependable global
            logistics and uncompromising manufacturing standards.
          </p>

          <div className="flex flex-wrap gap-4">

            <button
              className="
                bg-orange-600
                hover:bg-orange-700
                px-8
                py-4
                rounded-lg
                font-semibold
                transition
              "
            >
              View Capabilities
            </button>

            <button
              className="
                border
                border-white
                px-8
                py-4
                rounded-lg
                font-semibold
                hover:bg-white
                hover:text-slate-950
                transition
              "
            >
              Request Quote
            </button>

          </div>

        </div>

      </section>

      <div className="h-px bg-slate-800"></div>

      {/* ABOUT */}

      <AboutConflux />

      {/* INDUSTRIES SERVED */}

      <MarketsServed />

      {/* CAPABILITIES */}

      <ProductCategories />

      {/* QUALITY & LOGISTICS */}

      <WhyChooseUs />

      {/* CONTINUE WHERE YOU LEFT OFF */}

      <RecentlyViewed />
       

    </main>
  );
}