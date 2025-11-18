import { Apple, Mail, Phone, ArrowLeft, Chrome } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Auth() {
  return (
    <div className="p-5">
      <Link to="/" className="inline-flex items-center gap-2 text-neutral-700 mb-4"><ArrowLeft size={18}/> Back</Link>

      <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Welcome back</h2>
        <p className="text-neutral-600 mb-4">Sign in to continue</p>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-neutral-200 py-3 bg-white hover:bg-neutral-50">
            <Mail size={18}/> Continue with Email
          </button>
          <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-neutral-200 py-3 bg-white hover:bg-neutral-50">
            <Phone size={18}/> Continue with Phone
          </button>
          <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-neutral-200 py-3 bg-white hover:bg-neutral-50">
            <Chrome size={18}/> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-neutral-200 py-3 bg-white hover:bg-neutral-50">
            <Apple size={18}/> Continue with Apple
          </button>
        </div>
      </div>
    </div>
  )
}
