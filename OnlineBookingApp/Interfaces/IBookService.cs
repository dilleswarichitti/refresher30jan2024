using Microsoft.Extensions.Logging;
using OnlineBookingApp.Models;

namespace OnlineBookingApp.Interfaces
{
    public interface IBookService
    { 
        List<Books> GetBooks(); 
        Books Add(Books books);
        Books Remove(int Id);
        Books Update(Books books); 
    }
}
