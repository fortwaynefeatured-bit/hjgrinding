import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/estimate', label: 'Estimate' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0d0d] shadow-2xl' : 'bg-[#1a1a1a]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-[#D4621A] rounded flex items-center justify-center shrink-0">
              <span className="font-oswald font-bold text-white text-xs tracking-tight leading-none">H&J</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-oswald font-semibold text-white text-sm tracking-wide">
                Higgins &amp; Jordan
              </div>
              <div className="text-gray-500 font-medium text-xs tracking-wider uppercase">Grinding Co.</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === to
                    ? 'text-[#D4621A]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:+12602670093"
              className="bg-[#D4621A] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#bb5517] transition-colors tracking-wide"
            >
              (260) 267-0093
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-gray-800">
          {LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block px-6 py-4 text-xs font-bold uppercase tracking-widest border-b border-gray-800/50 ${
                location.pathname === to ? 'text-[#D4621A]' : 'text-gray-300'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="px-6 py-5 flex flex-col gap-3">
            <a
              href="tel:+12602670093"
              className="block text-center bg-[#D4621A] text-white font-bold py-3 rounded text-sm"
            >
              Call (260) 267-0093
            </a>
            <a
              href="sms:+12602670093"
              className="block text-center border border-gray-600 text-gray-300 font-bold py-3 rounded text-sm hover:border-white hover:text-white transition-colors"
            >
              Send a Text
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
