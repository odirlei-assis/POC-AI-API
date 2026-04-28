namespace Teste_AI_API.DTOs
{
    public class ComentarioResponseDTO
    {
        public int IdComentario { get; set; }
        public string Texto { get; set; } = string.Empty;
        public string NomeUsuario { get; set; } = string.Empty;
    }
}
