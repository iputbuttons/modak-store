import { useTheme } from '@/shared/hooks/useTheme'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const Report = (props: SvgProps) => {
  const { colors } = useTheme()

  return (
    <Svg width={129} height={128} fill='none' {...props}>
      <Path
        fill={colors.red[600]}
        d='M64.5 90.667c1.511 0 2.778-.511 3.8-1.534 1.022-1.022 1.533-2.289 1.533-3.8 0-1.51-.51-2.777-1.533-3.8C67.278 80.511 66.011 80 64.5 80c-1.511 0-2.778.511-3.8 1.533-1.022 1.023-1.533 2.29-1.533 3.8 0 1.511.51 2.778 1.533 3.8 1.022 1.023 2.289 1.534 3.8 1.534Zm-5.333-21.334h10.666v-32H59.167v32ZM44.5 112l-28-28V44l28-28h40l28 28v40l-28 28h-40Z'
      />
    </Svg>
  )
}
