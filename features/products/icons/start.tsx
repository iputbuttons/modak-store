import Svg, { SvgProps, Path } from 'react-native-svg'

export const Star = (props: SvgProps) => (
  <Svg width={16} height={17} fill='none' {...props}>
    <Path
      fill='#000'
      d='M5.9 11.717 8 10.45l2.1 1.283-.55-2.4 1.85-1.6-2.433-.216L8 5.25 7.033 7.5 4.6 7.717l1.85 1.616-.55 2.384ZM3.883 14.5l1.084-4.683-3.634-3.15 4.8-.417L8 1.833 9.867 6.25l4.8.417-3.634 3.15 1.084 4.683L8 12.017 3.883 14.5Z'
    />
  </Svg>
)
