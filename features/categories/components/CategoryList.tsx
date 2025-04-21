import { FlatList } from 'react-native'
import { CategoryTag, CategoryTagProps } from './CategoryTag'
import { Category } from '../categories.types'
import { SKELETON_CATEGORIES } from '../categories.consts'

export type CategoryListProps = {
  categories: Category[] | undefined
  isLoading: CategoryTagProps['isLoading']
  selectedCategory: Category
  setSelectedCategory: (category: Category) => void
}

export const CategoryList = ({
  categories,
  isLoading,
  selectedCategory,
  setSelectedCategory,
}: CategoryListProps) => (
  <FlatList
    contentContainerClassName='gap-4'
    data={isLoading ? SKELETON_CATEGORIES : categories}
    horizontal
    keyExtractor={(category) => category.slug}
    renderItem={({ item }) => {
      const isSelected = item.slug === selectedCategory.slug

      return (
        <CategoryTag
          {...item}
          key={item.slug}
          isLoading={isLoading}
          isSelected={isSelected}
          setSelectedCategory={setSelectedCategory}
        />
      )
    }}
  />
)
