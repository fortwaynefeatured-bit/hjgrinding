import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-[#D4621A] rounded flex items-center justify-center shrink-0">
                <span className="font-oswald font-bold text-white text-xs">H&J</span>
              </div>
              <span className="font-oswald font-semibold text-white text-base tracking-wide">
                Higgins &amp; Jordan Grinding Co.
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
            &copy; {new Date().getFullYear()} Higgins &amp; Jordan Grinding Co. &mdash; Fort Wayne, Indiana
          </p>
        </div>
      </div>
    </footer>
  )
}
