import { CreditCard, Truck, CheckCircle2 } from 'lucide-react'

export default function Orders() {
  return (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
        <div className="font-semibold mb-3">Payment</div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-8 rounded-lg bg-gradient-to-br from-[#4A6CF7] to-[#6ea1ff]" />
          <div className="text-sm text-neutral-700">Visa •••• 1120</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
        <div className="font-semibold mb-3">Order Status</div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="text-emerald-500"/> Confirmed</div>
          <div className="flex items-center gap-2 text-sm"><Truck className="text-[#4A6CF7]"/> Shipped</div>
          <div className="flex items-center gap-2 text-sm"><CreditCard className="text-neutral-500"/> Payment Held</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
        <div className="font-semibold mb-2">Tracking</div>
        <div className="text-sm text-neutral-600">AWB 123456789 • Expected delivery in 2 days</div>
      </div>
    </div>
  )
}
