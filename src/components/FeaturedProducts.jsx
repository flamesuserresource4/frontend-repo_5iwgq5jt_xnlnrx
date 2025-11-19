import React from 'react'

const products = [
  {
    name: 'Saaya Obsidian Hoodie',
    subtitle: '480 GSM heavyweight',
    price: '£110',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2069&auto=format&fit=crop',
  },
  {
    name: 'Saaya Obsidian Trouser',
    subtitle: '480 GSM heavyweight',
    price: '£95',
    image: 'https://images.unsplash.com/photo-1692793544902-d8ea7fa38b63?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWF5YSUyME9ic2lkaWFuJTIwVHJvdXNlcnxlbnwwfDB8fHwxNzYzNTk2MDUzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Rait Tone Tee — Ivory',
    subtitle: 'Premium cotton',
    price: '£55',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Raakh Tee — Stone Wash',
    subtitle: 'Vintage stone finish',
    price: '£58',
    image: 'https://images.unsplash.com/photo-1611417190830-0613cb3c4847?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYWFraCUyMFRlZSUyMCVFMiU4MCU5NCUyMFN0b25lJTIwV2FzaHxlbnwwfDB8fHwxNzYzNTk2MDUzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

const FeaturedProducts = () => {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">Featured</h2>
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-zinc-900">{p.name}</p>
                  <p className="text-sm text-zinc-600">{p.subtitle}</p>
                </div>
                <p className="text-sm font-medium text-zinc-900">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
