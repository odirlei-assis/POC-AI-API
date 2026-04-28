using Teste_AI_API.Contexts;
using Teste_AI_API.Entities;
using Teste_AI_API.Repositories.Interfaces;

namespace Teste_AI_API.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly AppDbContext _context;

        public UsuarioRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Usuario?> GetByIdAsync(int id)
        {
            return await _context.Usuario.FindAsync(id);
        }
    }
}
