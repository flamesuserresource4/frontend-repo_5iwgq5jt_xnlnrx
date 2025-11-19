import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-xl font-extrabold tracking-tight text-white">AlifAin</h3>
            <p className="mt-3 text-sm text-zinc-400 max-w-sm">Minimal streetwear with depth. Designed in Britain, rooted in Kashmir.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">TikTok</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-zinc-500">© {new Date().getFullYear()} AlifAin. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
