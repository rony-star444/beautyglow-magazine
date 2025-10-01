'use client'
import Link from 'next/link'
export default function Navbar(){
  return (
    <nav className="bg-white/60 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500"></div>
          <Link href="/"><a className="font-bold text-lg">BeautyGlow</a></Link>
        </div>
        <div className="hidden md:flex gap-6">
          <Link href="/products"><a>Products</a></Link>
          <Link href="/tutorials"><a>Tutorials</a></Link>
          <Link href="/tips"><a>Beauty Tips</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </div>
      </div>
    </nav>
  )
}
