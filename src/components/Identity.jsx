import React from 'react'

const Identity = () => {
  return (
    <section id="identity" className="bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Identity</h2>
            <p className="mt-6 text-zinc-700 leading-relaxed">
              AlifAin bridges East and West with quiet intention. We draw on Kashmiri and Mirpuri motifs — the fluid silhouette of the Kalij bird, calligraphic lines, slate and ivory tones — and refine them through a London design lens.
            </p>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              Construction is our language: dense fabrics, precise drape, resilient stitching. Each piece is built to live in — to move, to endure, to carry story.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2069&auto=format&fit=crop"
                alt="Detail — stitch work"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl bg-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1520975693416-35a1cb49866e?q=80&w=2067&auto=format&fit=crop"
                alt="Textile — heavy cotton"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl bg-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1540539234-c2d8d2fff016?q=80&w=2069&auto=format&fit=crop"
                alt="Symbol — Kalij bird silhouette"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl bg-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2069&auto=format&fit=crop"
                alt="Craft — hands at work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Identity
