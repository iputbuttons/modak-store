import { useState } from 'react'
import { Alert, Platform } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { Product } from '../products.types'
import { CalendarReminder } from '@/shared/modules/calendarReminder/CalendarReminder'
import { Button } from '@/shared/components/button'
import { useTheme } from '@/shared/hooks/useTheme'

type ReminderButtonProps = {
  product: Product
}

export const ReminderButton = ({ product }: ReminderButtonProps) => {
  const { colors } = useTheme()
  const [isDatePickerVisible, setDatePickerVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isInExpo, setIsInExpo] = useState(false)

  const handleAddReminder = async (date: Date) => {
    setDatePickerVisible(false)
    setIsLoading(true)

    try {
      const result = await CalendarReminder.addProductReminder(
        product.title,
        product.description,
        date
      )

      if (result.eventId.startsWith('mock-event-')) {
        setIsInExpo(true)
        Alert.alert(
          'Development Mode',
          `The reminder for "${product.title}" has been successfully simulated. On a real device with proper permissions, it would be added to the calendar.`,
          [{ text: 'OK' }]
        )
      } else {
        Alert.alert(
          'Reminder Added',
          `We'll remind you to purchase ${
            product.title
          } on ${date.toLocaleDateString()}`,
          [{ text: 'OK' }]
        )
      }
    } catch (error) {
      Alert.alert(
        'Error',
        `Could not add reminder to calendar. ${
          Platform.OS === 'ios'
            ? 'Please check permissions in Settings.'
            : 'Please check app permissions.'
        }`,
        [{ text: 'OK' }]
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button
        disabled={isLoading}
        onPress={() => setDatePickerVisible(true)}
        variant='primary'
      >
        {isLoading
          ? 'Adding reminder...'
          : isInExpo
          ? 'Simulate Reminder (Dev Mode)'
          : 'Add Purchase Reminder'}
      </Button>
      <DateTimePickerModal
        buttonTextColorIOS={colors.green[600]}
        customCancelButtonIOS={(props) => (
          <Button variant='secondary' {...props}>
            Cancel
          </Button>
        )}
        customConfirmButtonIOS={(props) => (
          <Button className='rounded-none' variant='primary' {...props}>
            Confirm
          </Button>
        )}
        isDarkModeEnabled={false}
        isVisible={isDatePickerVisible}
        minimumDate={new Date()}
        mode='datetime'
        onCancel={() => setDatePickerVisible(false)}
        onConfirm={handleAddReminder}
        themeVariant='light'
      />
    </>
  )
}
