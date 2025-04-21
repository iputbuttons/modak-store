import { useFonts } from "expo-font"

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    "ProductSans-Regular": require("../assets/fonts/ProductSans-Regular.ttf"),
    "ProductSans-Bold": require("../assets/fonts/ProductSans-Bold.ttf"),
  })

  return fontsLoaded
}
