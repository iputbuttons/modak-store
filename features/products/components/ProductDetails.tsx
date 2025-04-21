import { ImageBackground } from 'expo-image'
import { Text, View } from 'react-native'
import { Product } from '../products.types'
import { Tag } from '../icons/tag'
import { Brand } from '../icons/brand'
import { Star } from '../icons/start'
import { formatPrice } from '../products.utils'

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
}: ProductDetailsProps) => (
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
      <View className='bg-black px-4 py-2 rounded-xl w-fit'>
        <Text className='font-product-sans-bold text-white tracking-widest uppercase'>
          {availabilityStatus}
        </Text>
      </View>
    </ImageBackground>
    <View className='flex-row justify-between mb-4'>
      <View className='flex-row gap-1 items-center'>
        <Tag />
        <Text className='font-product-sans text-xl'>{formatPrice(price)}</Text>
      </View>
      <View className='flex-row gap-1 items-center'>
        {brand ? (
          <>
            <Brand />
            <Text className='font-product-sans text-xl'>{brand}</Text>
          </>
        ) : null}
      </View>
      <View className='flex-row gap-1 items-center'>
        <Star />
        <Text className='font-product-sans text-xl'>{rating}</Text>
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
  </View>
)
