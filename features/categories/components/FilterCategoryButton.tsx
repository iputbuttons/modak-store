import { useState } from 'react'
import { Pressable } from 'react-native'
import { Filter } from '../icons/filter'
import { SortModal } from '../../products/components/SortModal'
import { SortOption, SortOrder } from '../../products/products.types'
import { useProductsStore } from '@/features/products/products.store'

export const FilterCategoryButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { sortOption, sortOrder, setSortOption, setSortOrder } =
    useProductsStore()

  const handleSortApply = (option: SortOption['value'], order: SortOrder) => {
    setSortOption(option)
    setSortOrder(order)
  }

  return (
    <>
      <Pressable onPress={() => setIsModalVisible(true)}>
        <Filter />
      </Pressable>

      <SortModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onApply={handleSortApply}
        currentSortOption={sortOption}
        currentSortOrder={sortOrder}
      />
    </>
  )
}
