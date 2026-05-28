import Image from "next/image";

const productData: any = {
  "safety-railings": {
    title: "Safety Railings",
    image: "/images/img1.jpg",
    description:
      "Industrial-grade railing systems engineered for safety and durability.",
  },

  "pipe-fittings": {
    title: "Pipe Fittings",
    image: "/images/img2.jpg",
    description:
      "Precision pipe fitting solutions for industrial applications.",
  },

  "machine-components": {
    title: "Machine Components",
    image: "/images/img3.jpg",
    description:
      "Reliable machine components built for manufacturing environments.",
  },
};

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const product = productData[slug];

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-8 py-20">

      <div className="grid md:grid-cols-2 gap-16">

        <div className="relative h-[500px] rounded-2xl overflow-hidden">

          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />

        </div>

        <div>

          <h1 className="text-5xl font-bold mb-8">
            {product.title}
          </h1>

          <p className="text-gray-600 text-lg mb-10">
            {product.description}
          </p>

          <div className="space-y-4 mb-10">

            <div className="border-b pb-4">
              High-quality industrial manufacturing
            </div>

            <div className="border-b pb-4">
              Engineered for durability
            </div>

            <div className="border-b pb-4">
              Custom solutions available
            </div>

          </div>

          <button
            className="
            bg-orange-600
            text-white
            px-8
            py-4
            rounded-lg
            "
          >
            Request Quote
          </button>

        </div>

      </div>

    </main>
  );
}