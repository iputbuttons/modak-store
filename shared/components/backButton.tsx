import { useRouter } from 'expo-router'
import { Pressable } from 'react-native'
import Octicons from '@expo/vector-icons/Octicons'
import { useTheme } from '../hooks/useTheme'

type BackButtonProps = {
  paddingHorizontal?: number
}

export const BackButton = ({ paddingHorizontal }: BackButtonProps) => {
  const { back } = useRouter()
  const { colors } = useTheme()

  return (
    <Pressable onPress={back} style={{ paddingHorizontal }}>
      <Octicons name='arrow-left' size={24} color={colors.black} />
    </Pressable>
  )
}
