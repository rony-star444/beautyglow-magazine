'use client'
export default function ProductCard({ product }: any){
  return (
    <div className="bg-white rounded shadow overflow-hidden flex flex-col">
      <img src={product.img} alt={product.title} className="h-48 w-full object-cover"/>
      <div className="p-4 flex-1">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-muted mt-2">Short product description goes here.</p>
      </div>
      <div className="p-4 flex items-center justify-between border-t">
        <span className="font-semibold text-primary">${product.price}</span>
        <button className="px-3 py-1 border rounded">Add to Cart</button>
      </div>
    </div>
  )
}
