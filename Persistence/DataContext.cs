using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    // ORM layer, DataContext service, injected at Startup.cs to other classes
    public class DataContext : DbContext
    {
        // : base(options) uses constructor of DbContext Class with specified options
        // (DbContextOptions options)
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        // If DbSet<TEntity> properties have a public setter,
        // they are automatically initialized when the instance context is created.
        public DbSet<Activity> Activities { get; set; }
    }
}