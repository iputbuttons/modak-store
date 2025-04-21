import { useEffect } from 'react'
import { ViewStyle } from 'react-native'
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import { useTheme } from '../hooks/useTheme'

export const Skeleton = (style: ViewStyle) => {
  const animation = useSharedValue(0)
  const { colors } = useTheme()

  useEffect(() => {
    animation.value = withRepeat(
      withTiming(1, {
        duration: 800,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    )
  }, [])

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animation.value,
      [0, 1],
      [colors.gray[50], colors.gray[100]]
    )

    return {
      backgroundColor,
    }
  })

  return <Animated.View style={[style, animatedStyle]} />
}
