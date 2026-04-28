namespace Teste_AI_API.DTOs
{
    public class ComentarioRequestDTO
    {
        public int UsuarioId { get; set; }
        public string Texto { get; set; } = string.Empty;
    }
}
