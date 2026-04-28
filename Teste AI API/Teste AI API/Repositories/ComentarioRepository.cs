using Microsoft.EntityFrameworkCore;
using Teste_AI_API.Contexts;
using Teste_AI_API.Entities;
using Teste_AI_API.Repositories.Interfaces;

namespace Teste_AI_API.Repositories
{
    public class ComentarioRepository : IComentarioRepository
    {
        private readonly AppDbContext _context;

        public ComentarioRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Comentario>> GetAllAsync()
        {
            return await _context.Comentario
                .Include(c => c.Usuario)
                .ToListAsync();
        }

        public async Task AddAsync(Comentario comentario)
        {
            _context.Comentario.Add(comentario);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Comentario.FindAsync(id);
            if (entity != null)
            {
                _context.Comentario.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
