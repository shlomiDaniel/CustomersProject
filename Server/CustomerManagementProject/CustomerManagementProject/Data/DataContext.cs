using CustomerManagementProject.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using static CustomerManagementProject.Models.Package;

namespace CustomerManagementProject.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext>options) : base(options) { }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<Package> Packages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contract>()
                .Property(c => c.ContractTypes)
                .HasConversion<string>();

            modelBuilder.Entity<Package>()
                .Property(p => p.PackageType)
                .HasConversion<string>();

            //modelBuilder.Entity<Customer>()
            //.HasMany(c => c.Contracts)
            //.WithOne(e => e.Customer)
            //.HasForeignKey(e => e.CustomerId)
            //.OnDelete(DeleteBehavior.Cascade);
        }



    }
    
}
