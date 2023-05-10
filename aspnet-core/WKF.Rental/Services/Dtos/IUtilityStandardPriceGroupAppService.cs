using Volo.Abp.Application.Services;

namespace WKF.Rental;

public interface IUtilityStandardPriceGroupAppService :
    ICrudAppService<
        UtilityStandardPriceGroupDto,
        Guid,
        GetUtilityStandardPriceGroupsInput,
        UtilityStandardPriceGroupCreateDto,
        UtilityStandardPriceGroupUpdateDto
    >
{
}