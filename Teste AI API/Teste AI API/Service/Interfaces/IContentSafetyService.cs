namespace Teste_AI_API.Service.Interfaces
{
    public interface IContentSafetyService
    {
        Task<(bool IsSafe, string Message)> ValidateTextAsync(string texto);
    }
}
