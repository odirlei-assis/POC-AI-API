using Teste_AI_API.Entities;

namespace Teste_AI_API.Repositories.Interfaces
{
    public interface IComentarioRepository
    {
        Task<List<Comentario>> GetAllAsync();
        Task AddAsync(Comentario comentario);
        Task DeleteAsync(int id);
    }
}
