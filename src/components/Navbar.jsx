import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LinkBtn = ({ children, href = "#" }) => (
    <a
      href={href}
      className="relative px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors duration-300 group"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-[2px] bg-red-600 w-0 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/70 backdrop-blur-lg border-b border-white/20"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center h-8 w-8 rounded bg-red-600 text-white font-extrabold text-lg">
            U
          </span>
          <span className="text-xl font-semibold tracking-tight">switch</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          <LinkBtn>Broadband</LinkBtn>
          <LinkBtn>Sim Only</LinkBtn>
          <LinkBtn>Mobile</LinkBtn>
          <LinkBtn>Travel Only</LinkBtn>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300">
            Sign In
          </button>
          <button className="hidden sm:inline-flex px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition duration-300">
            Sign Up
          </button>
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-gray-300"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white animate-fadeIn">
          <div className="container mx-auto px-4 py-2 grid gap-2">
            {["Broadband", "Sim Only", "Mobile", "Travel Only"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 rounded-md text-sm border hover:bg-gray-50 transition"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm border hover:bg-gray-50 transition"
            >
              Sign In
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm border hover:bg-gray-50 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
