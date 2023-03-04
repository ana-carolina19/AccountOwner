using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models;

[Table("account")]
public class Account
{
    [Key]
    public Guid AccountId { get; set; }

    [Required]
    public DateTime DateCreated { get; set; }

    [Required]
    public string? AccountType { get; set; }

    [ForeignKey(nameof(Owner))]
    public Guid OwnerI {get; set; }
    public Owner? Owner { get; set; }

}