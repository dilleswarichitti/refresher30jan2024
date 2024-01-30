using EventCalendarApp.Interfaces;
using EventCalendarApp.Models.DTOs;
using EventCalendarApp.Models;
using EventCalendarApp.Repositories;
using EventCalendarApp.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Text;
using EventCalendarApp.Context;

namespace ECalendarTest 
{
    public class UserServiceTest
    {
        IRepository<string, User> repository;
        [SetUp]
        public void Setup()
        {
            var dbOptions = new DbContextOptionsBuilder<CalendarContext>()
                                .UseInMemoryDatabase("dbTestCustomer")//a database that gets created temp for testing purpose
                                .Options;
            CalendarContext context = new CalendarContext(dbOptions);
            repository = new UserRepository(context);

        }
        
        [Test]
        [TestCase("Test", "test123")]
        public void LoginTest(string un, string pass)
        {
            //Arrange
            var appSettings = @"{""SecretKey"": ""Anything will work here this is just for testing""}";
            var configurationBuilder = new ConfigurationBuilder();
            configurationBuilder.AddJsonStream(new MemoryStream(Encoding.UTF8.GetBytes(appSettings)));
            var tokenService = new TokenService(configurationBuilder.Build());
            IUserService userService = new UserService(repository, tokenService);
            userService.Register(new UserDTO
            {
                Email = un,
                FirstName = pass,
                LastName =pass,
                Password = pass,
                Role = "User"
            });
            //Action
            var result = userService.Login(new UserDTO { Email = "Test", Password = "test123", Role = "User" });
            //Assert
            Assert.AreEqual("Test", result.Email); 
        }
    }
}