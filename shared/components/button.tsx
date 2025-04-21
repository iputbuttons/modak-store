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
    icon: {
      pressable: 'flex-row gap-2 items-center}',
      text: '',
    },
    primary: {
      pressable: `bg-green-600 px-12 py-4 rounded-lg items-center justify-center w-full ${className}`,
      text: 'text-white',
    },
    secondary: {
      pressable: `bg-white px-12 py-4 rounded-lg items-center justify-center w-full ${className}`,
      text: 'text-black',
    },
  }

  return (
    <Pressable {...pressableProps} className={variants[variant].pressable}>
      {typeof children === 'string' ? (
        <Text
          className={`font-product-sans-bold text-lg ${variants[variant].text}`}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  )
}
