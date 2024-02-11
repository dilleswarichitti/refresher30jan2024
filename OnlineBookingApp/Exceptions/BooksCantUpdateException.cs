using System.Runtime.Serialization;

namespace OnlineBookingApp.Exceptions
{
    [Serializable]
    public class BooksCantUpdateException : Exception
    {
        string message;
        public BooksCantUpdateException()
        {
            message = "Books are not updated";
        }
        public override string Message => message;

    }
}