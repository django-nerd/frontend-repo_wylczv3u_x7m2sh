import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
import { Home, PlusCircle, MessageSquareMore, ShoppingBag, User, Search, ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import Onboarding from './screens/Onboarding'
import Auth from './screens/Auth'
import HomeFeed from './screens/HomeFeed'
import ProductDetail from './screens/ProductDetail'
import SellItem from './screens/SellItem'
import Chat from './screens/Chat'
import Orders from './screens/Orders'
import Profile from './screens/Profile'
import MobileShell from './components/MobileShell'

function BottomNav() {
  const location = useLocation()
  const items = [
    { to: '/home', label: 'Home', icon: Home },
    { to: '/sell', label: 'Sell', icon: PlusCircle },
    { to: '/chat', label: 'Chat', icon: MessageSquareMore },
    { to: '/orders', label: 'Orders', icon: ShoppingBag },
    { to: '/profile', label: 'Profile', icon: User },
  ]

  const hideOn = ['/','/auth']
  const hidden = hideOn.includes(location.pathname)

  return (
    <div className={`transition-all ${hidden ? 'opacity-0 pointer-events-none translate-y-6' : 'opacity-100'} `}>
      <nav className="mx-auto w-full max-w-[430px] rounded-2xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/40">
        <ul className="grid grid-cols-5 text-sm text-neutral-600">
          {items.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to
            return (
              <li key={to}>
                <Link to={to} className="flex flex-col items-center gap-1 py-3">
                  <div className={`rounded-full p-2 ${active ? 'bg-[#4A6CF7]/10 text-[#4A6CF7]' : 'text-neutral-600'}`}>
                    <Icon size={20} />
                  </div>
                  <span className={`${active ? 'text-[#1F1F1F] font-medium' : ''}`}>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F5F9] to-white text-[#1F1F1F]">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(closest-side,rgba(74,108,247,0.12),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-[480px] px-4 pt-6 pb-24">
        <header className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white shadow-sm grid place-items-center border border-white/60">
              <div className="w-4 h-4 rounded-md bg-[#4A6CF7]" />
            </div>
            <div className="text-lg font-semibold">Resell</div>
          </Link>
          <Link to="/auth" className="text-sm text-[#4A6CF7] flex items-center gap-1">
            Sign in <ArrowRight size={16} />
          </Link>
        </header>

        <Routes>
          <Route index element={<Onboarding hero={<Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />} />} />
          <Route path="auth" element={<Auth />} />
          <Route path="home" element={<MobileShell><HomeFeed /></MobileShell>} />
          <Route path="product/:id" element={<MobileShell><ProductDetail /></MobileShell>} />
          <Route path="sell" element={<MobileShell><SellItem /></MobileShell>} />
          <Route path="chat" element={<MobileShell><Chat /></MobileShell>} />
          <Route path="orders" element={<MobileShell><Orders /></MobileShell>} />
          <Route path="profile" element={<MobileShell><Profile /></MobileShell>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <div className="fixed bottom-4 left-0 right-0 px-4">
        <BottomNav />
      </div>
    </div>
  )
}
