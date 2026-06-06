"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RecentlyViewed() {

  const [products, setProducts] =
    useState<string[]>([]);

  useEffect(() => {

    const stored =
      JSON.parse(
        localStorage.getItem(
          "recentProducts"
        ) || "[]"
      );

    setProducts(stored);

  }, []);

  if (products.length === 0)
    return null;

  return (
    <div className="mt-12">

      <h2 className="text-2xl font-bold mb-4">
        Continue Where You Left Off
      </h2>

      <div className="flex gap-4 flex-wrap">

        {products.map((slug) => (

          <Link
            key={slug}
            href={`/products/${slug}`}
            className="
              border
              rounded
              p-4
              hover:shadow-lg
            "
          >
            {slug}
          </Link>

        ))}

      </div>

    </div>
  );
}