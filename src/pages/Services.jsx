import { Helmet } from 'react-helmet-async'

const PAGE_TITLE = 'Stump Grinding Services — Residential & Contractor | Stump Chief'
const PAGE_DESC = 'Residential stump grinding, multi-stump pricing, and contractor sub-work in Fort Wayne, IN. Barreto 30SG tracked grinder — backyard access, clean results.'
const OG_IMAGE = 'https://stumpchief.com/images/action2.jpg'

function ServiceCard({ icon, title, body }) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
      <div className="w-12 h-12 bg-[#D4621A]/10 border border-[#D4621A]/20 rounded-xl flex items-center justify-center text-[#D4621A] mb-6">
        {icon}
      </div>
      <h2 className="font-oswald font-bold text-2xl text-white mb-4">{title}</h2>
      <p className="text-gray-400 leading-relaxed">{body}</p>
    </div>
  )
}

export default function Services() {
  return (
    <main className="pt-24 pb-20">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href="https://stumpchief.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stump Chief" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content="https://stumpchief.com/services" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="text-center mb-16 pt-8">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs mb-4">
            What We Do
          </p>
          <h1 className="font-oswald font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4">
            Services
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Residential, multi-stump, and contractor work. One crew, professional equipment, clean results.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <ServiceCard
            title="Residential Stump Grinding"
            body="We grind stumps flush to grade or below — ready for sod, landscaping, or replanting. No mess left behind."
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
          />
          <ServiceCard
            title="Multi-Stump Pricing"
            body="The more stumps, the better the rate. Get everything done in one visit and save on the per-stump price."
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            }
          />
          <ServiceCard
            title="Contractor & Sub Work"
            body="We work directly with landscape and tree companies who need a dependable grinding partner. Reliable scheduling, clean jobsites — we answer our phones."
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>

        {/* What's Included */}
        <div className="bg-[#111] border border-[#D4621A]/30 rounded-2xl p-8 mb-16">
          <h2 className="font-oswald font-bold text-2xl text-white mb-4">What's Included</h2>
          <p className="text-gray-300 leading-relaxed">
            Our standard service focuses on grinding the stump below grade so the area can be leveled,
            covered, or reused. Wood chips typically remain on site and can be used as natural backfill
            or mulch. Additional chip leveling or haul-away may be quoted separately when available.
          </p>
        </div>

        {/* Equipment Callout */}
        <div className="bg-[#111] border border-[#D4621A]/30 rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 shrink-0">
              <img
                src="/images/action3.jpg"
                alt="Barreto 30SG cutting wheel grinding a stump"
                className="w-full h-full object-cover min-h-[260px]"
              />
            </div>

            <div className="md:w-3/5 p-8 md:p-12">
              <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs mb-4">
                Access &amp; Results
              </p>
              <h3 className="font-oswald font-bold text-3xl text-white mb-5">
                Backyards. Tight Spaces.<br />Tough Stumps.
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We can access narrow gates and tight spaces where larger grinders won't fit.
                We grind stumps flush to grade or below, leaving your yard ready for sod,
                landscaping, or replanting. No damage. No mess.
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Gallery */}
        <div className="mt-16">
          <h2 className="font-oswald font-bold text-2xl sm:text-3xl text-white text-center mb-8">
            Equipment in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2 rounded-2xl overflow-hidden">
              <img
                src="/images/action4.jpg"
                alt="Barreto 30SG tracked stump grinder working in a wooded area"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img
                  src="/images/action2.jpg"
                  alt="Stump grinder on a residential lawn"
                  className="w-full h-full object-cover min-h-[150px]"
                />
              </div>
              <div className="rounded-2xl overflow-hidden flex-1">
                <img
                  src="/images/30sg-in-action.jpg"
                  alt="Barreto stump grinder with wood chips from the cutting wheel"
                  className="w-full h-full object-cover min-h-[150px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="sms:+12602670093"
            className="inline-block bg-[#D4621A] text-white font-bold text-sm px-10 py-4 rounded hover:bg-[#bb5517] transition-colors tracking-wide"
          >
            Text a Photo for Estimate
          </a>
          <p className="text-gray-600 text-sm mt-4">
            Or call us at{' '}
            <a href="tel:+12602670093" className="text-gray-400 hover:text-white transition-colors">
              (260) 267-0093
            </a>
          </p>
        </div>

      </div>
    </main>
  )
}
