using Microsoft.EntityFrameworkCore;
using Teste_AI_API.Contexts;
using Teste_AI_API.Repositories;
using Teste_AI_API.Repositories.Interfaces;
using Teste_AI_API.Service;
using Teste_AI_API.Service.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// DB
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        "Server=(localdb)\\MSSQLLocalDB;Database=Teste_AI_API;Trusted_Connection=True;TrustServerCertificate=True;"
    ));

// DI
builder.Services.AddScoped<IComentarioService, ComentarioService>();
builder.Services.AddScoped<IContentSafetyService, ContentSafetyService>();
builder.Services.AddScoped<IComentarioRepository, ComentarioRepository>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new()
    {
        Title = "Teste AI API",
        Version = "v1",
        Description = "API de validação de comentários com IA (Gemini)"
    });
});

builder.Services.AddControllers();

var app = builder.Build();

// Swagger
app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Teste AI API v1");
    options.RoutePrefix = string.Empty; // abre direto na raiz
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{

}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
