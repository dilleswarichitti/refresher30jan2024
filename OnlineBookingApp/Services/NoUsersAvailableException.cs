using System.Runtime.Serialization;

namespace OnlineBookingApp.Services
{
    [Serializable]
    internal class NoUsersAvailableException : Exception
    {
        public NoUsersAvailableException()
        {
        }

        public NoUsersAvailableException(string? message) : base(message)
        {
        }

        public NoUsersAvailableException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected NoUsersAvailableException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}