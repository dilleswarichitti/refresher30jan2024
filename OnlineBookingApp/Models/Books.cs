using System.ComponentModel.DataAnnotations;

namespace OnlineBookingApp.Models
{
    public class Books
    {
        [Key]
        public int BookId { get; set; } //identity GUID
        public string Title { get; set; }
        public string Description { get; set; }  
        public string Author { get; set; }
        public string PublishedDate { get; set; }
        public string Genre {  get; set; }
        public string ISBN { get; set; }
        public float Price { get; set; }
        public string Image { get; set; }
    }
}
