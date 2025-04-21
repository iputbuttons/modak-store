import { ScrollView, Text, View } from 'react-native'
import { Button } from './button'
import Octicons from '@expo/vector-icons/Octicons'
import { useTheme } from '../hooks/useTheme'

type ErrorProps = {
  error: Error
  retry: VoidFunction
}

export const ErrorScreen = ({ error, retry }: ErrorProps) => {
  const { colors } = useTheme()

  return (
    <ScrollView>
      <View className='gap-8 min-h-full p-4 w-full items-center justify-center bg-white'>
        <View className='items-center gap-4'>
          <Octicons name='alert' size={128} color={colors.red[600]} />
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
