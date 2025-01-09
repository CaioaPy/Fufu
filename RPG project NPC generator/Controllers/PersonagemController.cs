using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class PersonagemController : Controller
{
    [HttpGet]
    public IActionResult GetProdutos()
    {
        var personagem = "test";
        return Ok(personagem);
    }
}