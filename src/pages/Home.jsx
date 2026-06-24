import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const PAGE_TITLE = 'Stump Chief — Stump Grinding Fort Wayne, IN | (260) 267-0093'
const PAGE_DESC = "Fort Wayne's local stump grinding service. Fast scheduling, professional Barreto equipment, fair prices. Serving homeowners and contractors in Allen County. Free estimates."
const OG_IMAGE = 'https://stumpchief.com/images/action2.jpg'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Stump Chief',
  description: 'Professional stump grinding service in Fort Wayne, IN. Residential, multi-stump, and contractor work.',
  url: 'https://stumpchief.com',
  telephone: '+12602670093',
  priceRange: '$$',
  image: OG_IMAGE,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fort Wayne',
    addressRegion: 'IN',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.0793,
    longitude: -85.1394,
  },
  areaServed: {
    '@type': 'City',
    name: 'Fort Wayne',
  },
  serviceType: 'Stump Grinding',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '18:00',
  },
}

function TrustCard({ icon, label, description }) {
  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
      <div className="w-11 h-11 bg-[#D4621A]/10 border border-[#D4621A]/25 rounded-full flex items-center justify-center text-[#D4621A] mb-4">
        {icon}
      </div>
      <h3 className="text-white font-bold text-sm mb-2">{label}</h3>
      <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({ number, title, body }) {
  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 flex gap-4">
      <div className="w-8 h-8 bg-[#D4621A] rounded-full flex items-center justify-center shrink-0 font-oswald font-bold text-white text-sm">
        {number}
      </div>
      <div>
        <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
        <p className="text-gray-400 text-xs leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href="https://stumpchief.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stump Chief" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content="https://stumpchief.com/" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center">
        <img
          src="/images/action2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.50) 42%, rgba(0,0,0,.20) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111] to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-24 md:pt-32 md:pb-36">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-5">
            Fort Wayne, Indiana
          </p>

          <h1 className="font-oswald font-bold text-5xl sm:text-7xl md:text-8xl text-white leading-none mb-6">
            Stumps Gone.<br />
            <span className="text-[#D4621A]">Yard Back.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Fort Wayne's local stump grinding service. Text a photo for a fast
            estimate, fair pricing, and simple scheduling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="sms:+12602670093"
              className="inline-block bg-[#D4621A] text-white font-bold text-sm px-8 py-4 rounded hover:bg-[#bb5517] transition-colors text-center tracking-wide"
            >
              Text a Photo for Estimate
            </a>
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
      <section className="bg-[#111] border-b border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs text-center mb-8">
            Why Homeowners Call Us
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TrustCard
              label="Licensed & Insured"
              description="Professional local service with coverage on every job."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <TrustCard
              label="Compact Equipment for Backyard Access"
              description="Designed for tighter spaces, standard gates, and yards where larger machines may not fit."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              }
            />
            <TrustCard
              label="Careful Backyard Access"
              description="We pay attention to gates, slopes, fences, and lawn conditions before starting the job."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <TrustCard
              label="Clear Scheduling"
              description="We communicate clearly, confirm timing, and show up when scheduled."
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="bg-[#F4F1EA] border-b border-gray-200 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs mb-5">
            Who We Are
          </p>
          <h2 className="font-oswald font-bold text-3xl sm:text-4xl text-gray-900 mb-6 leading-tight">
            Local Service. Efficient Scheduling. Fair Pricing.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We help Fort Wayne area homeowners get unwanted stumps out of the way without
            overcomplicating the process. By organizing jobs into efficient route days, we keep
            travel time down, pricing fair, and turnaround fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about"
              className="text-[#D4621A] font-bold text-sm uppercase tracking-wider hover:opacity-75 transition-opacity"
            >
              Our Story →
            </Link>
            <span className="text-gray-400 hidden sm:block">|</span>
            <Link
              to="/services"
              className="text-gray-500 font-bold text-sm uppercase tracking-wider hover:text-gray-800 transition-colors"
            >
              View Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#111] border-b border-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs text-center mb-10">
            How It Works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <StepCard
              number="1"
              title="Text a Photo"
              body="Send a picture of the stump and the area around it."
            />
            <StepCard
              number="2"
              title="Share Your Address"
              body="We'll check your location, access, and route timing."
            />
            <StepCard
              number="3"
              title="Mention Access Details"
              body="Let us know about gates, fences, slopes, pets, or tight spaces."
            />
            <StepCard
              number="4"
              title="Get a Clear Estimate"
              body="We'll explain pricing, timing, and what to expect before scheduling."
            />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#D4621A] rounded-2xl px-8 py-10 text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="font-oswald font-bold text-3xl sm:text-4xl text-white mb-3">
                Got a stump in the way?
              </h2>
              <p className="text-white/80 text-base mb-7">
                Text us a photo, your address, and any access details for a fast estimate.
                We'll let you know pricing, timing, and what to expect before scheduling the job.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="sms:+12602670093"
                  className="bg-white text-[#D4621A] font-bold text-sm px-8 py-4 rounded hover:bg-gray-100 transition-colors tracking-wide"
                >
                  Text a Photo for Estimate
                </a>
                <a
                  href="tel:+12602670093"
                  className="border-2 border-white text-white font-bold text-sm px-8 py-4 rounded hover:bg-white/10 transition-colors tracking-wide"
                >
                  Call or Text (260) 267-0093
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
