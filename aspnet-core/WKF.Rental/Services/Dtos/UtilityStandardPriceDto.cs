using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace WKF.Rental;

public class UtilityStandardPriceDto : ExtensibleEntityDto<Guid>, IHasConcurrencyStamp
{
    public Guid GroupId { get; set; }

    public RentalUtility Utility { get; set; }

    public double LowerBoundary { get; set; }

    public double Price { get; set; }

    public string? Note { get; set; }

    public string ConcurrencyStamp { get; set; } = String.Empty;

    public bool IsDeleted { get; set; }
}