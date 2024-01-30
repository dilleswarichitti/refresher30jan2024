using EventCalendarApp.Models;
using EventCalendarApp.Models.DTOs;

namespace EventCalendarApp.Interfaces
{
    public interface IUserService
    {
        UserDTO Login(UserDTO userDTO);
        UserDTO Register(UserDTO userDTO);
        List<User> GetUser(string email);
    } 
}
