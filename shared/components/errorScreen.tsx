import { ScrollView, Text, View } from 'react-native'
import { Report } from '../assets/icons/report'
import { Button } from './button'

type ErrorProps = {
  error: Error
  retry: VoidFunction
}

export const ErrorScreen = ({ error, retry }: ErrorProps) => {
  return (
    <ScrollView>
      <View className='gap-8 min-h-full p-4 w-full items-center justify-center bg-white'>
        <View className='items-center gap-4'>
          <Report />
          <Text className='font-product-sans-bold text-red-600 text-2xl'>
            An error occurred
          </Text>
        </View>
        <Text className='font-product-sans text-gray-600 text-center'>
          {error.message}
        </Text>
        <Button onPress={retry} variant='primary'>
          Try again
        </Button>
      </View>
    </ScrollView>
  )
}
