using System.Runtime.Serialization;

namespace OnlineBookingApp.Exceptions
{
    [Serializable]
    public class BooksCantRemoveException : Exception
    {
        string message;
        public BooksCantRemoveException()
        {
            message = "Books are not removed";
        }
        public override string Message => message;

    }
}