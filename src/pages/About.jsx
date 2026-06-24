import { Link } from 'react-router-dom'

function CredCard({ icon, label, description }) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
      <div className="w-11 h-11 bg-[#D4621A]/10 border border-[#D4621A]/25 rounded-full flex items-center justify-center text-[#D4621A] mb-4">
        {icon}
      </div>
      <h3 className="text-white font-bold text-sm mb-2">{label}</h3>
      <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
    </div>
  )
}

export default function About() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="text-center mb-12 pt-8">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs mb-4">
            Our Story
          </p>
          <h1 className="font-oswald font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-none mb-6">
            Stump Chief<br />
            <span className="text-[#D4621A]">Fort Wayne</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            A local stump grinding operation serving Fort Wayne homeowners and contractors.
          </p>
        </div>

        {/* Core message */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 sm:p-10 mb-12 text-center max-w-2xl mx-auto">
          <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed">
            We answer the phone. We show up on time. We price fairly.
          </p>
        </div>

        {/* Why choose us */}
        <div className="mb-14">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs text-center mb-8">
            Why Homeowners Choose Us
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CredCard
              label="Licensed & Insured"
              description="Professional local service you can trust."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <CredCard
              label="Compact Tracked Equipment"
              description="Built for backyard access and tighter spaces."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              }
            />
            <CredCard
              label="Fair Pricing"
              description="Efficient route days help us keep costs down."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <CredCard
              label="Same-Day Estimates"
              description="We respond fast — usually same day."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-[#D4621A] rounded-2xl px-8 py-10 text-center">
          <div className="max-w-lg mx-auto">
            <h2 className="font-oswald font-bold text-2xl sm:text-3xl text-white mb-6">
              Ready to get your stump gone?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/estimate"
                className="bg-white text-[#D4621A] font-bold text-sm px-8 py-4 rounded hover:bg-gray-100 transition-colors tracking-wide w-full sm:w-auto text-center"
              >
                Text a Photo for Estimate
              </Link>
              <a
                href="tel:+12602670093"
                className="border-2 border-white text-white font-bold text-sm px-8 py-4 rounded hover:bg-white/10 transition-colors tracking-wide w-full sm:w-auto text-center"
              >
                Call or Text (260) 267-0093
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
