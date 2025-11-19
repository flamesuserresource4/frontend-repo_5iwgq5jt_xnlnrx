import React from 'react'

const testimonials = [
  {
    quote: 'Feels like home and future in the same piece. Weight, fit, story — perfect.',
    name: 'Ayaan — South London',
  },
  {
    quote: 'Understated, rooted, premium. Finally streetwear that speaks our language.',
    name: 'Imaan — Bradford',
  },
  {
    quote: 'The Raakh tee is my go-to — clean, soft, and strong.',
    name: 'Zoya — Birmingham',
  },
]

const Community = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">Community</h2>
          <p className="mt-3 text-zinc-600">British-Kashmiri / Mirpuri voices shaping a modern identity.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-zinc-200 p-6">
              <p className="text-zinc-900">“{t.quote}”</p>
              <p className="mt-4 text-sm text-zinc-600">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community
