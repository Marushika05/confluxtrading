import Navbar from "@/components/Navbar";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentlyViewed from "@/components/RecentlyViewed";

export default function Home() {
  return (
    <main>

       

      <section className="bg-gray-900 text-white py-32">

        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-6xl font-bold mb-6">
            Industrial Fittings &
            Manufacturing Solutions
          </h1>

          <p className="text-xl mb-8">
            High-quality engineered industrial products.
          </p>

          <button className="bg-orange-600 px-8 py-4 rounded-lg">
            Explore Products
          </button>

        </div>

      </section>

      <ProductCategories />

      <WhyChooseUs />
      <RecentlyViewed />


    </main>
  );
}