import { categories } from '../data/products'
import type { ProductCategory } from '../types'
import Icon from './Icon'

type SelectedCategory = ProductCategory | 'All products'

function ProductFilters({
  onCategoryChange,
  onSearchChange,
  productCount,
  resultCount,
  search,
  selectedCategory,
}: {
  onCategoryChange: (category: SelectedCategory) => void
  onSearchChange: (search: string) => void
  productCount: number
  resultCount: number
  search: string
  selectedCategory: SelectedCategory
}) {
  return (
    <div className="mb-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-semibold text-ink" id="products-heading">
            Products
          </h2>
          <p className="mt-1 text-sm text-muted">
            Showing {resultCount} of {productCount} products
          </p>
        </div>
        <label className="relative block sm:w-64">
          <span className="sr-only">Search products</span>
          <Icon
            name="search"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
          />
          <input
            className="w-full rounded-md border border-line bg-white py-2 pl-9 pr-3 text-sm text-ink outline-none placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products"
            type="search"
            value={search}
          />
        </label>
      </div>
      <div
        aria-label="Filter by category"
        className="mt-4 flex gap-2 overflow-x-auto pb-1"
        id="categories"
        role="group"
      >
        {categories.map((category) => (
          <button
            aria-pressed={selectedCategory === category}
            className={`shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              selectedCategory === category
                ? 'bg-primary-light font-medium text-primary'
                : 'border border-line bg-white text-muted hover:bg-page hover:text-ink'
            }`}
            key={category}
            onClick={() => onCategoryChange(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductFilters
