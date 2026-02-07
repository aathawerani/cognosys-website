import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600">
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
