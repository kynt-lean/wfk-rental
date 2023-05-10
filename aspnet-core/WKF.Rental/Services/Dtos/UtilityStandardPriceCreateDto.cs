using System.ComponentModel.DataAnnotations;
using Volo.Abp.ObjectExtending;

namespace WKF.Rental;

public class UtilityStandardPriceCreateDto : ExtensibleObject
{
    [Required]
    public Guid GroupId { get; set; }

    [Required]
    public RentalUtility Utility { get; set; }

    [Required]
    public double LowerBoundary { get; set; }

    [Required]
    public double Price { get; set; }

    public string? Note { get; set; }
}