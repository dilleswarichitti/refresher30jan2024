using System.ComponentModel.DataAnnotations.Schema;

namespace EventCalendarApp.Models
{
    public class Event
    {
        /// <summary>
        /// it is a model class for events
        /// </summary>
        public int Id { get; set; }//identity GUID
        public string Title { get; set; }//title of the event
        public string Description { get; set; }//give information about event
        public string StartDateTime { get; set; }//on which date and on what time the event is occurring
        public string EndDateTime { get; set; }//date and time the event to be ended
        public string NotificationDateTime { get; set; }//on which date and time the notification should be send
        public string? Location { get; set; }//location of an event
        public bool? IsRecurring { get; set; }//is the event is repeating or not
        public string? Recurring_frequency { get; set; }//if event is repeating what is its frequency
        public string? ShareEventWith { get; set; }
        public string? Access { get; set; }//whether the event should be in public or private
        public string Category { get; set; } 
        public string Email { get; set; }//Foreign key of user
        [ForeignKey("Email")]
        public User? User { get; set; }
    }  
}