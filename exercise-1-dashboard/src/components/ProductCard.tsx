import type { Product, ProductStatus } from '../types'

const statusStyles: Record<ProductStatus, string> = {
  'In stock': 'bg-green-50 text-green-700',
  'Low stock': 'bg-amber-50 text-amber-700',
  'Out of stock': 'bg-red-50 text-red-700',
}

function ProductCard({
  product,
  onManage,
}: {
  product: Product
  onManage: (product: Product) => void
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white">
      <img
        alt={product.name}
        className="aspect-[3/2] w-full bg-page object-cover"
        loading="lazy"
        src={product.image}
      />
      <div className="p-4">
        <p className="text-xs text-muted">{product.category}</p>
        <div className="mt-1 flex items-start justify-between gap-3">
          <h3 className="font-medium text-ink">{product.name}</h3>
          <p className="shrink-0 text-sm font-semibold text-ink">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <p className="mt-1 text-xs text-muted">{product.updated}</p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <div className="flex items-center gap-2">
            <span
              className={`rounded px-2 py-1 text-xs font-medium ${statusStyles[product.status]}`}
            >
              {product.status}
            </span>
            <span className="text-xs text-muted">
              {product.inventory} units
            </span>
          </div>
          <button
            className="rounded border border-line px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
            disabled={product.status === 'Out of stock'}
            onClick={() => onManage(product)}
            type="button"
          >
            Manage
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
