using OnlineBookingApp.Interfaces;
using OnlineBookingApp.Models;
using OnlineBookingApp.Models.DTOs;
using System.Security.Cryptography;
using System.Text;

namespace OnlineBookingApp.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<string, User> _repository;
        private readonly ITokenService _tokenService;

        public UserService(IRepository<string, User> repository, ITokenService tokenService)
        {
            _repository = repository;
            _tokenService = tokenService;
        }

        public List<User> GetUser(string Username)
        {
            var user = _repository.GetAll().Where(c => c.Username == Username).ToList();
            if (user != null)
            {
                return user;
            }
            throw new NoUsersAvailableException();
        }
        public UserDTO Login(UserDTO userDTO)
        {
            var user = _repository.GetById(userDTO.Username);
            if (user != null)
            {
                HMACSHA512 hmac = new HMACSHA512(user.Key);
                var userpass = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password));
                for (int i = 0; i < userpass.Length; i++)
                {
                    if (user.Password[i] != userpass[i])
                        return null;
                }
                userDTO.IsAdmin = user.IsAdmin;
                userDTO.Token = _tokenService.GetToken(userDTO);
                userDTO.Password = "";
                return userDTO;
            }
            return null;
        }

        public UserDTO Register(UserDTO userDTO)
        {
            HMACSHA512 hmac = new HMACSHA512();
            User user = new User()
            {
                Username=userDTO.Username,
                Email = userDTO.Email,
                Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password)),
                Address=userDTO.Address,
                PhoneNumber=userDTO.PhoneNumber,
                Key = hmac.Key,
                IsAdmin = userDTO.IsAdmin
            };
            var result = _repository.Add(user);
            if (result != null)
            {
                userDTO.Password = "";
                return userDTO;
            }
            return null;
        }
    }
}
