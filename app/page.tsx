import Link from "next/link";

import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import MarketsServed from "@/components/MarketsServed";
import AboutConflux from "@/components/AboutConflux";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}

      <section className="bg-slate-950 text-white py-20 md:py-28 lg:py-36">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <p className="uppercase tracking-[0.25em] text-orange-500 text-sm md:text-base mb-5">
            Conflux Trading
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl mb-6 md:mb-8">
            Direct-to-Foundry Industrial Hardware
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            for North American Infrastructure
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8 md:mb-10">
            Industrial handrail solutions, delivered with dependable
            global logistics and uncompromising manufacturing
            standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              href="/#capabilities"
              className="
                w-full
                sm:w-auto
                text-center
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
            </Link>

            <Link
              href="/contact"
              className="
                w-full
                sm:w-auto
                text-center
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
            </Link>

          </div>

        </div>

      </section>

      <div className="h-px bg-slate-800" />

      {/* ABOUT */}

      <AboutConflux />

      {/* INDUSTRIES */}

      <MarketsServed />

      {/* CAPABILITIES */}

      <ProductCategories />

      {/* WHY CHOOSE US */}

      <WhyChooseUs />

    </main>
  );
}