using Teste_AI_API.Entities;

namespace Teste_AI_API.Repositories.Interfaces
{
    public interface IUsuarioRepository
    {
        Task<Usuario?> GetByIdAsync(int id);
    }
}
