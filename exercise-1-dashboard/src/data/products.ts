import type { Product } from '../types'

export const categories = [
  'All products',
  'Audio',
  'Footwear',
  'Accessories',
] as const

export const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Studio Wireless Headphones',
    category: 'Audio',
    price: 189,
    status: 'In stock',
    inventory: 124,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
    updated: 'Updated 2 hours ago',
  },
  {
    id: 2,
    name: 'Everyday Runner',
    category: 'Footwear',
    price: 118,
    status: 'Low stock',
    inventory: 8,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
    updated: 'Updated yesterday',
  },
  {
    id: 3,
    name: 'Leather Crossbody',
    category: 'Accessories',
    price: 145,
    status: 'In stock',
    inventory: 52,
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
    updated: 'Updated yesterday',
  },
  {
    id: 4,
    name: 'Minimal Face Watch',
    category: 'Accessories',
    price: 220,
    status: 'Out of stock',
    inventory: 0,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',
    updated: 'Updated 3 days ago',
  },
  {
    id: 5,
    name: 'Portable Bluetooth Speaker',
    category: 'Audio',
    price: 89,
    status: 'In stock',
    inventory: 76,
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',
    updated: 'Updated 4 days ago',
  },
  {
    id: 6,
    name: 'Cloud Knit Sneaker',
    category: 'Footwear',
    price: 132,
    status: 'Low stock',
    inventory: 5,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
    updated: 'Updated 5 days ago',
  },
]
