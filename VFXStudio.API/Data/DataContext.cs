using Microsoft.EntityFrameworkCore;
using VFXStudio.API.Models;

namespace VFXStudio.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values { get; set; } 
        public DbSet<User>  Users { get; set; }
        public DbSet<Comment> Comments {get; set;}
        public DbSet<Job> Jobs { get; set; }
    }
}