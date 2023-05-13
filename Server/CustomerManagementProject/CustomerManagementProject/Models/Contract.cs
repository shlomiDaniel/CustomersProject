using System.ComponentModel.DataAnnotations;

namespace CustomerManagementProject.Models
{
    public class Contract
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Name { get; set; }
        public ContractType ContractTypes { get; set; }
        public List<Package>? Packages { get; set; }
        public int? CustomerId { get; set; }
        //public Customer? Customer { get; set; }
    }

    public enum ContractType
    {
        Type1,
        Type2,
        Type3
    }
}
