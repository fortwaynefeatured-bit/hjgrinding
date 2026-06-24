import { useState } from 'react'

const SIZE_OPTIONS = [
  { value: '', label: 'Select approximate size...' },
  { value: 'small', label: 'Small — under 12 inches' },
  { value: 'medium', label: 'Medium — 12 to 24 inches' },
  { value: 'large', label: 'Large — over 24 inches' },
  { value: 'mix', label: 'Mix of sizes' },
]

function Label({ children, required }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
      {children}
      {required && <span className="text-[#D4621A] ml-1">*</span>}
    </label>
  )
}

const inputClass =
  'w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 ' +
  'focus:outline-none focus:border-[#D4621A] transition-colors text-sm'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    stump_count: '',
    stump_size: '',
    is_contractor: false,
    notes: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/.netlify/functions/submit-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <main className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 w-full text-center">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-12">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-oswald font-bold text-3xl text-white mb-3">Got it!</h2>
            <p className="text-gray-400 text-lg mb-8">
              We'll be in touch shortly — usually same day.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+12602670093"
                className="block bg-[#D4621A] text-white font-bold py-4 rounded hover:bg-[#bb5517] transition-colors text-sm tracking-wide"
              >
                Call Us Now — (260) 267-0093
              </a>
              <a
                href="sms:+12602670093"
                className="block border border-gray-700 text-gray-300 font-bold py-4 rounded hover:border-gray-500 hover:text-white transition-colors text-sm"
              >
                Send a Text
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="text-center mb-10 pt-8">
          <p className="text-[#D4621A] font-bold uppercase tracking-[0.25em] text-xs mb-4">
            Free Estimate
          </p>
          <h1 className="font-oswald font-bold text-4xl sm:text-5xl text-white mb-4">
            Get a Free Estimate
          </h1>
          <p className="text-gray-400 text-base">
            Tell us about your stumps and we'll get back to you fast — usually same day.
          </p>
        </div>

        {/* Quick contact buttons */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <a
            href="tel:+12602670093"
            className="flex flex-col items-center justify-center bg-[#D4621A] text-white font-bold py-5 rounded-xl hover:bg-[#bb5517] transition-colors gap-1"
          >
            <span className="text-base">Call Us</span>
            <span className="text-xs font-normal opacity-80">(260) 267-0093</span>
          </a>
          <a
            href="sms:+12602670093"
            className="flex flex-col items-center justify-center border border-gray-700 text-gray-300 font-bold py-5 rounded-xl hover:border-gray-500 hover:text-white transition-colors gap-1"
          >
            <span className="text-base">Text Us</span>
            <span className="text-xs font-normal opacity-60">(260) 267-0093</span>
          </a>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-800" />
          <span className="text-gray-600 text-xs uppercase tracking-wider font-semibold">or fill out the form</span>
          <div className="flex-1 h-px bg-gray-800" />
        </div>

        {/* Estimate form */}
        <form onSubmit={handleSubmit} className="bg-[#111] border border-gray-800 rounded-2xl p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label required>Full Name</Label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Jane Smith"
                className={inputClass}
              />
            </div>
            <div>
              <Label required>Phone Number</Label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="(260) 555-0100"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <Label required>Service Address</Label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              placeholder="123 Main St, Fort Wayne, IN 46802"
              className={inputClass}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label required>Number of Stumps</Label>
              <input
                type="number"
                name="stump_count"
                value={form.stump_count}
                onChange={handleChange}
                required
                min="1"
                placeholder="1"
                className={inputClass}
              />
            </div>
            <div>
              <Label required>Approximate Size</Label>
              <select
                name="stump_size"
                value={form.stump_size}
                onChange={handleChange}
                required
                className={inputClass + ' cursor-pointer'}
              >
                {SIZE_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value} disabled={!value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-0.5 relative">
                <input
                  type="checkbox"
                  name="is_contractor"
                  checked={form.is_contractor}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 border border-gray-600 rounded bg-[#1a1a1a] peer-checked:bg-[#D4621A] peer-checked:border-[#D4621A] transition-colors flex items-center justify-center">
                  {form.is_contractor && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors leading-relaxed">
                I'm a contractor, landscaper, or tree service company
              </span>
            </label>
          </div>

          <div>
            <Label>Additional Notes</Label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Any details about the stumps, gate access, timeline, or other info that helps us give you an accurate estimate..."
              className={inputClass + ' resize-none'}
            />
          </div>

          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please call or text us directly at{' '}
                <a href="tel:+12602670093" className="font-bold underline">(260) 267-0093</a>.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#D4621A] text-white font-bold text-sm py-4 rounded-lg hover:bg-[#bb5517] transition-colors disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Estimate Request'}
          </button>

          <p className="text-gray-600 text-xs text-center">
            We'll get back to you usually same day. No spam, no pressure.
          </p>
        </form>
      </div>
    </main>
  )
}
