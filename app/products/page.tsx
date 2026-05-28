import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Safety Railings",
    slug: "safety-railings",
    image: "/images/img1.jpg",
    description: "Industrial-grade safety railing systems.",
  },

  {
    title: "Pipe Fittings",
    slug: "pipe-fittings",
    image: "/images/img2.jpg",
    description: "Precision engineered pipe components.",
  },

  {
    title: "Machine Components",
    slug: "machine-components",
    image: "/images/img3.jpg",
    description: "Reliable manufacturing solutions.",
  },
];

export default function Products() {
  return (
    <main className="bg-gray-50 min-h-screen">

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h1 className="text-5xl font-bold mb-4">
          Our Products
        </h1>

        <p className="text-gray-600 mb-16 text-lg">
          Explore industrial manufacturing solutions
          engineered for durability and performance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <Link
              key={product.title}
              href={`/products/${product.slug}`}
              className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition
              duration-300
              block
              "
            >

              <div className="relative h-64">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <h2 className="text-2xl font-bold mb-4">
                  {product.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <button
                  className="
                  flex
                  items-center
                  gap-2
                  text-orange-600
                  font-semibold
                  "
                >
                  View Details

                  <ArrowRight size={18} />

                </button>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}