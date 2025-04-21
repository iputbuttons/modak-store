import { useState, useEffect } from 'react'
import { Modal, Pressable, Text, View, Animated } from 'react-native'
import { SortOption, SortOrder } from '../products.types'
import { Button } from '@/shared/components/button'
import { SORT_OPTIONS } from '../products.consts'

type SortModalProps = {
  isVisible: boolean
  onClose: () => void
  onApply: (sortOption: SortOption['value'], sortOrder: SortOrder) => void
  currentSortOption?: SortOption['value']
  currentSortOrder?: SortOrder
}

export const SortModal = ({
  isVisible,
  onClose,
  onApply,
  currentSortOption = 'none',
  currentSortOrder = 'asc',
}: SortModalProps) => {
  const [selectedOption, setSelectedOption] =
    useState<SortOption['value']>(currentSortOption)
  const [selectedOrder, setSelectedOrder] =
    useState<SortOrder>(currentSortOrder)
  const slideAnimation = useState(new Animated.Value(0))[0]
  const [localVisible, setLocalVisible] = useState(isVisible)

  useEffect(() => {
    if (isVisible) {
      setLocalVisible(true)
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      slideAnimation.setValue(0)
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    } else if (localVisible) {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setLocalVisible(false)
      })
    }
  }, [isVisible, localVisible])

  const translateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 0],
  })

  const handleClose = () => {
    onClose()
  }

  const handleApply = () => {
    onApply(selectedOption, selectedOrder)
    onClose()
  }

  useEffect(() => {
    if (isVisible) {
      setSelectedOption(currentSortOption)
      setSelectedOrder(currentSortOrder)
    }
  }, [isVisible, currentSortOption, currentSortOrder])

  const showOrderOptions = selectedOption !== 'none'

  return (
    <Modal
      animationType='none'
      onRequestClose={handleClose}
      transparent
      visible={localVisible}
    >
      <View className='bg-black/50 flex-1 justify-end'>
        <Animated.View
          style={{
            transform: [{ translateY }],
          }}
          className='bg-white p-6 rounded-t-3xl'
        >
          <View className='flex-row justify-between items-center mb-6'>
            <Text className='font-product-sans-bold text-xl'>
              Sort Products
            </Text>
            <Pressable onPress={handleClose}>
              <Text className='font-product-sans text-gray-500'>Close</Text>
            </Pressable>
          </View>
          <View className='mb-6'>
            <Text className='font-product-sans-bold text-lg mb-2'>Sort by</Text>
            {SORT_OPTIONS.map((option) => (
              <Pressable
                key={option.value}
                className={`flex-row items-center p-4 border border-gray-200 rounded-lg mb-2 ${
                  selectedOption === option.value ? 'bg-gray-100' : ''
                }`}
                onPress={() => setSelectedOption(option.value)}
              >
                <View
                  className={`h-5 w-5 rounded-full border border-gray-400 mr-3 items-center justify-center ${
                    selectedOption === option.value
                      ? 'bg-black border-black'
                      : ''
                  }`}
                >
                  {selectedOption === option.value && (
                    <View className='h-3 w-3 rounded-full bg-white' />
                  )}
                </View>
                <Text className='font-product-sans'>{option.label}</Text>
              </Pressable>
            ))}
          </View>
          {showOrderOptions && (
            <View className='mb-6'>
              <Text className='font-product-sans-bold text-lg mb-2'>Order</Text>
              <View className='flex-row gap-4'>
                <Pressable
                  className={`flex-1 p-4 border border-gray-200 rounded-lg ${
                    selectedOrder === 'asc' ? 'bg-gray-100' : ''
                  }`}
                  onPress={() => setSelectedOrder('asc')}
                >
                  <Text className='font-product-sans text-center'>
                    {selectedOption === 'price'
                      ? 'Low to High'
                      : 'Low Rating First'}
                  </Text>
                </Pressable>
                <Pressable
                  className={`flex-1 p-4 border border-gray-200 rounded-lg ${
                    selectedOrder === 'desc' ? 'bg-gray-100' : ''
                  }`}
                  onPress={() => setSelectedOrder('desc')}
                >
                  <Text className='font-product-sans text-center'>
                    {selectedOption === 'price'
                      ? 'High to Low'
                      : 'High Rating First'}
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
          <Button onPress={handleApply}>Apply</Button>
        </Animated.View>
      </View>
    </Modal>
  )
}
