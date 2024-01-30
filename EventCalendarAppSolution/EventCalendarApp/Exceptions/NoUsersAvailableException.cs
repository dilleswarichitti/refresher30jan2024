using System.Runtime.Serialization;

namespace EventCalendarApp.Exceptions
{
    [Serializable]
    public class NoUsersAvailableException : Exception
    {
        string message;
        public NoUsersAvailableException()
        {
            message = "No users are available";
        }
        public override string Message => message;

    }
}