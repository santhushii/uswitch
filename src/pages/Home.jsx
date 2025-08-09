export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-neutral-900 text-white">
        <div className="container mx-auto px-4 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              We put{" "}
              <span className="inline-flex items-center justify-center -mx-1 align-middle h-12 w-12 md:h-16 md:w-16 rounded bg-white text-red-700">
                <span className="font-black text-3xl md:text-5xl">U</span>
              </span>{" "}
              first
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Doing more to get you a better deal across energy, broadband, and
              mobile.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {["Energy", "Broadband", "SIM only", "Mobile"].map((t) => (
                <a
                  key={t}
                  href="#products"
                  className="rounded-xl bg-white text-gray-900 px-4 py-3 font-medium text-center hover:shadow"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Right image (rounded pill) */}
          <div className="justify-self-center">
            <div className="relative rounded-[32px] overflow-hidden ring-1 ring-white/10">
              <img
                alt="happy customer"
                className="h-[360px] w-[300px] object-cover"
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=640&auto=format&fit=crop"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY GRID */}
      <section className="bg-rose-50" id="discover">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            See where else you can save
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Car insurance",
              "Home insurance",
              "New boilers",
              "Current accounts",
              "Credit cards",
              "Mortgages",
            ].map((item) => (
              <button
                key={item}
                className="px-4 py-3 rounded-lg border border-rose-200 bg-white hover:border-red-400 hover:text-red-700 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SAVINGS CARDS */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-3xl font-extrabold">
              Save more on your bills
            </h3>
            <p className="mt-2 text-gray-600">
              Switch today and beat rising prices. We do all the legwork.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Switch energy & save",
                img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Beat broadband hikes",
                img: "https://images.unsplash.com/photo-1510511336377-1a9caa095849?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Go SIM-only & save",
                img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
              },
            ].map(({ title, img }) => (
              <article
                key={title}
                className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition"
              >
                <img src={img} alt={title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h4 className="font-semibold text-lg">{title}</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Find better deals in minutes. Compare now.
                  </p>
                  <a
                    href="#products"
                    className="mt-4 inline-flex items-center text-red-700 font-medium hover:underline"
                  >
                    View deals →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US - dark section */}
      <section className="bg-neutral-900 text-white">
        <div className="container mx-auto px-4 py-14">
          <h3 className="text-3xl font-extrabold text-center">
            We make it our mission to put you first
          </h3>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "More choice",
                d: "Exclusive deals and more control over your bills.",
                i: "😊",
              },
              {
                t: "Fairer prices",
                d: "We push for fairer rules that keep your bills lower.",
                i: "⚑",
              },
              {
                t: "Useful services",
                d: "Guides, tools and reminders that actually help.",
                i: "✓",
              },
            ].map(({ t, d, i }) => (
              <div
                key={t}
                className="rounded-2xl bg-neutral-800 p-6 ring-1 ring-white/10"
              >
                <div className="text-3xl">{i}</div>
                <h4 className="mt-3 font-semibold">{t}</h4>
                <p className="mt-2 text-sm text-neutral-300">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="bg-gray-50" id="partners">
        <div className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-extrabold text-center mb-6">
            Comparison as a force for change
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {["BT", "Sky", "Vodafone", "Virgin", "O2", "Three"].map((brand) => (
              <div
                key={brand}
                className="rounded-xl bg-white border p-6 text-center font-semibold text-gray-700"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS / CTA */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-extrabold">
              Smarter home insights, in your hands
            </h3>
            <p className="mt-3 text-gray-600">
              Track your energy usage and find ways to use less and pay less
              with our free mobile app.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex px-5 py-3 rounded-md bg-red-600 text-white font-medium hover:bg-red-700"
            >
              Explore our app
            </a>
          </div>
          <div className="rounded-[24px] overflow-hidden ring-1 ring-gray-200">
            <img
              className="w-full h-72 object-cover"
              alt="app preview"
              src="https://images.unsplash.com/photo-1552318965-6e6be7484ada?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-gray-50" id="latest">
        <div className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-extrabold mb-6">Latest from our experts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: "How to switch your broadband provider",
                c: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
              },
              {
                t: "PAC Codes | Keep & transfer your number",
                c: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
              },
              {
                t: "What is the energy price cap?",
                c: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
              },
            ].map(({ t, c }) => (
              <article key={t} className="rounded-xl overflow-hidden border bg-white">
                <img src={c} alt={t} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">{t}</h4>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    Helpful steps and tips to make switching easier.
                  </p>
                  <a href="#" className="mt-3 inline-block text-red-700 font-medium">
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="bg-white" id="products">
        <div className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-extrabold text-center mb-8">
            Explore our products
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Broadband & TV",
              "SIM only",
              "Mobile phones",
              "Energy",
              "Current accounts",
              "Credit cards",
              "Car insurance",
              "Home insurance",
            ].map((p) => (
              <div
                key={p}
                className="rounded-2xl bg-white border p-6 hover:shadow-md"
              >
                <h4 className="font-semibold">{p}</h4>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  <li>
                    <a className="hover:text-red-700" href="#">
                      View deals
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-red-700" href="#">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
