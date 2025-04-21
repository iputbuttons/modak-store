import { useQuery } from '@tanstack/react-query'
import { categoriesApi } from './categories.api'
import { ALL_CATEGORY } from './categories.consts'
import { Category } from './categories.types'
import { useState } from 'react'

export const useCategories = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(ALL_CATEGORY)

  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesApi.getCategories,
  })

  return {
    ...categoriesQuery,
    selectedCategory,
    setSelectedCategory,
  }
}
