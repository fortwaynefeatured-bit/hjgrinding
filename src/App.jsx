import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pb-16 sm:pb-0">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/estimate" element={<Contact />} />
      </Routes>
      <Footer />

      {/* Sticky mobile CTA — hidden on sm and up */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden border-t border-gray-800 shadow-2xl">
        <a
          href="tel:+12602670093"
          className="flex-1 bg-[#D4621A] text-white font-bold text-sm py-4 text-center hover:bg-[#bb5517] transition-colors tracking-wide"
        >
          Call (260) 267-0093
        </a>
        <a
          href="sms:+12602670093"
          className="flex-1 bg-[#111] text-white font-bold text-sm py-4 text-center hover:bg-[#1a1a1a] transition-colors tracking-wide"
        >
          Text Us
        </a>
      </div>
    </div>
  )
}
