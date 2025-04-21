import Svg, { SvgProps, Path } from 'react-native-svg'

export const Brand = (props: SvgProps) => (
  <Svg width={16} height={17} fill='none' {...props}>
    <Path
      fill='#000'
      d='M2.667 4.5V3.167h10.666V4.5H2.667Zm0 9.333v-4H2V8.5l.667-3.333h10.666L14 8.5v1.333h-.667v4H12v-4H9.333v4H2.667ZM4 12.5h4V9.833H4V12.5Zm-.633-4h9.266l-.4-2H3.767l-.4 2Z'
    />
  </Svg>
)
