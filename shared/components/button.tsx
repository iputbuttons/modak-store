import { ReactNode } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

type ButtonProps = PressableProps & {
  children: ReactNode
  className?: string
  variant: 'icon' | 'primary' | 'secondary'
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...pressableProps
}: ButtonProps) => {
  const variants = {
    icon: 'flex-row gap-2 items-center',
    primary: `bg-green-600 px-12 py-4 rounded-lg items-center justify-center text-white w-full ${className}`,
    secondary: `bg-gray-300 px-12 py-4 rounded-lg items-center justify-center text-gray-600 w-full ${className}`,
  }

  return (
    <Pressable {...pressableProps} className={variants[variant]}>
      {typeof children === 'string' ? (
        <Text className='font-product-sans-bold text-lg'>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  )
}
