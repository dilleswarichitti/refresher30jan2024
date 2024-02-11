using OnlineBookingApp.Models.DTOs;

namespace OnlineBookingApp.Interfaces
{
    public interface ITokenService
    {
        string GetToken(UserDTO user);
    }
}
