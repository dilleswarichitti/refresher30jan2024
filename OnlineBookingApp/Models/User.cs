using System.ComponentModel.DataAnnotations;

namespace OnlineBookingApp.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username {  get; set; } = string.Empty;
        public byte[] Password { get; set; } // password encrypted
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public bool IsAdmin { get; set; }
        public byte[] Key { get; set; }
    }
}
