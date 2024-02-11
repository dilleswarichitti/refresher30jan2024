using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OnlineBookingApp.Models;

namespace OnlineBookingApp.Context
{
    public class BookingContext : DbContext
    {
        public BookingContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Books> Books { get; set; } 
    }
}
