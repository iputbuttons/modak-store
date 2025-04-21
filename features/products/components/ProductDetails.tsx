import { ImageBackground } from 'expo-image'
import { Text, View } from 'react-native'
import { Product } from '../products.types'
import { formatPrice } from '../products.utils'
import { ReminderButton } from './ReminderButton'
import Octicons from '@expo/vector-icons/Octicons'
import { useTheme } from '@/shared/hooks/useTheme'

type ProductDetailsProps = Product & {}

export const ProductDetails = ({
  availabilityStatus,
  brand,
  description,
  minimumOrderQuantity,
  price,
  rating,
  returnPolicy,
  shippingInformation,
  thumbnail,
  warrantyInformation,
  ...restProps
}: ProductDetailsProps) => {
  const { colors } = useTheme()

  return (
    <View className='bg-white gap-4 p-4 min-h-full'>
      <ImageBackground
        contentFit='cover'
        source={thumbnail}
        style={{
          alignItems: 'flex-end',
          height: 320,
          padding: 12,
        }}
        imageStyle={{ borderRadius: 12, height: 320 }}
      >
        <View className='bg-black px-4 py-2 rounded-full w-fit'>
          <Text className='font-product-sans-bold text-white tracking-widest uppercase'>
            {availabilityStatus}
          </Text>
        </View>
      </ImageBackground>
      <View className='flex-row justify-between mb-4'>
        <View className='flex-row gap-2 items-center'>
          <Octicons name='tag' size={20} color={colors.black} />
          <Text className='font-product-sans text-2xl'>
            {formatPrice(price)}
          </Text>
        </View>
        <View className='flex-row gap-2 items-center'>
          {brand ? (
            <>
              <Octicons name='organization' size={20} color={colors.black} />
              <Text className='font-product-sans text-2xl'>{brand}</Text>
            </>
          ) : null}
        </View>
        <View className='flex-row gap-2 items-center'>
          <Octicons name='star' size={20} color={colors.black} />
          <Text className='font-product-sans text-2xl'>{rating}</Text>
        </View>
      </View>
      <Text className='font-product-sans'>{description}</Text>

      {minimumOrderQuantity ? (
        <>
          <View className='h-px bg-gray-200 my-2' />
          <View className='flex-row justify-between'>
            <Text className='font-product-sans'>Minimum order quantity:</Text>
            <Text className='font-product-sans'>{minimumOrderQuantity}</Text>
          </View>
        </>
      ) : null}
      {returnPolicy ? (
        <>
          <View className='h-px bg-gray-200 my-2' />
          <View className='flex-row justify-between'>
            <Text className='font-product-sans'>Return policy:</Text>
            <Text className='font-product-sans'>{returnPolicy}</Text>
          </View>
        </>
      ) : null}
      {shippingInformation ? (
        <>
          <View className='h-px bg-gray-200 my-2' />
          <View className='flex-row justify-between'>
            <Text className='font-product-sans'>Shipping:</Text>
            <Text className='font-product-sans'>{shippingInformation}</Text>
          </View>
        </>
      ) : null}
      {warrantyInformation ? (
        <>
          <View className='h-px bg-gray-200 my-2' />
          <View className='flex-row justify-between'>
            <Text className='font-product-sans'>Warranty:</Text>
            <Text className='font-product-sans'>{warrantyInformation}</Text>
          </View>
        </>
      ) : null}
      <View className='mt-4'>
        <ReminderButton
          product={{
            availabilityStatus,
            brand,
            description,
            minimumOrderQuantity,
            price,
            rating,
            returnPolicy,
            shippingInformation,
            thumbnail,
            warrantyInformation,
            ...restProps,
          }}
        />
      </View>
    </View>
  )
}
