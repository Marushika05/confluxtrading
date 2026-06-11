import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-7xl mx-auto px-8">

        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="
            text-3xl
            font-bold
            tracking-tight
            "
          >
            Conflux Trading
          </Link>

          <div className="flex gap-8 items-center">

            <a
              href="#about"
              className="
              text-gray-700
              hover:text-black
              "
            >
              About
            </a>

            <a
              href="#markets"
              className="
              text-gray-700
              hover:text-black
              "
            >
              Markets
            </a>

            <a
              href="#capabilities"
              className="
              text-gray-700
              hover:text-black
              "
            >
              Capabilities
            </a>

            <a
              href="#contact"
              className="
              text-gray-700
              hover:text-black
              "
            >
              Contact
            </a>

            <Link
              href="/contact"
              className="
              bg-orange-600
              text-white
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:bg-orange-700
              transition
              "
            >
              Request Quote
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}