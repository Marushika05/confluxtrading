// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function RecentlyViewed() {

//   const [products, setProducts] =
//     useState<string[]>([]);

//   useEffect(() => {

//     const stored = JSON.parse(
//       localStorage.getItem(
//         "recentProducts"
//       ) || "[]"
//     );

//     setProducts(stored);

//   }, []);

//   if (products.length === 0)
//     return null;

//   return (
//     <section className="py-24 bg-white">

//       <div className="max-w-7xl mx-auto px-8">

//         <p className="text-orange-600 font-semibold mb-3">
//           PROCUREMENT WORKFLOW
//         </p>

//         <h2 className="text-5xl font-bold mb-6">
//           Continue Your Review
//         </h2>

//         <p className="text-gray-600 text-lg max-w-3xl mb-12">
//           Resume reviewing previously viewed
//           product categories and manufacturing
//           capabilities without restarting your
//           procurement process.
//         </p>

//         <div className="grid md:grid-cols-3 gap-6">

//           {products.map((slug) => (

//             <Link
//               key={slug}
//               href={`/products/${slug}`}
//               className="
//                 border
//                 rounded-2xl
//                 p-8
//                 hover:shadow-lg
//                 transition
//               "
//             >

//               <h3 className="font-bold text-xl mb-3">
//                 {slug
//                   .replaceAll("-", " ")
//                   .replace(
//                     /\b\w/g,
//                     (char) => char.toUpperCase()
//                   )}
//               </h3>

//               <p className="text-gray-600">
//                 View specifications,
//                 requirements, and project
//                 information.
//               </p>

//             </Link>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }