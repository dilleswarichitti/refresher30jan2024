using Microsoft.Extensions.Logging;
using OnlineBookingApp.Exceptions;
using OnlineBookingApp.Interfaces;
using OnlineBookingApp.Models;

namespace OnlineBookingApp.Services
{
    public class BookService : IBookService
    {
        private readonly IRepository<int, Books> _bookRepository;

        public BookService(IRepository<int, Books> bookRepository)
        {
            _bookRepository = bookRepository;
        }
        public Books Add(Books books)
        {
            var result = _bookRepository.Add(books);
            return result;
        }

        public IList<Books> GetBookById(int Id)
        {
            var books = _bookRepository.GetAll().Where(b => b.BookId == Id).ToList();
            if (books != null)
            {
                return books;
            }
            throw new NoUsersAvailableException();
        }

        public List<Books> GetBooks()
        {
            var books = _bookRepository.GetAll();
            if (books != null)
            {
                return books.ToList();
            }
            throw new NoBooksAvailableException();
        }

        public Books Remove(int Id)
        {
            var existingBook = _bookRepository.GetById(Id);
            if (existingBook != null)
            {
                return _bookRepository.Delete(Id);
            }
            return null;
        }

        public Books Update(Books books)
        {
            var existingBook = _bookRepository.GetAll().FirstOrDefault(b => b.BookId == books.BookId);
            if (existingBook != null)
            {
                var result = _bookRepository.Update(books);
                if (result != null) return result;
            }
            return existingBook;
        }
    }
}
