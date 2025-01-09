using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class History : Controller
{

    [HttpPost]
    public IActionResult PostHistory()
    {
        var validation = "We've received your history! Thank you!";
        return Ok(validation);
    }
}