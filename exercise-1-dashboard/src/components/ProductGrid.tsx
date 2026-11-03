import type { Product } from '../types'
import ProductCard from './ProductCard'

function ProductGrid({
  onManage,
  products,
}: {
  onManage: (product: Product) => void
  products: Product[]
}) {
  if (products.length === 0) {
    return (
      <p className="rounded-lg border border-line bg-white px-4 py-10 text-center text-sm text-muted">
        No products found. Try a different search or category.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          onManage={onManage}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid
