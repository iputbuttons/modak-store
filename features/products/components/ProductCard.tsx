import { Pressable, Text, View } from 'react-native'
import { Product } from '../products.types'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import { formatPrice } from '../products.utils'
import { Skeleton } from '@/shared/components/skeleton'

export type ProductCardProps = Product & {
  isLoading: boolean
}

export const ProductCard = ({
  id,
  isLoading,
  price,
  thumbnail,
  title,
}: ProductCardProps) => {
  const { navigate } = useRouter()

  const goToProductDetails = () => {
    navigate(`/products/${id}`)
  }

  if (isLoading) {
    return <Skeleton borderRadius={16} height={176} width='100%' />
  }

  return (
    <Pressable className='flex-1 gap-2' onPress={goToProductDetails}>
      <Image
        source={thumbnail}
        style={{
          borderRadius: 16,
          height: 128,
          width: '100%',
        }}
      />
      <View>
        <Text className='font-product-sans'>{title}</Text>
        <Text className='font-product-sans text-sm text-gray-600'>
          {formatPrice(price)}
        </Text>
      </View>
    </Pressable>
  )
}
