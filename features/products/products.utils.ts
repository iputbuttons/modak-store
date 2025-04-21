import { Product, SortOption, SortOrder } from './products.types'

export const sortProducts = (
  products: Product[],
  sortBy: SortOption['value'],
  sortOrder: SortOrder
) => {
  if (sortBy === 'none' || !products) {
    return products || []
  }

  return [...products].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] - b[sortBy]
    }
    return b[sortBy] - a[sortBy]
  })
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}
