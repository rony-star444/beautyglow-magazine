import Link from 'next/link'
export default function Home() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Your <span className="text-primary">Perfect</span> Look</h1>
        <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
          Professional makeup products, expert tutorials, and personalized beauty advice to help you shine.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/products"><a className="px-6 py-3 rounded-lg bg-primary text-white">Shop</a></Link>
          <Link href="/tutorials"><a className="px-6 py-3 rounded-lg border border-primary">Tutorials</a></Link>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg p-4 shadow">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=60" alt="article" className="h-40 w-full object-cover rounded"/>
              <h3 className="mt-4 font-semibold">Skincare Before Makeup</h3>
              <p className="text-sm text-muted mt-2">Always start with clean, moisturized skin for a flawless finish.</p>
            </article>
            <article className="bg-white rounded-lg p-4 shadow">
              <img src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=60" alt="article" className="h-40 w-full object-cover rounded"/>
              <h3 className="mt-4 font-semibold">Choosing the Right Foundation</h3>
              <p className="text-sm text-muted mt-2">Test foundation in natural light and match on the jawline.</p>
            </article>
            <article className="bg-white rounded-lg p-4 shadow">
              <img src="https://images.unsplash.com/photo-1504198458649-3128b932f49b?w=800&q=60" alt="article" className="h-40 w-full object-cover rounded"/>
              <h3 className="mt-4 font-semibold">Blending Techniques</h3>
              <p className="text-sm text-muted mt-2">Use circular motions and a damp sponge for a seamless base.</p>
            </article>
          </div>
        </section>

      </div>
    </section>
  )
}
