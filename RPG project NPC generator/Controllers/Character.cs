using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class Character : Controller
{
    [HttpGet]
    public IActionResult GetCharacter()
    {
        var name = "test";
        var age = 10;
        var history = "history placeholder";
        var character = new
        {
            Name = @name,
            Age = @age,
            History = @history
        };
        return Ok(character);
    }
}