import { Product, SortOption } from './products.types'

export const SKELETON_PRODUCTS: Product[] = Array(8)
  .fill(null)
  .map((_, index) => ({
    id: index,
    title: '',
    price: 0,
    thumbnail: '',
    description: '',
    category: '',
    rating: 0,
    stock: 0,
    brand: '',
    discountPercentage: 0,
    images: [''],
    availabilityStatus: '',
    dimensions: { width: 0, height: 0, depth: 0 },
    meta: { barcode: '', createdAt: '', qrCode: '', updatedAt: '' },
    minimumOrderQuantity: 0,
    returnPolicy: '',
    reviews: [[]],
    shippingInformation: '',
    sku: '',
    tags: [],
    warrantyInformation: '',
    weight: 0,
  }))

export const SORT_OPTIONS: SortOption[] = [
  { label: 'Default', value: 'none' },
  { label: 'Price', value: 'price' },
  { label: 'Rating', value: 'rating' },
]
