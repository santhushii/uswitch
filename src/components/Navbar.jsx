import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const LinkBtn = ({ children, href = "#" }) => (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center h-7 w-7 rounded bg-red-600 text-white font-extrabold">U</span>
          <span className="text-xl font-semibold tracking-tight">switch</span>
        </a>

        <div className="hidden md:flex items-center">
          <LinkBtn>Broadband & TV</LinkBtn>
          <LinkBtn>SIM only</LinkBtn>
          <LinkBtn>Mobile</LinkBtn>
          <LinkBtn>Energy</LinkBtn>
          <LinkBtn>Finance</LinkBtn>
          <LinkBtn>Insurance</LinkBtn>
          <LinkBtn>Business</LinkBtn>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-md border hover:bg-gray-50 text-sm">
            Sign in
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-2 grid grid-cols-2 gap-2">
            {[
              "Broadband & TV",
              "SIM only",
              "Mobile",
              "Energy",
              "Finance",
              "Insurance",
              "Business",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 rounded-md text-sm border hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
