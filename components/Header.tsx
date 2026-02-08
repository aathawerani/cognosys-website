"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Cognosys Solutions"
            width={44}
            height={44}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-blue-600 font-medium"
                : "text-slate-700"
            }
          >
            About
          </Link>
          <Link
              href="/services"
              className={
                pathname === "/services"
                  ? "text-blue-600 font-medium"
                  : "text-slate-700"
              }
            >
            Services
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
