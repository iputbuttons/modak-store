import { Link, Stack } from "expo-router"
import { Text, View } from "react-native"

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="font-product-sans-bold text-lg mb-4">
          This screen doesn't exist.
        </Text>
        <Link href="/">
          <Text className="font-product-sans text-blue-500">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  )
}
