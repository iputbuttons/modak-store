import { NativeModules, Platform } from 'react-native'

interface CalendarReminderInterface {
  addProductReminder(
    title: string,
    description: string,
    date: Date
  ): Promise<{ success: boolean; eventId: string }>
}

const getTimestamp = (date: Date): number => {
  return date.getTime()
}

const isExpoWithoutNative = () => {
  return (
    !NativeModules.CalendarReminderModule &&
    (Platform.OS === 'ios' || Platform.OS === 'android')
  )
}

const MockedModule: CalendarReminderInterface = {
  addProductReminder: async (title, description, date) => {
    if (isExpoWithoutNative()) {
      console.warn(
        '(EXPO) CalendarReminderModule cannot be used in Expo Go. ' +
          'You need a native build with EAS or local development. ' +
          'Simulating success for development purposes.'
      )
    } else {
      console.warn(
        '(NO-BRIDGE) CalendarReminderModule is not available. ' +
          'Make sure the native module is properly configured for ' +
          Platform.OS
      )
    }

    return { success: true, eventId: 'mock-event-' + Date.now() }
  },
}

const hasNativeModule = NativeModules.CalendarReminderModule !== undefined
console.log(
  `CalendarReminderModule availability: ${hasNativeModule ? 'YES' : 'NO'} on ${
    Platform.OS
  }`
)

const NativeCalendarReminder =
  NativeModules.CalendarReminderModule || MockedModule

const AndroidCalendarReminder: CalendarReminderInterface = {
  addProductReminder: async (title, description, date) => {
    try {
      return await NativeCalendarReminder.addProductReminder(
        title,
        description,
        getTimestamp(date)
      )
    } catch (error) {
      console.error('Error adding reminder on Android:', error)
      throw error
    }
  },
}

const IOSCalendarReminder: CalendarReminderInterface = {
  addProductReminder: async (title, description, date) => {
    try {
      return await NativeCalendarReminder.addProductReminder(
        title,
        description,
        date
      )
    } catch (error) {
      console.error('Error adding reminder on iOS:', error)
      throw error
    }
  },
}

export const CalendarReminder: CalendarReminderInterface =
  Platform.OS === 'ios'
    ? IOSCalendarReminder
    : Platform.OS === 'android'
    ? AndroidCalendarReminder
    : MockedModule
