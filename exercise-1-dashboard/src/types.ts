export type ProductCategory = 'Audio' | 'Footwear' | 'Accessories'
export type ProductStatus = 'In stock' | 'Low stock' | 'Out of stock'

export type Product = {
  id: number
  name: string
  category: ProductCategory
  price: number
  status: ProductStatus
  inventory: number
  image: string
  updated: string
}
