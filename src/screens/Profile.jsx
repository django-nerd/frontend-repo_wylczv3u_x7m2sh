import { Star, Package, Heart, Edit3, BadgeCheck } from 'lucide-react'

export default function Profile() {
  return (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-neutral-200"/>
          <div className="flex-1">
            <div className="font-semibold flex items-center gap-1">Aarav Shah <BadgeCheck size={18} className="text-[#4A6CF7]"/></div>
            <div className="text-sm text-neutral-600 flex items-center gap-1"><Star size={14} className="text-yellow-400"/> 4.9 • 230 sales</div>
          </div>
          <button className="rounded-xl border px-3 py-1.5 text-sm">Edit <Edit3 size={14} className="inline ml-1"/></button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl p-4 border border-neutral-100 text-center">
          <div className="text-2xl font-semibold">120</div>
          <div className="text-xs text-neutral-600">Listings</div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-neutral-100 text-center">
          <div className="text-2xl font-semibold">84</div>
          <div className="text-xs text-neutral-600">Sold</div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-neutral-100 text-center">
          <div className="text-2xl font-semibold">18</div>
          <div className="text-xs text-neutral-600">Saved</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
        <div className="font-semibold mb-3">My Listings</div>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className="aspect-square rounded-xl bg-neutral-100" />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
        <div className="font-semibold mb-2">Saved Items</div>
        <div className="flex gap-2 overflow-x-auto">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className="min-w-[140px] rounded-xl bg-neutral-100 aspect-[4/5]" />
          ))}
        </div>
      </div>
    </div>
  )
}
