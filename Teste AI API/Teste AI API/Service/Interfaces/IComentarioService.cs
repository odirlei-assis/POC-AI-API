using Teste_AI_API.DTOs;
using Teste_AI_API.Entities;

namespace Teste_AI_API.Service.Interfaces
{
    public interface IComentarioService
    {
        Task<(bool Sucesso, string Mensagem)> AddAsync(Comentario comentario);
        Task<List<ComentarioResponseDTO>> GetAllAsync();
        Task DeleteAsync(int id);
    }
}
