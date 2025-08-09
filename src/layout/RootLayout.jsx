import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="grow">{children}</main>
      <footer className="mt-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Compare Deals", "About", "Help & Support", "Get the app"].map(
            (t) => (
              <div key={t}>
                <h4 className="font-semibold mb-3">{t}</h4>
                <ul className="space-y-2 text-sm/6 text-red-50">
                  <li><a className="hover:underline" href="#">Link one</a></li>
                  <li><a className="hover:underline" href="#">Link two</a></li>
                  <li><a className="hover:underline" href="#">Link three</a></li>
                </ul>
              </div>
            )
          )}
        </div>
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-4 text-xs text-red-100">
            © {new Date().getFullYear()} uswitch — We put U first.
          </div>
        </div>
      </footer>
    </div>
  );
}
