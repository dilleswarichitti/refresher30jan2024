using EventCalendarApp.Exceptions;
using EventCalendarApp.Interfaces;
using EventCalendarApp.Models;
using EventCalendarApp.Models.DTOs;
using EventCalendarApp.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EventCalendarApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("reactApp")]
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
        public ActionResult GetUser(string email)
        {
            string errorMessage = string.Empty;
            try
            {
                var result = _userService.GetUser(email);
                return Ok(result);
            }
            catch (NoUsersAvailableException e)
            {
                errorMessage = e.Message;
            }
            return BadRequest(errorMessage);
        }
        [HttpPut("UpdateUser")]
        public ActionResult UpdateUser(UserDTO userDTO)
        {
            var result = _userService.UpdateUser(userDTO);

            if (result != null)
            {
                return Ok(result);
            }

            return NotFound("User not found or invalid current password");
        }
    }
}