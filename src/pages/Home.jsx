import { Link } from 'react-router-dom'

function TrustBadge({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="w-14 h-14 bg-[#D4621A]/10 border border-[#D4621A]/25 rounded-full flex items-center justify-center text-[#D4621A]">
        {icon}
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{label}</span>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-[#1a1a1a]">
        {/* Subtle vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-[#D4621A]/5 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-24 md:pt-32 md:pb-36">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-5">
            Fort Wayne, Indiana
          </p>

          <h1 className="font-oswald font-bold text-5xl sm:text-7xl md:text-8xl text-white leading-none mb-6">
            Stumps Gone.<br />
            <span className="text-[#D4621A]">Yard Restored.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Fort Wayne's father &amp; son stump grinding crew. We schedule route days —
            get on the list for your area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/estimate"
              className="inline-block bg-[#D4621A] text-white font-bold text-sm px-8 py-4 rounded hover:bg-[#bb5517] transition-colors text-center tracking-wide"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+12602670093"
              className="inline-block border-2 border-white/40 text-white font-bold text-sm px-8 py-4 rounded hover:border-white hover:bg-white/5 transition-colors text-center tracking-wide"
            >
              Call or Text (260) 267-0093
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="bg-[#111] border-y border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <TrustBadge
              label="Licensed & Insured"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <TrustBadge
              label="Tracked Equipment"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              }
            />
            <TrustBadge
              label="Backyard Access"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <TrustBadge
              label="Contractor Friendly"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ── Equipment Photo ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
            {/* Placeholder — swap this div for an <img> when photo is ready */}
            <div className="aspect-video bg-gradient-to-br from-[#1e1e1e] to-[#141414] flex flex-col items-center justify-center gap-4">
              <svg className="w-16 h-16 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600 text-sm font-medium">Equipment photo coming soon</p>
            </div>
            <div className="px-6 py-5 bg-[#0f0f0f] border-t border-gray-800">
              <p className="text-gray-400 text-sm text-center">
                <span className="text-white font-semibold">Barreto 30SG Tracked Stump Grinder</span>
                {' '}— Professional grade equipment on every job
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-[#111] border-y border-gray-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs mb-5">
            Who We Are
          </p>
          <h2 className="font-oswald font-bold text-3xl sm:text-4xl text-white mb-6 leading-tight">
            Local Crew. Efficient Routes. Fair Prices.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We're a father and son crew serving Fort Wayne homeowners and sub-contracting
            for landscape and tree companies. We batch jobs into efficient route days so
            we can keep prices fair and turnaround fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about"
              className="text-[#D4621A] font-bold text-sm uppercase tracking-wider hover:text-white transition-colors"
            >
              Our Story →
            </Link>
            <span className="text-gray-700 hidden sm:block">|</span>
            <Link
              to="/services"
              className="text-gray-400 font-bold text-sm uppercase tracking-wider hover:text-white transition-colors"
            >
              View Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#D4621A] rounded-2xl px-8 py-14 text-center">
            <h2 className="font-oswald font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to Get Your Stumps Gone?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Fast response. Usually same day. No nonsense.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/estimate"
                className="bg-white text-[#D4621A] font-bold text-sm px-8 py-4 rounded hover:bg-gray-100 transition-colors tracking-wide"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:+12602670093"
                className="border-2 border-white text-white font-bold text-sm px-8 py-4 rounded hover:bg-white/10 transition-colors tracking-wide"
              >
                Call (260) 267-0093
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
