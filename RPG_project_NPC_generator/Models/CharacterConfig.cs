using System.Text.Json;
namespace RPG_project_NPC_generator.Models
{

    public class CharacterConfig
    {
        public Dictionary<int, string> Name { get; set; }
        public Dictionary<int, string> Race { get; set; }
        public Dictionary<int, string> Class { get; set; }
        public Dictionary<int, string> Gender { get; set; }
        public Dictionary<int, string> Histories { get; set; }
        public Dictionary<int, string> Region { get; set; }
    }
}