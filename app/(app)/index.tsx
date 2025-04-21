import { View, Text } from 'react-native'
import { useState, useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  useProducts,
  useProductsByCategory,
} from '../../features/products/products.hooks'
import { useCategories } from '../../features/categories/categories.hooks'
import { ProductList } from '@/features/products/components/ProductList'
import { ErrorScreen } from '@/shared/components/errorScreen'
import { CategoryList } from '@/features/categories/components/CategoryList'
import { FilterCategoryButton } from '@/features/categories/components/FilterCategoryButton'
import { isAllCategorySelected } from '@/features/categories/categories.utils'
import { useProductsStore } from '@/features/products/products.store'
import { sortProducts } from '@/features/products/products.utils'

export default function Home() {
  const {
    data: allProducts,
    error: productsError,
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
  } = useProducts()
  const {
    data: categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
    refetch: refetchCategories,
    selectedCategory,
    setSelectedCategory,
  } = useCategories()
  const { data: filteredProducts } = useProductsByCategory(
    selectedCategory.slug
  )
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const { sortOption, sortOrder } = useProductsStore()

  const error = productsError || categoriesError
  const unsortedProducts = isAllCategorySelected(selectedCategory)
    ? allProducts
    : filteredProducts

  const products = useMemo(() => {
    if (!unsortedProducts) return []
    return sortProducts(unsortedProducts, sortOption, sortOrder)
  }, [unsortedProducts, sortOption, sortOrder])

  const refetchAll = () => Promise.all([refetchCategories(), refetchProducts()])

  const onRefresh = async () => {
    setRefreshing(true)
    await refetchAll()
    setRefreshing(false)
  }

  if (error) return <ErrorScreen error={error} retry={refetchAll} />

  return (
    <SafeAreaView className='bg-white flex-1'>
      <ProductList
        isLoading={isLoadingProducts}
        ListHeaderComponent={
          <View className='bg-white gap-4 pb-4'>
            <View className='flex-row items-center justify-between'>
              <Text className='font-product-sans-bold text-2xl text-green-600'>
                Modak Store
              </Text>
              <FilterCategoryButton />
            </View>
            <CategoryList
              categories={categories}
              isLoading={isLoadingCategories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </View>
        }
        onRefresh={onRefresh}
        refreshing={refreshing}
        products={products}
      />
    </SafeAreaView>
  )
}
