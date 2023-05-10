using System.ComponentModel.DataAnnotations;
using Volo.Abp.Domain.Entities;
using Volo.Abp.ObjectExtending;

namespace WKF.Rental;

public class UtilityStandardPriceGroupUpdateDto : ExtensibleObject, IHasConcurrencyStamp
{
    [StringLength(256)]
    public string? Name { get; set; }

    public DateTime? EffectiveDate { get; set; }

    public string? Note { get; set; }

    public string ConcurrencyStamp { get; set; } = String.Empty;
}