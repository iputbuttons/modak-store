import { Pressable, Text, View } from 'react-native'
import { Category } from '../categories.types'
import { CategoryListProps } from './CategoryList'
import { Skeleton } from '@/shared/components/skeleton'

export type CategoryTagProps = Category & {
  setSelectedCategory: CategoryListProps['setSelectedCategory']
  isLoading: boolean
  isSelected: boolean
}

export const CategoryTag = ({
  isLoading,
  isSelected,
  name,
  setSelectedCategory,
  slug,
  url,
}: CategoryTagProps) => {
  if (isLoading) {
    return <Skeleton borderRadius={12} height={48} width={120} />
  }

  return (
    <Pressable onPress={() => setSelectedCategory({ name, slug, url })}>
      <View
        className={`px-6 py-4 rounded-xl ${
          isSelected ? 'bg-black' : 'bg-gray-200'
        }`}
      >
        <Text
          className={`font-product-sans ${
            isSelected ? 'text-white' : 'text-black'
          }`}
        >
          {name}
        </Text>
      </View>
    </Pressable>
  )
}
