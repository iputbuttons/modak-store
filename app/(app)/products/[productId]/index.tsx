import { ProductDetails } from '@/features/products/components/ProductDetails'
import { useProductById } from '@/features/products/products.hooks'
import { BackButton } from '@/shared/components/backButton'
import { Skeleton } from '@/shared/components/skeleton'
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

type ProductParams = {
  productId: string
}

export default function Product() {
  const { productId } = useLocalSearchParams<ProductParams>()
  const { setOptions } = useNavigation()
  const { data: product, isLoading } = useProductById(Number(productId))

  useFocusEffect(() => {
    setOptions({
      headerTitle: product ? product.title : '',
      headerLeft: () => <BackButton paddingHorizontal={8} />,
    })
  })

  if (isLoading) {
    return (
      <ScrollView>
        <View className='bg-white gap-4 p-4 min-h-full'>
          <Skeleton borderRadius={12} height={320} width='100%' />
          <View className='flex-row justify-between'>
            <Skeleton borderRadius={4} height={16} width={80} />
            <Skeleton borderRadius={4} height={16} width={80} />
            <Skeleton borderRadius={4} height={16} width={80} />
          </View>
          <Skeleton borderRadius={12} height={160} width='100%' />
        </View>
      </ScrollView>
    )
  }

  if (!product) {
    return (
      <ScrollView>
        <View className='bg-white gap-4 items-center justify-center p-4 pb-16 min-h-full'>
          <Text className='font-product-sans-bold text-xl'>
            Product not found
          </Text>
          <Text className='font-product-sans text-gray-400 mt-2'>
            The product you are looking for may no longer exist
          </Text>
        </View>
      </ScrollView>
    )
  }

  return (
    <ScrollView>
      <ProductDetails {...product} />
    </ScrollView>
  )
}
