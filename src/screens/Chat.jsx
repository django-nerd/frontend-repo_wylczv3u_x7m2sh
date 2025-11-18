import { Send, CircleDot, IndianRupee, GitCompareArrows, CheckCheck } from 'lucide-react'

export default function Chat() {
  const bubbles = [
    { me:false, text:'Is this still available?' },
    { me:true, text:'Yes! Still available.' },
    { me:false, text:'Would you accept ₹2000?' },
  ]
  return (
    <div className="flex flex-col h-[calc(100vh-160px)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {bubbles.map((b,i)=> (
          <div key={i} className={`max-w-[75%] rounded-2xl px-3 py-2 ${b.me?'ml-auto bg-[#4A6CF7] text-white':'bg-white'} shadow-sm border ${b.me?'border-[#4A6CF7]/20':'border-neutral-100'}`}>{b.text}</div>
        ))}

        <div className="flex gap-2">
          <button className="flex-1 rounded-xl bg-white border border-neutral-200 px-3 py-2 flex items-center justify-center gap-2"><IndianRupee size={18}/> 2,000</button>
          <button className="flex-1 rounded-xl bg-white border border-neutral-200 px-3 py-2 flex items-center justify-center gap-2"><GitCompareArrows size={18}/> Counter</button>
          <button className="flex-1 rounded-xl bg-[#4A6CF7]/10 text-[#4A6CF7] border border-[#4A6CF7]/30 px-3 py-2 flex items-center justify-center gap-2"><CheckCheck size={18}/> Accept</button>
        </div>
      </div>

      <div className="p-3 bg-white/80 backdrop-blur border-t border-neutral-200">
        <div className="flex items-center gap-2">
          <input placeholder="Type a message" className="flex-1 rounded-xl border border-neutral-200 px-3 py-2"/>
          <button className="rounded-xl bg-[#4A6CF7] text-white p-2"><Send size={18}/></button>
        </div>
      </div>
    </div>
  )
}
