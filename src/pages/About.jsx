import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const PAGE_TITLE = 'About Stump Chief — Local Fort Wayne Stump Grinding'
const PAGE_DESC = 'Stump Chief is a Fort Wayne-based stump grinding operation. Local crew, efficient route days, licensed and insured. Serving Allen County since 2012.'
const OG_IMAGE = 'https://stumpchief.com/images/action2.jpg'

function ValueCard({ icon, label, description }) {
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
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href="https://stumpchief.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stump Chief" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content="https://stumpchief.com/about" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="text-center mb-12 pt-8">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs mb-4">
            Our Story
          </p>
          <h1 className="font-oswald font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-none mb-6">
            One Operator.<br />
            <span className="text-[#D4621A]">No Stumps Left Behind.</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            A local stump grinding operation serving Fort Wayne homeowners and contractors.
          </p>
        </div>

        {/* Bio block 1 */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 sm:p-10 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Stump Chief is a Fort Wayne-based stump grinding service built around one principle:
            do the job right, be clear about pricing and expectations, and charge a fair rate.
            We've been in the Fort Wayne area since 2012 and run this as a local owner-operated
            business — not a franchise, not a call center.
          </p>
        </div>

        {/* Bio block 2 */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 sm:p-10 mb-14">
          <p className="text-gray-300 text-lg leading-relaxed">
            We batch jobs into efficient route days across Fort Wayne and surrounding areas —
            which keeps travel costs down and lets us pass fair pricing along. Whether you're
            a homeowner with one stubborn stump or a landscape company that needs a reliable
            grinding partner, we communicate clearly and show up when scheduled.
          </p>
        </div>

        {/* Values */}
        <div className="mb-14">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs text-center mb-8">
            How We Work
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ValueCard
              label="We Show Up"
              description="If we schedule a job, we're there. No last-minute no-shows or ghosting."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <ValueCard
              label="We Communicate Clearly"
              description="We confirm timing, explain what to expect, and let you know if anything changes."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <ValueCard
              label="Straightforward Pricing"
              description="We quote before we schedule. No surprises after the job is done."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              <a
                href="sms:+12602670093"
                className="bg-white text-[#D4621A] font-bold text-sm px-8 py-4 rounded hover:bg-gray-100 transition-colors tracking-wide w-full sm:w-auto text-center"
              >
                Text a Photo for Estimate
              </a>
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
