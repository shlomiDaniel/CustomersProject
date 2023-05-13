using System.ComponentModel.DataAnnotations;

namespace CustomerManagementProject.Models
{
    public class Package
    {
        public int Id { get; set; }        
        public string Name { get; set; }
        public PackageTypeEnum PackageType { get; set; }
        public int PackageUsed { get; set; }
        public int Amount { get; set; }      
        public int? ContractId { get; set; }

        public enum PackageTypeEnum
        {
            Type1,
            Type2,
            Type3
        }
    }
}
