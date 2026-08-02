"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="h-20 lg:h-24 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Conflux Trading"
              width={60}
              height={60}
              priority
              className="object-contain lg:w-[70px] lg:h-[70px]"
            />

            <div>

              <h1 className="text-lg lg:text-2xl font-bold text-slate-900">
                Conflux Trading
              </h1>

              <p className="hidden sm:block text-xs lg:text-sm text-slate-500">
                Industrial Supply Solutions
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

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
              className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-3 rounded-lg font-semibold transition shadow-md"
            >
              Request Quote
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-slate-900"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}

      {menuOpen && (

        <div className="lg:hidden border-t border-slate-200 bg-white">

          <div className="flex flex-col p-6 gap-6">

            <a
              href="/#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="/#markets"
              onClick={() => setMenuOpen(false)}
            >
              Industries
            </a>

            <a
              href="/#capabilities"
              onClick={() => setMenuOpen(false)}
            >
              Capabilities
            </a>

            <Link
              href="/faq"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-600 text-white text-center py-3 rounded-lg font-semibold"
            >
              Request Quote
            </Link>

          </div>

        </div>

      )}

    </nav>
  );
}