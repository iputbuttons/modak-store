import { BackButton } from '@/shared/components/backButton'
import { useTheme } from '@/shared/hooks/useTheme'
import { Stack } from 'expo-router/stack'
import { Platform } from 'react-native'

export default function ProductLayout() {
  const { colors } = useTheme()

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors.black,
          fontFamily: Platform.select({
            android: 'ProductSans_700Bold',
            ios: 'ProductSans-Bold',
          }),
          fontSize: 18,
        },
        headerLeft: () => <BackButton />,
      }}
      initialRouteName='index'
    >
      <Stack.Screen
        name='index'
        options={{
          headerTitle: 'Product',
        }}
      />
    </Stack>
  )
}
