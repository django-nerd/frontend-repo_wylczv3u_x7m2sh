import { Link } from 'react-router-dom'
import { Filter, Star, BadgeCheck, Search } from 'lucide-react'

const quickTags = ['Sneakers','Phones','Watches','Bags','Headphones']

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i+1,
  title: ['Nike Dunk Low','iPhone 13','Casio Edifice','Coach Tote','Sony WH-1000XM4'][i%5],
  price: [12999, 44999, 5999, 7999, 10999][i%5],
  condition: ['Like New','Good','New','Good','Fair'][i%5],
  img: `https://images.unsplash.com/photo-15${i}0?auto=format&fit=crop&w=800&q=60`,
}))

function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="block bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm">
      <div className="aspect-square bg-neutral-100" style={{backgroundImage:`url(${item.img})`,backgroundSize:'cover',backgroundPosition:'center'}} />
      <div className="p-3">
        <div className="text-sm text-neutral-600">{item.condition}</div>
        <div className="font-medium truncate">{item.title}</div>
        <div className="mt-1 text-[#1F1F1F] font-semibold">₹{item.price.toLocaleString()}</div>
      </div>
    </Link>
  )
}

export default function HomeFeed() {
  return (
    <div>
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-neutral-200 shadow-sm">
            <Search size={18} className="text-neutral-500"/>
            <input placeholder="Search products" className="w-full outline-none text-sm bg-transparent"/>
          </div>
          <button className="p-2 rounded-xl bg-white border border-neutral-200 shadow-sm"><Filter size={18}/></button>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
          {quickTags.map(t => (
            <button key={t} className="px-3 py-1.5 rounded-full text-sm bg-white border border-neutral-200 shadow-sm">{t}</button>
          ))}
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Featured sellers</h3>
            <button className="text-sm text-[#4A6CF7]">See all</button>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {Array.from({length:6}).map((_,i)=> (
              <div key={i} className="min-w-[160px] bg-white rounded-2xl p-3 border border-neutral-100 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-neutral-200"/>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Seller {i+1}</div>
                    <div className="text-xs text-neutral-600 flex items-center gap-1"><Star size={14} className="text-yellow-400"/> 4.{i}</div>
                  </div>
                  <BadgeCheck className="text-[#4A6CF7]" size={18}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-3">
        {products.map(p => <ProductCard key={p.id} item={p} />)}
      </div>
    </div>
  )
}
