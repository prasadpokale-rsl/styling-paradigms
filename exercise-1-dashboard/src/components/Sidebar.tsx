import Icon from './Icon'

const navigation = [
  { label: 'Overview', href: '#overview', icon: 'grid' as const },
  { label: 'Products', href: '#products', icon: 'box' as const },
  { label: 'Categories', href: '#categories', icon: 'grid' as const },
]

function NavigationLinks({
  mobile = false,
  productCount,
}: {
  mobile?: boolean
  productCount: number
}) {
  return (
    <nav
      aria-label="Main navigation"
      className={
        mobile
          ? 'flex min-w-max gap-1 px-4 py-2'
          : 'flex flex-col gap-1'
      }
    >
      {navigation.map((item) => {
        const isCurrent = item.label === 'Products'
        return (
          <a
            aria-current={isCurrent ? 'page' : undefined}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              mobile ? 'px-3 py-2' : ''
            } ${
              isCurrent
                ? 'bg-primary-light font-medium text-primary'
                : 'text-muted hover:bg-page hover:text-ink'
            }`}
            href={item.href}
            key={item.label}
          >
            <Icon name={item.icon} className="size-4 shrink-0" />
            {item.label}
            {item.label === 'Products' && !mobile && (
              <span className="ml-auto text-xs text-muted">{productCount}</span>
            )}
          </a>
        )
      })}
    </nav>
  )
}

function Sidebar({ productCount }: { productCount: number }) {
  return (
    <>
      <header className="flex items-center justify-between border-b border-line bg-white px-4 py-3 lg:hidden">
        <a
          className="flex items-center gap-2 font-semibold text-ink"
          href="#overview"
        >
          <Icon name="box" className="size-5 text-primary" />
          Northstar
        </a>
        <span className="text-sm text-muted">Products</span>
      </header>
      <div className="overflow-x-auto border-b border-line bg-white lg:hidden">
        <NavigationLinks mobile productCount={productCount} />
      </div>
      <aside className="hidden min-h-screen w-56 shrink-0 border-r border-line bg-white px-4 py-6 lg:block">
        <a
          className="mb-9 flex items-center gap-2 px-2 font-semibold text-ink"
          href="#overview"
        >
          <Icon name="box" className="size-5 text-primary" />
          Northstar
        </a>
        <p className="mb-2 px-3 text-xs font-medium text-muted">Menu</p>
        <NavigationLinks productCount={productCount} />
      </aside>
    </>
  )
}

export default Sidebar
