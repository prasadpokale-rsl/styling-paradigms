import Icon from './Icon'

function PageHeader({ onAddProduct }: { onAddProduct: () => void }) {
  return (
    <header
      className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between"
      id="overview"
    >
      <div>
        <h1 className="text-2xl font-semibold text-ink">Product catalog</h1>
        <p className="mt-1 text-sm text-muted">
          View and manage your store products.
        </p>
      </div>
      <button
        className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:self-auto"
        onClick={onAddProduct}
        type="button"
      >
        <Icon name="plus" className="size-4" />
        Add product
      </button>
    </header>
  )
}

export default PageHeader
