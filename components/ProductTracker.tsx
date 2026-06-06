"use client";

import { useEffect } from "react";

export default function ProductTracker({
  slug,
}: {
  slug: string;
}) {
  useEffect(() => {
    const existing =
      JSON.parse(
        localStorage.getItem(
          "recentProducts"
        ) || "[]"
      );

    const filtered = existing.filter(
      (item: string) => item !== slug
    );

    const updated = [
      slug,
      ...filtered,
    ].slice(0, 5);

    localStorage.setItem(
      "recentProducts",
      JSON.stringify(updated)
    );
  }, [slug]);

  return null;
}