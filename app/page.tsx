// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-orange-500/90 grid place-items-center">
            <span className="font-bold">CJR</span>
          </div>
          <span className="font-semibold tracking-wide">CJR Technologies</span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm opacity-90">
          <a href="#services" className="hover:opacity-100">Services</a>
          <a href="#about" className="hover:opacity-100">About</a>
          <a href="mailto:info@cjrtech.com" className="hover:opacity-100">Contact</a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Websites, Apps & IT—done right.
          </h1>
          <p className="mt-4 text-white/80">
            CJR Technologies builds modern websites, integrates payments & ID
            verification, sets up scheduling and contracts, and handles
            networking when you need it.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="mailto:info@cjrtech.com?subject=Project%20Inquiry"
              className="rounded-xl bg-orange-500 px-5 py-3 font-medium hover:bg-orange-400"
            >
              Get a quote
            </a>
            <a
              href="#services"
              className="rounded-xl border border-white/15 px-5 py-3 font-medium hover:bg-white/5"
            >
              See services
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <ul className="space-y-3 text-sm">
            <li>✅ Stripe payments & Stripe Identity</li>
            <li>✅ DocuSign contracts</li>
            <li>✅ Cal.com scheduling</li>
            <li>✅ Maintenance requests & reminders</li>
            <li>✅ Mileage tracking & photo uploads</li>
          </ul>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {t:'Websites', d:'Fast, responsive sites with CMS'},
            {t:'Mobile-ready', d:'PWAs or native later'},
            {t:'Payments & ID', d:'Stripe + Stripe Identity'},
            {t:'Scheduling', d:'Cal.com embedded flows'},
            {t:'Contracts', d:'DocuSign templates & eSign'},
            {t:'Networking', d:'On-site setup & support'},
          ].map((s,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
              <div className="text-lg font-medium">{s.t}</div>
              <div className="text-sm text-white/75 mt-1">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <footer id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/70">
          <div>CJR Technologies • cjrtech.com</div>
          <div className="mt-1">
            <a className="underline hover:text-white" href="mailto:info@cjrtech.com">
              info@cjrtech.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}