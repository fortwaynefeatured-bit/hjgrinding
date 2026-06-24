import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-[#D4621A] rounded flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="3" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="21" y2="12" />
                  <line x1="5.6" y1="5.6" x2="7.8" y2="7.8" />
                  <line x1="16.2" y1="16.2" x2="18.4" y2="18.4" />
                  <line x1="18.4" y1="5.6" x2="16.2" y2="7.8" />
                  <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
                </svg>
              </div>
              <span className="font-oswald font-semibold text-white text-base tracking-wide">
                Stump Chief
              </span>
            </div>
            <p className="text-gray-500 text-sm">Serving Fort Wayne, IN and surrounding areas</p>
            <p className="text-gray-600 text-xs mt-1 uppercase tracking-wider font-semibold">Licensed &amp; Insured</p>
          </div>

          <div className="flex flex-col gap-2 md:text-right">
            <a
              href="tel:+12602670093"
              className="text-[#D4621A] font-bold text-xl hover:text-white transition-colors"
            >
              (260) 267-0093
            </a>
            <a
              href="sms:+12602670093"
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
            >
              Click to call or text
            </a>
            <nav className="flex gap-5 md:justify-end mt-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/estimate', label: 'Estimate' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-gray-600 text-xs hover:text-gray-300 transition-colors uppercase tracking-wider"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800/50 text-center">
          <p className="text-gray-700 text-xs">
            &copy; {new Date().getFullYear()} Stump Chief &mdash; Fort Wayne, Indiana
          </p>
        </div>
      </div>
    </footer>
  )
}
