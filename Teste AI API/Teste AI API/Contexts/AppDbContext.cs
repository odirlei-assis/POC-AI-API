using Microsoft.EntityFrameworkCore;
using Teste_AI_API.Entities;

namespace Teste_AI_API.Contexts
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options) { }

        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Comentario> Comentario { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Usuario>(entity =>
        //    {
        //        entity.HasKey(e => e.IdUsuario);
        //        entity.Property(e => e.Nome).HasMaxLength(255).IsRequired();
        //    });

        //    modelBuilder.Entity<Comentario>(entity =>
        //    {
        //        entity.HasKey(e => e.IdComentario);
        //        entity.Property(e => e.Texto).IsRequired();

        //        entity.HasOne(e => e.Usuario)
        //              .WithMany(u => u.Comentarios)
        //              .HasForeignKey(e => e.IdUsuario);
        //    });
        //}
    }
}
