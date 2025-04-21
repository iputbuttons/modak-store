import { useFonts } from 'expo-font'
import { SplashScreen } from 'expo-router'
import { PropsWithChildren, useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export const FontProvider = ({ children }: PropsWithChildren) => {
  const [fontsLoaded] = useFonts({
    'ProductSans-Regular': require('../assets/fonts/ProductSans-Regular.ttf'),
    'ProductSans-Bold': require('../assets/fonts/ProductSans-Bold.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return children
}
