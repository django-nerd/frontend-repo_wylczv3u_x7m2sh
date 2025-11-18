import { useParams, Link } from 'react-router-dom'
import { Star, BadgeCheck, ArrowLeft } from 'lucide-react'

export default function ProductDetail() {
  const { id } = useParams()
  const item = {
    title: 'Nike Dunk Low Panda',
    price: 12999,
    original: 14999,
    condition: 'Like New',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=60',
    ],
  }

  return (
    <div>
      <div className="relative">
        <Link to="/home" className="absolute top-3 left-3 z-10 bg-white rounded-full p-2 border border-neutral-200 shadow"><ArrowLeft size={18}/></Link>
        <div className="aspect-square bg-neutral-100 overflow-hidden rounded-b-3xl">
          <img src={item.images[0]} alt="" className="w-full h-full object-cover"/>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <div className="inline-block text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{item.condition}</div>
          <h1 className="text-xl font-semibold mt-1">{item.title}</h1>
          <div className="flex items-end gap-2 mt-1">
            <div className="text-2xl font-bold">₹{item.price.toLocaleString()}</div>
            <div className="text-neutral-500 line-through">₹{item.original.toLocaleString()}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-2xl p-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-neutral-200"/>
          <div className="flex-1">
            <div className="font-medium flex items-center gap-1">Karan Mehta <BadgeCheck size={16} className="text-[#4A6CF7]"/></div>
            <div className="text-sm text-neutral-600 flex items-center gap-1"><Star size={14} className="text-yellow-400"/> 4.8 • 120 sales</div>
          </div>
          <Link to="/chat" className="text-[#4A6CF7] text-sm">Message</Link>
        </div>

        <div className="bg-white border border-neutral-100 rounded-2xl p-3 shadow-sm">
          <div className="font-medium mb-1">Shipping</div>
          <div className="text-sm text-neutral-600">Ships in 2-3 days • Tracked delivery • Return not accepted</div>
        </div>
      </div>

      <div className="sticky bottom-0 p-4 bg-gradient-to-t from-white to-transparent">
        <div className="grid grid-cols-2 gap-3">
          <button className="rounded-xl border border-[#4A6CF7] text-[#4A6CF7] py-3 font-medium">Make Offer</button>
          <button className="rounded-xl bg-[#4A6CF7] text-white py-3 font-medium shadow-[0_8px_20px_rgba(74,108,247,0.35)]">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
