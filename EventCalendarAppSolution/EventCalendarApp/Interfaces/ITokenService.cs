using EventCalendarApp.Models.DTOs;

namespace EventCalendarApp.Interfaces
{
    public interface ITokenService
    {
        string GetToken(UserDTO user);
    }
}
