"use client";
import { useState } from "react";
import { Menu, X, ChevronRight, Video, Check } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-sm">
        <Link href="/">COMPANY</Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <Link href="/" className="hover:text-brand-tertiary-alt transition">
            Home
          </Link>
          <Link
            href="#features"
            className="hover:text-brand-tertiary-alt transition"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-brand-tertiary-alt transition"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="hover:text-brand-tertiary-alt transition"
          >
            FAQ
          </Link>
        </div>

        <a
          href="#cta"
          className="hidden md:block px-6 py-2.5 text-white bg-brand-solid hover:opacity-90 active:scale-95 transition-all rounded-full"
        >
          Start free trial
        </a>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="md:hidden active:scale-90 transition"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={`fixed inset-0 z-[100]  backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="#features" onClick={() => setMenuOpen(false)}>
          Features
        </Link>
        <Link href="#testimonials" onClick={() => setMenuOpen(false)}>
          Testimonials
        </Link>
        <Link href="#faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </Link>
        <a
          href="#cta"
          onClick={() => setMenuOpen(false)}
          className="px-6 py-2.5 text-white bg-brand-solid hover:opacity-90 active:scale-95 transition-all rounded-full"
        >
          Start free trial
        </a>
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-[var(--color-brand-solid)] hover:opacity-90 transition text-white rounded-md flex"
        >
          <X size={24} />
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="absolute top-28 -z-1 left-1/4 size-72 bg-[var(--color-brand-solid)] blur-[300px]" />

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-[var(--color-brand-50)] bg-[var(--color-brand-tertiary-alt)]/15"
        >
          <span className="bg-[var(--color-brand-solid)] text-white text-xs px-3.5 py-1 rounded-full">
            NEW
          </span>
          <p className="flex items-center gap-1">
            <span className="text-foreground">
              Now with inventory &amp; member tracking
            </span>
            <ChevronRight
              size={16}
              color="#10b981"
              className="group-hover:translate-x-0.5 transition duration-300"
            />
          </p>
        </Link>

        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-2xl text-center">
          The management system{" "}
          <span className="bg-gradient-to-r from-[var(--color-brand-solid)] to-[var(--color-brand-tertiary-alt)] text-white px-3 rounded-xl text-nowrap">
            you need.
          </span>{" "}
        </h1>

        <p className="text-base text-center dark:text-slate-200 text-[#52525b] max-w-lg mt-6">
          Track inventory, members, and daily operations from a single dashboard
          — built for small teams, with no training required.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <a
            href="#cta"
            className="bg-[var(--color-brand-solid)] text-white hover:opacity-90  rounded-full px-7 h-11 flex items-center"
          >
            Get started
          </a>
          <button className="flex items-center gap-2 border border-[var(--color-brand-tertiary-alt)]/40 hover:bg-[var(--color-brand-tertiary-alt)]/10 transition rounded-full px-6 h-11">
            <Video size={24} strokeWidth={1} />
            <span>Watch demo</span>
          </button>
        </div>

        <div className="flex flex-wrap justify-center mb-16 items-center gap-4 md:gap-14 mt-12">
          <p className="flex items-center gap-2">
            <Check
              size={20}
              className="size-5 text-[var(--color-brand-solid)]"
            />
            <span className="text-slate-400">No credit card required</span>
          </p>
          <p className="flex items-center gap-2">
            <Check
              size={20}
              className="size-5 text-[var(--color-brand-solid)]"
            />
            <span className="text-slate-400">Free 30-day trial</span>
          </p>
          <p className="flex items-center gap-2">
            <Check
              size={20}
              className="size-5 text-[var(--color-brand-solid)]"
            />
            <span className="text-slate-400">Live in under 10 minutes</span>
          </p>
        </div>
      </div>
    </>
  );
}
