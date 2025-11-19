import React from 'react'

const BrandStory = () => {
  return (
    <section className="bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Roots in motion</h2>
            <p className="mt-6 text-zinc-700 leading-relaxed">
              Born from journeys between Kashmir and the UK, AlifAin is a study in resilience and belonging. We craft modern silhouettes that carry stories of migration, memory, and pride — garments that move with you, grounded in heritage.
            </p>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              Every piece is designed with a premium hand-feel, structural weight, and the quiet confidence of minimal design. This is streetwear shaped by history — refined for the present.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1548883354-7622d3df1e2a?q=80&w=2080&auto=format&fit=crop"
                alt="Studio detail — heavy cotton fabric"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
