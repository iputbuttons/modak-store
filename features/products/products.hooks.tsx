import { useQuery } from '@tanstack/react-query'
import { Product } from './products.types'
import { productsApi } from './products.api'
import { Category } from '../categories/categories.types'

export const useProducts = () => {
  return useQuery({
    queryFn: productsApi.getProducts,
    queryKey: ['products'],
  })
}

export const useProductById = (id: Product['id']) => {
  return useQuery({
    enabled: !!id,
    queryFn: () => productsApi.getProductById(id),
    queryKey: ['products', id],
  })
}

export const useProductsByCategory = (category: Category['slug']) => {
  return useQuery({
    enabled: !!category,
    queryFn: () => productsApi.getProductsByCategory(category),
    queryKey: ['products', 'category', category],
  })
}
