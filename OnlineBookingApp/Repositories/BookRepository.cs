using Microsoft.Extensions.Logging;
using OnlineBookingApp.Context;
using OnlineBookingApp.Interfaces;
using OnlineBookingApp.Models;

namespace OnlineBookingApp.Repositories
{
    public class BookRepository : IRepository<int, Books>
    {
        private readonly BookingContext _context;

        public BookRepository(BookingContext context)
        {
            _context = context;
        }
        public Books Add(Books entity)
        {
            _context.Books.Add(entity);
            _context.SaveChanges(); 
            return entity;
        }
   
        public Books Delete(int key)
        {
            var events = GetById(key);
            if (events != null)
            {
                _context.Books.Remove(events);
                _context.SaveChanges();
                return events;
            }
            return null;
        }
        public IList<Books> GetAll()
        {
            try
            {
                if (_context.Books.Count() == 0)
                    return null;
                return _context.Books.ToList();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public Books GetById(int key)
        {
            var events = _context.Books.SingleOrDefault(b => b.BookId == key);
            return events;
        }
        public Books Update(Books entity)
        {
            var books = GetById(entity.BookId);
            if (books != null)
            {
                books.Title = entity.Title;
                books.Description = entity.Description;
                books.Author = entity.Author;
                books.PublishedDate = entity.PublishedDate;
                books.Genre = entity.Genre;
                books.ISBN = entity.ISBN;
                books.Price = entity.Price;
                books.Image = entity.Image;
                _context.Books.Update(books);
                _context.SaveChanges();
                return books;
            }
            return null;
        }
    }
}