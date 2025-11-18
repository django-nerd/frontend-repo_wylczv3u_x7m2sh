import { Camera, Tag, Package, ChevronRight } from 'lucide-react'

export default function SellItem() {
  return (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
        <div className="font-semibold mb-3">Upload Photos</div>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({length:5}).map((_,i)=> (
            <button key={i} className="aspect-square rounded-xl border-2 border-dashed border-neutral-200 grid place-items-center text-neutral-400">
              <Camera />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
        <div className="font-semibold mb-3">Details</div>
        <div className="space-y-3">
          <input placeholder="Title" className="w-full rounded-xl border border-neutral-200 px-3 py-2"/>
          <textarea placeholder="Description" className="w-full rounded-xl border border-neutral-200 px-3 py-2" rows={3}></textarea>
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-xl border border-neutral-200 px-3 py-2 flex items-center gap-2"><Tag size={18}/> <input placeholder="Price" className="w-full outline-none"/></div>
            <button className="rounded-xl px-3 py-2 bg-[#4A6CF7]/10 text-[#4A6CF7]">Suggest</button>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-neutral-200 px-3 py-2">
            <div className="text-neutral-700">Condition</div>
            <div className="text-neutral-500 flex items-center gap-1">Like New <ChevronRight size={16}/></div>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-neutral-200 px-3 py-2">
            <div className="text-neutral-700">Category</div>
            <div className="text-neutral-500 flex items-center gap-1">Sneakers <ChevronRight size={16}/></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
        <div className="font-semibold mb-2">Shipping</div>
        <div className="text-sm text-neutral-600">We provide prepaid labels after your item sells.</div>
      </div>

      <button className="w-full rounded-xl bg-[#4A6CF7] text-white py-3 font-medium shadow-[0_8px_20px_rgba(74,108,247,0.35)]">Post Item</button>
    </div>
  )
}
