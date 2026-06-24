import { Link } from 'react-router-dom'

function ValueCard({ title, body }) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-7 hover:border-gray-700 transition-colors">
      <div className="w-2 h-8 bg-[#D4621A] rounded-full mb-5" />
      <h3 className="font-oswald font-bold text-xl text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
    </div>
  )
}

export default function About() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="text-center mb-16 pt-8">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs mb-4">
            Our Story
          </p>
          <h1 className="font-oswald font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-none">
            Two Guys. One Truck.<br />
            <span className="text-[#D4621A]">No Stumps Left Behind.</span>
          </h1>
        </div>

        {/* Photo + bio */}
        <div className="md:flex gap-12 items-start mb-16">
          {/* Team photo placeholder */}
          <div className="md:w-2/5 mb-10 md:mb-0 shrink-0">
            <div className="aspect-[3/4] bg-[#111] border border-gray-800 rounded-2xl flex flex-col items-center justify-center gap-4">
              <svg className="w-16 h-16 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="text-center px-8">
                <p className="text-gray-500 text-sm font-medium">Dana &amp; Jordan Higgins</p>
                <p className="text-gray-700 text-xs mt-1">Team photo coming soon</p>
              </div>
            </div>
          </div>

          {/* Bio content */}
          <div className="md:w-3/5 space-y-5">
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-200 text-lg leading-relaxed">
                Higgins &amp; Jordan Grinding Co. is a father and son operation. Dana and Jordan
                Higgins have called Indiana home since 1999 and the Fort Wayne area since 2012.
                We started this business because we believe local service should mean showing up
                on time, doing the job right, and leaving your yard cleaner than we found it.
              </p>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-200 text-lg leading-relaxed">
                We work with homeowners directly and sub-contract for landscape and tree companies
                who need a dependable grinding crew. We answer our phones, we show up when we say
                we will, and we don't leave until the job is done.
              </p>
            </div>

            {/* Home stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#D4621A]/10 border border-[#D4621A]/20 rounded-2xl p-6 text-center">
                <div className="font-oswald font-bold text-4xl text-[#D4621A] leading-none mb-2">
                  '99
                </div>
                <div className="text-gray-400 text-sm font-semibold">Indiana roots</div>
              </div>
              <div className="bg-[#D4621A]/10 border border-[#D4621A]/20 rounded-2xl p-6 text-center">
                <div className="font-oswald font-bold text-4xl text-[#D4621A] leading-none mb-2">
                  '12
                </div>
                <div className="text-gray-400 text-sm font-semibold">Fort Wayne area</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-oswald font-bold text-2xl sm:text-3xl text-white text-center mb-8">
            How We Work
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <ValueCard
              title="We Show Up"
              body="If we say we'll be there, we'll be there. No ghosting, no last-minute reschedules without a call."
            />
            <ValueCard
              title="We Answer Our Phones"
              body="Call or text us. We respond fast — usually same day for estimates and questions."
            />
            <ValueCard
              title="We Leave It Clean"
              body="Grindings raked, site cleaned up. We leave your yard ready for whatever comes next."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/estimate"
            className="inline-block bg-[#D4621A] text-white font-bold text-sm px-10 py-4 rounded hover:bg-[#bb5517] transition-colors tracking-wide"
          >
            Get a Free Estimate
          </Link>
          <p className="text-gray-600 text-sm mt-4">
            Or call / text us at{' '}
            <a href="tel:+12602670093" className="text-gray-400 hover:text-white transition-colors">
              (260) 267-0093
            </a>
          </p>
        </div>

      </div>
    </main>
  )
}
