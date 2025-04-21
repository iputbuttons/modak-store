#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CalendarReminderModule, NSObject)

RCT_EXTERN_METHOD(addProductReminder:(NSString *)title
                  description:(NSString *)description
                  date:(NSDate *)date
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end 