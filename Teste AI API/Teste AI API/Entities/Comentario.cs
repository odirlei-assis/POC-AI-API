namespace Teste_AI_API.Entities
{
    public class Comentario
    {
        public int ComentarioId { get; set; }
        public int UsuarioId { get; set; }
        public string Texto { get; set; } = string.Empty;

        public Usuario Usuario { get; set; } = null!;
    }
}
