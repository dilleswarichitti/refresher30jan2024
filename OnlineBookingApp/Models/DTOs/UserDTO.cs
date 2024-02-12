using System.ComponentModel.DataAnnotations;

namespace OnlineBookingApp.Models.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string? Email { get; set; }
        [Required(ErrorMessage = "Password mandetory")]
        public string Password { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; } 
        public bool IsAdmin { get; set; }
        public string? Token { get; set; }
    }
}
