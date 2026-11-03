import { useState } from 'react'
import AddProductDialog from './components/AddProductDialog'
import Notice from './components/Notice'
import PageHeader from './components/PageHeader'
import ProductFilters from './components/ProductFilters'
import ProductGrid from './components/ProductGrid'
import Sidebar from './components/Sidebar'
import { initialProducts } from './data/products'
import type { Product, ProductCategory } from './types'

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | 'All products'
  >('All products')
  const [search, setSearch] = useState('')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [notice, setNotice] = useState('')

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All products' ||
      product.category === selectedCategory
    const matchesSearch = `${product.name} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())

    return matchesCategory && matchesSearch
  })

  function addProduct(name: string, category: ProductCategory, price: number) {
    const categoryImage = initialProducts.find(
      (product) => product.category === category,
    )?.image

    if (!categoryImage) {
      throw new Error(`No product image is available for ${category}.`)
    }

    const product: Product = {
      id: Date.now(),
      name,
      category,
      price,
      status: 'In stock',
      inventory: 1,
      image: categoryImage,
      updated: 'Just added',
    }

    setProducts((currentProducts) => [product, ...currentProducts])
    setSelectedCategory('All products')
    setSearch('')
    setNotice(`${name} was added to your catalog.`)
    setIsAddDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-page text-ink lg:flex">
      <Sidebar productCount={products.length} />
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <PageHeader onAddProduct={() => setIsAddDialogOpen(true)} />
        <section
          aria-labelledby="products-heading"
          className="mt-8"
          id="products"
        >
          <ProductFilters
            onCategoryChange={setSelectedCategory}
            onSearchChange={setSearch}
            productCount={products.length}
            resultCount={filteredProducts.length}
            search={search}
            selectedCategory={selectedCategory}
          />
          <ProductGrid
            onManage={(product) =>
              setNotice(`Showing details for ${product.name}.`)
            }
            products={filteredProducts}
          />
        </section>
      </main>
      {isAddDialogOpen && (
        <AddProductDialog
          onAdd={addProduct}
          onClose={() => setIsAddDialogOpen(false)}
        />
      )}
      {notice && <Notice message={notice} onDismiss={() => setNotice('')} />}
    </div>
  )
}

export default App
