import React from 'react'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import FeaturedProducts from './components/FeaturedProducts'
import Identity from './components/Identity'
import Community from './components/Community'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-zinc-200/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-extrabold tracking-tight">AlifAin</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a href="#products" className="hover:text-zinc-900">Products</a>
            <a href="#identity" className="hover:text-zinc-900">Identity</a>
            <a href="#community" className="hover:text-zinc-900">Community</a>
            <a href="#footer" className="hover:text-zinc-900">Help</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <BrandStory />
        <FeaturedProducts />
        <Identity />
        <Community />
        <ProductGrid />
      </main>

      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
