using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineBookingApp.Interfaces;
using OnlineBookingApp.Models.DTOs;
using OnlineBookingApp.Services;

namespace OnlineBookingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPost]
        public ActionResult Register(UserDTO viewModel)
        {
            string message = "";
            try
            {
                var user = _userService.Register(viewModel);
                if (user != null)
                {
                    return Ok(user);
                }
            }
            catch (DbUpdateException exp)
            {
                message = "Duplicate username";
            }
            catch (Exception)
            {

            }

            return BadRequest(message);
        }
        [HttpPost]
        [Route("Login")]
        public IActionResult Login(UserDTO userDTO)
        {
            var user = _userService.Login(userDTO);
            if (user != null)
            {
                return Ok(user);
            }

            //ViewData["Message"] = "Invalid username or password";
            return Unauthorized("Invalid username or password");
        }
        [HttpGet]
        public ActionResult GetUser(string Username)
        {
            string errorMessage = string.Empty;
            try
            {
                var result = _userService.GetUser(Username);
                return Ok(result);
            }
            catch (NoUsersAvailableException e)
            {
                errorMessage = e.Message;
            }
            return BadRequest(errorMessage);
        }
    }
}

