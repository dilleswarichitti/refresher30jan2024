using System.Runtime.Serialization;

namespace EventCalendarApp.Exceptions
{
    [Serializable]
    public class EventsCantRemoveException : Exception
    {

        string message;
        public EventsCantRemoveException()
        {
            message = "events cannot be removed";
        }
        public override string Message => message;

    }
}