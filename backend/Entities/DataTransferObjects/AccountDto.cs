namespace Entities.DataTransferObjects;

public class AccountDto
{
    public Guid Id { get; set; }
    public DateTime DeteCreated { get; set; }
    public string AccountType { get; set; }
}