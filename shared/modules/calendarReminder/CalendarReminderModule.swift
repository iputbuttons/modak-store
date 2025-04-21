import Foundation
import EventKit

@objc(CalendarReminderModule)
class CalendarReminderModule: NSObject {
    
    private let eventStore = EKEventStore()
    
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    @objc func addProductReminder(_ title: String, description: String, date: Date, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
        
        eventStore.requestAccess(to: .event) { [weak self] granted, error in
            guard let self = self else { return }
            
            if let error = error {
                DispatchQueue.main.async {
                    rejecter("calendar_error", "Failed to access calendar: \(error.localizedDescription)", error)
                }
                return
            }
            
            if granted {
                let event = EKEvent(eventStore: self.eventStore)
                event.title = "Remember to buy: \(title)"
                event.notes = description
                event.startDate = date
                event.endDate = date.addingTimeInterval(3600)
                event.calendar = self.eventStore.defaultCalendarForNewEvents
                
                let alarm = EKAlarm(relativeOffset: -86400) 
                event.addAlarm(alarm)
                
                do {
                    try self.eventStore.save(event, span: .thisEvent)
                    DispatchQueue.main.async {
                        resolver([
                            "success": true,
                            "eventId": event.eventIdentifier ?? ""
                        ])
                    }
                } catch {
                    DispatchQueue.main.async {
                        rejecter("save_error", "Failed to save reminder: \(error.localizedDescription)", error)
                    }
                }
            } else {
                DispatchQueue.main.async {
                    rejecter("permission_error", "Calendar access not granted", nil)
                }
            }
        }
    }
} 