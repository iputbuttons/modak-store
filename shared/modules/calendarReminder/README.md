# Calendar Reminder Module

This module provides functionality to add purchase reminders to the device's calendar, on both iOS and Android.

## Module Structure

```
calendarReminder/
├── index.ts                     # Module entry point
├── CalendarReminder.ts          # TypeScript implementation
├── CalendarReminderModule.swift # iOS native implementation
├── CalendarReminderModule.m     # Objective-C interface for iOS
├── CalendarReminderModule.java  # Android native implementation
├── CalendarReminderPackage.java # React Native package for Android
├── AndroidManifest-requirements.txt # AndroidManifest requirements
├── CALENDAR_REMINDER_SETUP.md   # Detailed installation guide
└── README.md                    # This file
```

## Features

- Adds events to the native calendar with title, description, and date
- Automatically sets a reminder 24 hours before the event
- Handles calendar permissions on both platforms
- Provides a simulated implementation for development environments without native access

## Usage

```typescript
import { CalendarReminder } from '@/shared/modules/calendarReminder'

// Add a reminder
try {
  const result = await CalendarReminder.addProductReminder(
    'Product Title',
    'Product Description',
    new Date(/* target date */)
  )

  if (result.success) {
    console.log('Reminder added with ID:', result.eventId)
  }
} catch (error) {
  console.error('Failed to add reminder:', error)
}
```

## Installation

For complete installation and configuration, see the [CALENDAR_REMINDER_SETUP.md](./CALENDAR_REMINDER_SETUP.md) file.

### Summary Requirements

- **iOS**: Calendar permissions in Info.plist
- **Android**: Calendar permissions in AndroidManifest.xml and package registration

## Development Behavior

The module automatically detects when running in an environment without native access (like Expo Go) and provides a simulated implementation that allows testing the user interface without the actual native modules.
