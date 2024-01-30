using System.ComponentModel.DataAnnotations;

namespace EventCalendarApp.Models
{
    public class User
    {
        [Key]
        public string Email { get; set; } = string.Empty;  // user's email, unique for every user 
        public string FirstName { get; set; } = string.Empty; // first name of the user
        public string LastName { get; set; } = string.Empty; // last name of the user
        public byte[] Password { get; set; } // encrypted password
        public string Role { get; set; } // role of the user
        public byte[] Key { get; set; }
    }
}
