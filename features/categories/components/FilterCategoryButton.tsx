import { useState } from 'react'
import { Text } from 'react-native'
import { SortModal } from '../../products/components/SortModal'
import { SortOption, SortOrder } from '../../products/products.types'
import { useProductsStore } from '@/features/products/products.store'
import Octicons from '@expo/vector-icons/Octicons'
import { useTheme } from '@/shared/hooks/useTheme'
import { Button } from '@/shared/components/button'

export const FilterCategoryButton = () => {
  const { colors } = useTheme()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { sortOption, sortOrder, setSortOption, setSortOrder } =
    useProductsStore()

  const handleSortApply = (option: SortOption['value'], order: SortOrder) => {
    setSortOption(option)
    setSortOrder(order)
  }

  return (
    <>
      <Button onPress={() => setIsModalVisible(true)} variant='icon'>
        <Octicons name='sort-desc' size={24} color={colors.black} />
        <Text className='font-product-sans-bold text-xl'>Sort</Text>
      </Button>
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
