import { Category } from './categories.types'

export const ALL_CATEGORY = {
  name: 'All',
  slug: 'all',
  url: '',
}

export const SKELETON_CATEGORIES: Category[] = Array(6)
  .fill(null)
  .map((_, index) => ({
    name: '',
    slug: `skeleton-${index}`,
    url: '',
  }))
