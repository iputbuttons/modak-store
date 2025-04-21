import { useRouter } from 'expo-router'
import { Pressable } from 'react-native'
import { Back } from '../assets/icons/back'

type BackButtonProps = {
  paddingHorizontal?: number
}

export const BackButton = ({ paddingHorizontal }: BackButtonProps) => {
  const { back } = useRouter()

  return (
    <Pressable onPress={back} style={{ paddingHorizontal }}>
      <Back />
    </Pressable>
  )
}
