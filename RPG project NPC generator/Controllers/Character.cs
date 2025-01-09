using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using RPG_project_NPC_generator.Models;

[ApiController]
[Route("api/[controller]")]

public class CharacterController : Controller
{

    private readonly CharacterConfig _config;

    public CharacterController()
    {
        var json = System.IO.File.ReadAllText("CharacterConfig.json");
        _config = JsonSerializer.Deserialize<CharacterConfig>(json) ?? new CharacterConfig
        {
            Race = new Dictionary<int, string>(),
            Class = new Dictionary<int, string>(),
            Gender = new Dictionary<int, string>()
        };
    }

    [HttpGet]
    public IActionResult GetCharacter(int minAge, int maxAge, string region)
    {
        Random rnd = new Random();
        var raceIndex = rnd.Next(_config.Race.Count);
        var classIndex = rnd.Next(_config.Class.Count);
        var genderIndex = rnd.Next(_config.Gender.Count);

        var name = "test";
        var race = _config.Race.ElementAt(raceIndex).Value;
        var character_class = _config.Class.ElementAt(classIndex).Value;
        var gender = _config.Gender.ElementAt(genderIndex).Value;
        var age = rnd.Next(minAge, maxAge);
        var history = "history placeholder";
        var character = new
        {
            Name = @name,
            Race = @race,
            Class = @character_class,
            Gender = @gender,
            Age = @age,
            Region = @region,
            History = @history
        };
        return Ok(character);
    }
}