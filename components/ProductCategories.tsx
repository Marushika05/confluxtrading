const categories = [
  "Safety Railings",
  "Industrial Fittings",
  "Machine Components",
  "Pipe Systems",
];

export default function ProductCategories() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-10">
          Product Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item) => (
            <div
              key={item}
              className="
              border
              rounded-xl
              p-8
              hover:shadow-lg
              cursor-pointer
              "
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>

              <p className="mt-3 text-gray-600">
                Explore industrial solutions.
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}