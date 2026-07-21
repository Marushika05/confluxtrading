import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <div className="flex items-center gap-4 mb-6">

              <Image
                src="/logo.png"
                alt="Conflux Trading"
                width={60}
                height={60}
                className="object-contain"
              />

              <div>

                <h3 className="text-2xl font-bold">
                  Conflux Trading
                </h3>

                <p className="text-slate-400 text-sm">
                  Industrial Supply Solutions
                </p>

              </div>

            </div>

            <p className="text-slate-300 leading-8">
              Delivering premium structural handrail systems,
              industrial hardware, and custom manufacturing
              solutions backed by dependable global logistics
              and uncompromising manufacturing standards.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-slate-300">

              <a
                href="/#about"
                className="hover:text-orange-500 transition"
              >
                About
              </a>

              <a
                href="/#markets"
                className="hover:text-orange-500 transition"
              >
                Industries Served
              </a>

              <a
                href="/#capabilities"
                className="hover:text-orange-500 transition"
              >
                Capabilities
              </a>

              <Link
                href="/contact"
                className="hover:text-orange-500 transition"
              >
                Request Quote
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-slate-300 leading-7">

              <div>
                <p className="font-semibold text-white">
                  Address
                </p>

                <p>
                  Mississauga,
                  Ontario, Canada
                </p>

              </div>

              <div>

                <p className="font-semibold text-white">
                  Email
                </p>

                <p>
                  procurement@confluxtrading.ca
                </p>

              </div>

              <div>

                <p className="font-semibold text-white">
                  Phone
                </p>

                <p>
                  +1 (905) 555-0182
                </p>

              </div>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Legal
            </h3>

            <div className="flex flex-col gap-4 text-slate-300">

              <Link
                href="/privacy-policy"
                className="hover:text-orange-500 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-trade"
                className="hover:text-orange-500 transition"
              >
                Terms of Trade
              </Link>

              <Link
                href="/commercial-warranties"
                className="hover:text-orange-500 transition"
              >
                Commercial Warranties
              </Link>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-sm">
            © 2026 Conflux Trading. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Proudly Serving Industrial Projects Across North America
          </p>

        </div>

      </div>

    </footer>
  );
}