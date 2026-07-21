import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-8">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <Image
              src="/logo.png"
              alt="Conflux Trading"
              width={70}
              height={70}
              priority
              className="object-contain"
            />

            <div>

              <h1 className="text-2xl font-bold text-slate-900">
                Conflux Trading
              </h1>

              <p className="text-sm text-slate-500">
                Industrial Supply Solutions
              </p>

            </div>

          </Link>

          {/* Navigation */}

          <div className="hidden lg:flex items-center gap-10">

            <a
              href="/#about"
              className="font-medium text-slate-700 hover:text-orange-600 transition"
            >
              About
            </a>

            <a
              href="/#markets"
              className="font-medium text-slate-700 hover:text-orange-600 transition"
            >
              Industries
            </a>

            <a
              href="/#capabilities"
              className="font-medium text-slate-700 hover:text-orange-600 transition"
            >
              Capabilities
            </a>  
            <Link
  href="/faq"
  className="font-medium text-slate-700 hover:text-orange-600 transition"
>
  FAQ
</Link>

            <Link
              href="/#contact"
              className="font-medium text-slate-700 hover:text-orange-600 transition"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="
                bg-orange-600
                hover:bg-orange-700
                text-white
                px-7
                py-3
                rounded-lg
                font-semibold
                transition
                shadow-md
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