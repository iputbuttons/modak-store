package com.modakstore;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.net.Uri;
import android.provider.CalendarContract;
import android.provider.CalendarContract.Events;
import android.provider.CalendarContract.Reminders;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.Calendar;
import java.util.TimeZone;

public class CalendarReminderModule extends ReactContextBaseJavaModule {
    private static final String PERMISSION_DENIED = "PERMISSION_DENIED";
    private static final String CALENDAR_ERROR = "CALENDAR_ERROR";
    private static final String NAME = "CalendarReminderModule";

    private final ReactApplicationContext reactContext;

    public CalendarReminderModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void addProductReminder(String title, String description, double timestamp, Promise promise) {
        if (ContextCompat.checkSelfPermission(reactContext, android.Manifest.permission.WRITE_CALENDAR) 
            != PackageManager.PERMISSION_GRANTED) {
            
            promise.reject(PERMISSION_DENIED, "Calendar permission not granted");
            
            ActivityCompat.requestPermissions(
                getCurrentActivity(),
                new String[]{android.Manifest.permission.READ_CALENDAR, android.Manifest.permission.WRITE_CALENDAR},
                1
            );
            return;
        }

        try {
            long eventTimestamp = (long) timestamp;

            long calendarId = getDefaultCalendarId();
            if (calendarId == -1) {
                promise.reject(CALENDAR_ERROR, "No calendar found");
                return;
            }

            ContentResolver cr = reactContext.getContentResolver();
            ContentValues eventValues = new ContentValues();

            eventValues.put(Events.CALENDAR_ID, calendarId);
            eventValues.put(Events.TITLE, "Remember to buy: " + title);
            eventValues.put(Events.DESCRIPTION, description);
            eventValues.put(Events.DTSTART, eventTimestamp);
            eventValues.put(Events.DTEND, eventTimestamp + 3600 * 1000);
            eventValues.put(Events.EVENT_TIMEZONE, TimeZone.getDefault().getID());
            eventValues.put(Events.HAS_ALARM, 1);

            Uri eventUri = cr.insert(Events.CONTENT_URI, eventValues);
            long eventId = Long.parseLong(eventUri.getLastPathSegment());

            ContentValues reminderValues = new ContentValues();
            reminderValues.put(Reminders.EVENT_ID, eventId);
            reminderValues.put(Reminders.METHOD, Reminders.METHOD_ALERT);
            reminderValues.put(Reminders.MINUTES, 24 * 60); 

            cr.insert(Reminders.CONTENT_URI, reminderValues);

            WritableMap result = Arguments.createMap();
            result.putBoolean("success", true);
            result.putString("eventId", String.valueOf(eventId));
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject(CALENDAR_ERROR, "Failed to add calendar event: " + e.getMessage(), e);
        }
    }

    private long getDefaultCalendarId() {
        String[] projection = new String[]{CalendarContract.Calendars._ID};
        String selection = CalendarContract.Calendars.VISIBLE + " = 1";
        
        ContentResolver cr = reactContext.getContentResolver();
        Cursor cursor = cr.query(CalendarContract.Calendars.CONTENT_URI, projection, selection, null, null);
        
        if (cursor != null && cursor.moveToFirst()) {
            long calendarId = cursor.getLong(0);
            cursor.close();
            return calendarId;
        }
        
        if (cursor != null) {
            cursor.close();
        }
        
        return -1;
    }
} 