using Volo.Abp.Application.Dtos;

namespace WKF.Rental;

public class GetUtilityStandardPriceGroupsInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}