using Volo.Abp.Application.Dtos;

namespace WKF.Rental;

public class GetUtilityStandardPricesInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }

    public Guid? GroupId { get; set; }

    public RentalUtility? Utility { get; set; }

    public bool? GetEmpty { get; set; }
}