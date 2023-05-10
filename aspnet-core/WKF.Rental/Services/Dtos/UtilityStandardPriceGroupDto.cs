using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace WKF.Rental;

public class UtilityStandardPriceGroupDto : ExtensibleEntityDto<Guid>, IHasConcurrencyStamp
{
    public string Name { get; set; } = String.Empty;

    public DateTime EffectiveDate { get; set; }

    public string? Note { get; set; }

    public string ConcurrencyStamp { get; set; } = String.Empty;

    public bool IsDeleted { get; set; }
}