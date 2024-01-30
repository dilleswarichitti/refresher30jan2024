using System.Runtime.Serialization;

namespace EventCalendarApp.Exceptions
{
    [Serializable]
    public class NoEventsAvailableException : Exception
    {
        string message;
        public NoEventsAvailableException()
        {
            message = "No events are available";
        }
        public override string Message => message;

    }
}