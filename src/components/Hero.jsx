import React from 'react'

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-60">
        <img
          src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=2070&auto=format&fit=crop"
          alt="AlifAin streetwear studio shot"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-zinc-200">
            AlifAin — Premium Streetwear
          </div>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Silhouette of the Soul
          </h1>
          <p className="mt-6 max-w-2xl text-zinc-200/80">
            British street culture. Kashmiri roots. Modern identity with enduring craftsmanship.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200">
              Shop the Edit
            </a>
            <a href="#identity" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              Our Identity
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
