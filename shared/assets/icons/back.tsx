import { useTheme } from '@/shared/hooks/useTheme'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Back = (props: SvgProps) => {
  const { colors } = useTheme()

  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        fill={colors.black}
        d='m7.825 13 5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825Z'
      />
    </Svg>
  )
}
