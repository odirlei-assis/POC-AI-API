using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste_AI_API.DTOs;
using Teste_AI_API.Entities;
using Teste_AI_API.Service;
using Teste_AI_API.Service.Interfaces;

namespace Teste_AI_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComentarioController : ControllerBase
    {
        private readonly IComentarioService _service;

        public ComentarioController(IComentarioService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var data = await _service.GetAllAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ComentarioRequestDTO dto)
        {
            var comentario = new Comentario
            {
                UsuarioId = dto.UsuarioId,
                Texto = dto.Texto
            };

            var result = await _service.AddAsync(comentario);

            if (!result.Sucesso)
                return BadRequest(result.Mensagem);

            return Ok(result.Mensagem);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteAsync(id);
            return NoContent();
        }
    }
}
