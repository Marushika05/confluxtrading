import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-7xl mx-auto px-8">

        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="text-3xl font-bold"
          >
            Conflux Trading
          </Link>

          <div className="flex gap-8 items-center">

            <Link href="/">
              Home
            </Link>

            <Link href="/products">
              Products
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/faq">
              FAQs
            </Link>

            <Link
              href="/contact"
              className="
              bg-orange-600
              text-white
              px-5
              py-3
              rounded-lg
              "
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}