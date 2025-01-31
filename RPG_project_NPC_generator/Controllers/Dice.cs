using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class Dice : Controller
{

    [HttpGet]
    public IActionResult GetNumber(int sides)
    {
        var result = new Random().Next(1, sides + 1);
        return Ok(result);
    }
}