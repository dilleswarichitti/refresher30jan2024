using EventCalendarApp.Models;
using EventCalendarApp.Models.DTOs;

namespace EventCalendarApp.Interfaces
{
    public interface IEventService
    {

        /// <summary>
        /// interface for EventService
        /// </summary>
        /// <returns></returns>
        List<Event> GetEvents(string userId);

        List<Event> GetEvents();  
        bool ShareEvent(int eventId, List<string> recipientEmails);

        IList<Event> GetPublicEvents(string Access); 
        Event Add(Event events);
        Event Remove(int Id);
        Event Update(Event events);
    }
}