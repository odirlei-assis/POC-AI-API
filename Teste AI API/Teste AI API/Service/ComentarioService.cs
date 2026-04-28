using Teste_AI_API.DTOs;
using Teste_AI_API.Entities;
using Teste_AI_API.Repositories;
using Teste_AI_API.Repositories.Interfaces;
using Teste_AI_API.Service.Interfaces;

namespace Teste_AI_API.Service
{
    public class ComentarioService : IComentarioService
    {
        private readonly IComentarioRepository _repository;
        private readonly IUsuarioRepository _usuarioRepository;
        private readonly IContentSafetyService _safetyService;

        public ComentarioService(
            IComentarioRepository repository,
            IUsuarioRepository usuarioRepository,
            IContentSafetyService safetyService)
        {
            _repository = repository;
            _usuarioRepository = usuarioRepository;
            _safetyService = safetyService;
        }

        public async Task<(bool Sucesso, string Mensagem)> AddAsync(Comentario comentario)
        {
            var usuario = await _usuarioRepository.GetByIdAsync(comentario.UsuarioId);

            if (usuario == null)
                return (false, "Usuário não encontrado");

            var safety = await _safetyService.ValidateTextAsync(comentario.Texto);

            if (!safety.IsSafe)
                return (false, safety.Message);

            await _repository.AddAsync(comentario);

            return (true, "Comentário salvo com sucesso");
        }

        public async Task<List<ComentarioResponseDTO>> GetAllAsync()
        {
            var data = await _repository.GetAllAsync();

            return data.Select(c => new ComentarioResponseDTO
            {
                IdComentario = c.ComentarioId,
                Texto = c.Texto,
                NomeUsuario = c.Usuario.Nome
            }).ToList();
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
