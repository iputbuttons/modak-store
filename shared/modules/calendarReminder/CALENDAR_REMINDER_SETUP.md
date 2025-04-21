# Calendar Reminder Module Setup Guide

This guide explains how to set up the Calendar Reminder native module for both iOS and Android platforms.

## iOS Setup

1. Add the Swift files to your Xcode project:

   - `CalendarReminderModule.swift`

2. Make sure your project has a bridging header and add the Objective-C interface:

   - `CalendarReminderModule.m`

3. Add the required permission to your `Info.plist`:
   ```xml
   <key>NSCalendarsUsageDescription</key>
   <string>This app needs access to your calendar to add product purchase reminders.</string>
   ```

## Android Setup

1. Add the Java files to your Android project:

   - `CalendarReminderModule.java`
   - `CalendarReminderPackage.java`

2. Register the package in your `MainApplication.java`:

   ```java
   @Override
   protected List<ReactPackage> getPackages() {
     List<ReactPackage> packages = new PackageList(this).getPackages();
     packages.add(new CalendarReminderPackage());
     return packages;
   }
   ```

3. Add the required permissions to your `AndroidManifest.xml`:
   ```xml
   <uses-permission android:name="android.permission.READ_CALENDAR" />
   <uses-permission android:name="android.permission.WRITE_CALENDAR" />
   ```

## Usage in React Native

```typescript
import { CalendarReminder } from '@/shared/modules/calendarReminder'

try {
  const result = await CalendarReminder.addProductReminder(
    'Product Title',
    'Product Description',
    new Date(/* your target date */)
  )

  if (result.success) {
    console.log('Reminder added with event ID:', result.eventId)
  }
} catch (error) {
  console.error('Failed to add reminder:', error)
}
```

## Troubleshooting

### iOS

- Make sure your app has calendar permissions
- Check that the Objective-C interface properly exposes the Swift module

### Android

- Ensure the package is correctly registered in `MainApplication.java`
- Verify that you've requested calendar permissions at runtime
- Check that the device/emulator has a calendar app installed
