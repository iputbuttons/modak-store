import { create } from 'zustand'
import { SortOption, SortOrder } from './products.types'

type ProductsStoreState = {
  sortOption: SortOption['value']
  sortOrder: SortOrder
  setSortOption: (option: SortOption['value']) => void
  setSortOrder: (order: SortOrder) => void
}

export const useProductsStore = create<ProductsStoreState>((set) => ({
  sortOption: 'none' as SortOption['value'],
  sortOrder: 'asc' as SortOrder,
  setSortOption: (option: SortOption['value']) => set({ sortOption: option }),
  setSortOrder: (order: SortOrder) => set({ sortOrder: order }),
}))
