using System.ComponentModel.DataAnnotations;

namespace EventCalendarApp.Models.DTOs
{
    public class UserDTO
    {
        [Required(ErrorMessage = "Email cannot be empty")]
        public string Email { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public string? Role { get; set; }
        public string? Token { get; set; }
        [Required(ErrorMessage = "Password mandetory")]
        public string Password { get; set; }
    }
}
