import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'
import '../shared/configs/tailwind.css'
import { Providers } from '@/shared/providers/providers'

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style='auto' />
    </Providers>
  )
}
