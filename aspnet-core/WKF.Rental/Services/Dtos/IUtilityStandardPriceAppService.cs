using Volo.Abp.Application.Services;

namespace WKF.Rental;

public interface IUtilityStandardPriceAppService :
    ICrudAppService<
        UtilityStandardPriceDto,
        Guid,
        GetUtilityStandardPricesInput,
        UtilityStandardPriceCreateDto,
        UtilityStandardPriceUpdateDto
    >
{
}