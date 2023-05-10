using System.ComponentModel.DataAnnotations;
using Volo.Abp.ObjectExtending;

namespace WKF.Rental;

public class UtilityStandardPriceGroupCreateDto : ExtensibleObject
{
    [Required]
    [StringLength(256)]
    public string Name { get; set; } = String.Empty;

    [Required]
    public DateTime EffectiveDate { get; set; }

    public string? Note { get; set; }
}