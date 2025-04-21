import { ALL_CATEGORY } from './categories.consts'
import { Category } from './categories.types'

export const isAllCategorySelected = (selectedCategory: Category) =>
  selectedCategory.slug === ALL_CATEGORY.slug
