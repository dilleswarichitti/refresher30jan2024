using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlineBookingApp.Exceptions;
using OnlineBookingApp.Interfaces;
using OnlineBookingApp.Models;

namespace OnlineBookingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        //private readonly ILogger<BookController> _logger;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
            //_logger = logger;
        }

        [HttpGet("{Id}")]
        public ActionResult GetBookById(int Id)
        {
            string errorMessage = string.Empty;
            try
            {
                var result = _bookService.GetBookById(Id);
                //_logger.LogInformation("Book retrieved");
                return Ok(result);
            }
            catch (NoUsersAvailableException e)
            {
                errorMessage = e.Message;
               // _logger.LogError(errorMessage);
            }
            return BadRequest(errorMessage);
        }

        [HttpGet]
        public ActionResult GetBooks()
        {
            string errorMessage = string.Empty;
            try
            {
                var result = _bookService.GetBooks();
                //_logger.LogInformation("Books listed");
                return Ok(result);
            }
            catch (NoUsersAvailableException e)
            {
                errorMessage = e.Message;
               // _logger.LogError(errorMessage);
            }
            return BadRequest(errorMessage);
        }

        [HttpPost]
        public ActionResult AddBook(Books book)
        {
            string errorMessage = string.Empty;
            try
            {
                var result = _bookService.Add(book);
               // _logger.LogInformation("Book added");
                return Ok(result);
            }
            catch (Exception e)
            {
                errorMessage = e.Message;
               // _logger.LogError(errorMessage);
            }
            return BadRequest(errorMessage);
        }

        [HttpPut]
        public ActionResult UpdateBook(Books book)
        {
            string errorMessage = string.Empty;
            try
            {
                var result = _bookService.Update(book);
                //_logger.LogInformation("Book updated");
                return Ok(result);
            }
            catch (BooksCantUpdateException e) 
            {
                errorMessage = e.Message;
               // _logger.LogError(errorMessage);
            }
            return BadRequest(errorMessage);
        }

        [HttpDelete]
        public ActionResult RemoveBook(int Id)
        {
            string errorMessage = string.Empty;
            try
            {
                var result = _bookService.Remove(Id);
                //_logger.LogInformation("Book removed");
                return Ok("Book deleted successfully");
            }
            catch (BooksCantRemoveException e)
            {
                errorMessage = e.Message;
                //_logger.LogError(errorMessage);
            }
            return BadRequest(errorMessage);
        }
    }
}
