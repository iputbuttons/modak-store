import { useTheme } from '@/shared/hooks/useTheme'
import {
  FlatList,
  FlatListProps,
  RefreshControl,
  RefreshControlProps,
} from 'react-native'
import { ProductCard, ProductCardProps } from './ProductCard'
import { Product } from '../products.types'
import { SKELETON_PRODUCTS } from '../products.consts'

type ProductListProps = {
  isLoading: ProductCardProps['isLoading']
  ListHeaderComponent: FlatListProps<Product>['ListHeaderComponent']
  onRefresh: RefreshControlProps['onRefresh']
  products: Product[] | undefined
  refreshing: RefreshControlProps['refreshing']
}

export const ProductList = ({
  isLoading,
  ListHeaderComponent,
  onRefresh,
  products,
  refreshing,
}: ProductListProps) => {
  const { colors } = useTheme()

  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      columnWrapperClassName='gap-4'
      contentContainerClassName='gap-4 p-4'
      data={isLoading ? SKELETON_PRODUCTS : products}
      keyExtractor={(product) => product.id.toString()}
      numColumns={2}
      refreshControl={
        <RefreshControl
          colors={[colors.black]}
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor={colors.black}
        />
      }
      renderItem={({ item }) => (
        <ProductCard {...item} isLoading={isLoading} key={item.id} />
      )}
      stickyHeaderIndices={[0]}
    />
  )
}
