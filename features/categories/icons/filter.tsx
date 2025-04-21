import Svg, { SvgProps, Path } from 'react-native-svg'

export const Filter = (props: SvgProps) => (
  <Svg width={24} height={25} fill='none' {...props}>
    <Path
      fill='#000'
      d='M11 21.5v-6h2v2h8v2h-8v2h-2Zm-8-2v-2h6v2H3Zm4-4v-2H3v-2h4v-2h2v6H7Zm4-2v-2h10v2H11Zm4-4v-6h2v2h4v2h-4v2h-2Zm-12-2v-2h10v2H3Z'
    />
  </Svg>
)
