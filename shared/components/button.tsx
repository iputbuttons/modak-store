import { ReactNode } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

type ButtonProps = PressableProps & {
  children: ReactNode
  width?: string
}

export const Button = ({
  children,
  className,
  width = 'w-full',
  ...pressableProps
}: ButtonProps) => {
  return (
    <Pressable
      {...pressableProps}
      className={`bg-black px-12 py-4 rounded-lg items-center justify-center ${width}`}
    >
      {typeof children === 'string' ? (
        <Text className='font-product-sans-bold text-white'>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  )
}
