using OnlineBookingApp.Models.DTOs;
using OnlineBookingApp.Models;

namespace OnlineBookingApp.Interfaces
{
    public interface IUserService
    {
        UserDTO Login(UserDTO userDTO);
        UserDTO Register(UserDTO userDTO);
        List<User> GetUser(string Username); 
    }
}
