using System.Text.Json.Serialization;

namespace Teste_AI_API.Entities
{
    public class Usuario
    {
        public int UsuarioId { get; set; }
        public string Nome { get; set; } = string.Empty;

        [JsonIgnore]
        public ICollection<Comentario> Comentarios { get; set; } = new List<Comentario>();
    }
}
