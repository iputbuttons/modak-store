import { Category } from './categories.types'
import { ALL_CATEGORY } from './categories.consts'

const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}/products`

export const categoriesApi = {
  async getCategories(): Promise<Category[]> {
    const response = await fetch(`${apiUrl}/categories`)
    if (!response.ok) {
      throw new Error('Failed to fetch categories')
    }
    const categories = await response.json()

    return [ALL_CATEGORY, ...categories]
  },
}
