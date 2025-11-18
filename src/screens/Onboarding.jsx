import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const bullets = [
  { title: 'Sell fast', desc: 'List in seconds with smart pricing', icon: CheckCircle2 },
  { title: 'Verified buyers', desc: 'Trust badges and ratings for safety', icon: CheckCircle2 },
  { title: 'Secure payments', desc: 'Protected payouts with tracking', icon: CheckCircle2 },
]

export default function Onboarding({ hero }) {
  return (
    <div className="relative">
      <div className="h-64 rounded-[24px] overflow-hidden bg-white/60 backdrop-blur border border-white/70 mb-4">
        {hero}
      </div>

      <div className="p-5">
        <h1 className="text-2xl font-semibold mb-2">Buy and sell pre‑owned, the premium way</h1>
        <p className="text-neutral-600 mb-4">A modern marketplace with verified users, protected payments, and smooth shipping.</p>

        <ul className="space-y-3 mb-6">
          {bullets.map(({ title, desc, icon: Icon }) => (
            <li key={title} className="flex gap-3 items-start bg-white rounded-2xl p-3 shadow-sm border border-neutral-100">
              <div className="text-[#4A6CF7]"><Icon size={20} /></div>
              <div>
                <div className="font-medium">{title}</div>
                <div className="text-sm text-neutral-600">{desc}</div>
              </div>
            </li>
          ))}
        </ul>

        <Link to="/home" className="block text-center bg-[#4A6CF7] text-white rounded-xl py-3 font-medium shadow-[0_8px_20px_rgba(74,108,247,0.35)]">Get started</Link>
      </div>
    </div>
  )
}
