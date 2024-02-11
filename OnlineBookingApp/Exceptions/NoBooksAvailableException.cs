using System.Runtime.Serialization;

namespace OnlineBookingApp.Exceptions
{
    [Serializable]
    public class NoBooksAvailableException : Exception
    {
        string message;
        public NoBooksAvailableException()
        {
            message = "No Books are available";
        }
        public override string Message => message;

    }
}