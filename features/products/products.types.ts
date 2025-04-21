export type Product = {
  availabilityStatus: string
  brand?: string
  category: string
  description: string
  dimensions: Dimensions
  discountPercentage: number
  id: number
  images: string[]
  meta: Meta
  minimumOrderQuantity: number
  price: number
  rating: number
  returnPolicy: string
  reviews: string[][]
  shippingInformation: string
  sku: string
  stock: number
  tags: string[]
  thumbnail: string
  title: string
  warrantyInformation: string
  weight: number
}

export interface Dimensions {
  depth: number
  height: number
  width: number
}

export interface Meta {
  barcode: string
  createdAt: string
  qrCode: string
  updatedAt: string
}

export type SortOption = {
  label: string
  value: 'price' | 'rating' | 'none'
}

export type SortOrder = 'asc' | 'desc'
