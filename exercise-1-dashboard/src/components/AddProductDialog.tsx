import { useState, type FormEvent } from 'react'
import { categories } from '../data/products'
import type { ProductCategory } from '../types'
import Icon from './Icon'

function AddProductDialog({
  onClose,
  onAdd,
}: {
  onClose: () => void
  onAdd: (name: string, category: ProductCategory, price: number) => void
}) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState<ProductCategory>('Accessories')
  const [price, setPrice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onAdd(name.trim(), category, Number(price))
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        aria-labelledby="add-product-title"
        aria-modal="true"
        className="w-full max-w-md rounded-lg border border-line bg-white p-5 shadow-lg"
        role="dialog"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-ink" id="add-product-title">
            Add product
          </h2>
          <button
            aria-label="Close dialog"
            className="rounded p-1 text-muted hover:bg-page hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={onClose}
            type="button"
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-1 text-sm font-medium text-ink">
            Product name
            <input
              autoFocus
              className="w-full rounded-md border border-line px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. Weekend Tote"
              required
              value={name}
            />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block space-y-1 text-sm font-medium text-ink">
              Category
              <select
                className="w-full rounded-md border border-line bg-white px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                onChange={(event) =>
                  setCategory(event.target.value as ProductCategory)
                }
                value={category}
              >
                {categories.slice(1).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="block space-y-1 text-sm font-medium text-ink">
              Price
              <input
                className="w-full rounded-md border border-line px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                min="0.01"
                onChange={(event) => setPrice(event.target.value)}
                placeholder="0.00"
                required
                step="0.01"
                type="number"
                value={price}
              />
            </label>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              className="rounded-md border border-line px-3 py-2 text-sm text-ink hover:bg-page focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              type="submit"
            >
              Add product
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddProductDialog
