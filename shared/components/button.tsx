import { ReactNode } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

type ButtonProps = PressableProps & {
  children: ReactNode
  variant: 'icon' | 'primary'
  width?: string
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  width = 'w-full',
  ...pressableProps
}: ButtonProps) => {
  const variants = {
    icon: 'flex-row gap-2 items-center',
    primary: `bg-green-600 px-12 py-4 rounded-lg items-center justify-center ${width}`,
  }

  return (
    <Pressable {...pressableProps} className={variants[variant]}>
      {typeof children === 'string' ? (
        <Text className='font-product-sans-bold text-lg text-white'>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  )
}
