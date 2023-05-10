using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Validation;

namespace WKF.Rental.Data;

public class EfCoreUtilityStandardPriceRepository :
    EfCoreRepository<RentalDbContext, UtilityStandardPrice, Guid>,
    IUtilityStandardPriceRepository
{
    public EfCoreUtilityStandardPriceRepository(
        IDbContextProvider<RentalDbContext> dbContextProvider
    ) : base(dbContextProvider)
    {
    }

    public virtual async Task StandardPriceLowerBoundaryExistsAsync(
        Guid groupId,
        RentalUtility utility,
        double lowerBoundary,
        UtilityStandardPrice? standardPrice = null
    )
    {
        var existing = await (await GetQueryableAsync())
            .Where(x => x.GroupId.Equals(groupId) && x.Utility.Equals(utility) && x.LowerBoundary.Equals(lowerBoundary))
            .WhereIf(standardPrice != null, x => !x.Id.Equals(standardPrice!.Id))
            .FirstOrDefaultAsync();
        if (existing != null)
        {
            throw new AbpValidationException("UtilityStandardPriceWithThisLowerBoundaryAlreadyExists");
        }
    }
}