using Volo.Abp.Domain.Entities;
using Volo.Abp.ObjectExtending;

namespace WKF.Rental;

public class UtilityStandardPriceUpdateDto : ExtensibleObject, IHasConcurrencyStamp
{
    public Guid? GroupId { get; set; }

    public RentalUtility? Utility { get; set; }

    public double? LowerBoundary { get; set; }

    public double? Price { get; set; }

    public string? Note { get; set; }

    public string ConcurrencyStamp { get; set; } = String.Empty;
}