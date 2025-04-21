import { Category } from '../categories/categories.types'
import { Product } from './products.types'

const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}/products`

export const productsApi = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${apiUrl}?limit=100`)
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    const data = await response.json()
    return data.products
  },

  async getProductById(id: Product['id']): Promise<Product> {
    const response = await fetch(`${apiUrl}/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch product')
    }
    return response.json()
  },

  async getProductsByCategory(category: Category['slug']): Promise<Product[]> {
    const response = await fetch(`${apiUrl}/category/${category}`)
    if (!response.ok) {
      throw new Error('Failed to fetch products by category')
    }
    const data = await response.json()
    return data.products
  },
}
