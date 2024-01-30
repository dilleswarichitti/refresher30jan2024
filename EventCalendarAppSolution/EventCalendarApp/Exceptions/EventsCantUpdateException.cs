using System.Runtime.Serialization;

namespace EventCalendarApp.Exceptions
{
    [Serializable]
    public class EventsCantUpdateException : Exception
    {

        string message;
        public EventsCantUpdateException()
        {
            message = "events cannot be updated";
        }
        public override string Message => message;

    } 
} 