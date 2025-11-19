import React from 'react'

const items = [
  {
    name: 'Saaya Hoodie — Obsidian',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2069&auto=format&fit=crop',
  },
  {
    name: 'Saaya Trouser — Obsidian',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2069&auto=format&fit=crop',
  },
  {
    name: 'Rait Tone Tee — Ivory',
    image: 'https://images.unsplash.com/photo-1585140931037-c22b3be57138?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWF5YSUyMFRyb3VzZXIlMjAlRTIlODAlOTQlMjBPYnNpZGlhbnxlbnwwfDB8fHwxNzYzNTk2MDU0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Raakh Tee — Stone',
    image: 'https://images.unsplash.com/photo-1607752965029-01288b29b5a4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYWl0JTIwVG9uZSUyMFRlZSUyMCVFMiU4MCU5NCUyMEl2b3J5fGVufDB8MHx8fDE3NjM1OTYwNTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

const ProductGrid = () => {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">The Edit</h2>
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">Explore</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-zinc-200">
                <img src={i.image} alt={i.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-3 text-sm font-medium text-zinc-900">{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
