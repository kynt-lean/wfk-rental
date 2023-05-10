using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Validation;

namespace WKF.Rental.Data;

public class EfCoreUtilityStandardPriceGroupRepository :
    EfCoreRepository<RentalDbContext, UtilityStandardPriceGroup, Guid>,
    IUtilityStandardPriceGroupRepository
{
    public EfCoreUtilityStandardPriceGroupRepository(
        IDbContextProvider<RentalDbContext> dbContextProvider
    ) : base(dbContextProvider)
    {
    }

    public virtual async Task EffectiveDateExistsAsync(DateTime effectiveDate, UtilityStandardPriceGroup? group = null)
    {
        var existing = await (await GetQueryableAsync())
            .Where(x => x.EffectiveDate.Equals(effectiveDate))
            .WhereIf(group != null, x => !x.Id.Equals(group!.Id))
            .FirstOrDefaultAsync();
        if (existing != null)
        {
            throw new AbpValidationException("UtilityStandardPriceGroupEffectiveDateAlreadyExists");
        }
    }

    public virtual async Task NameExistsAsync(string name, UtilityStandardPriceGroup? group = null)
    {
        var existing = await (await GetQueryableAsync())
            .Where(x => x.Name.Equals(name))
            .WhereIf(group != null, x => !x.Id.Equals(group!.Id))
            .FirstOrDefaultAsync();
        if (existing != null)
        {
            throw new AbpValidationException("UtilityStandardPriceGroupNameAlreadyExists");
        }
    }

    public virtual async Task ValidAsync(Guid id)
    {
        var existing = await FindAsync(id);
        if (existing == null)
        {
            throw new AbpValidationException("InvalidUtilityStandardPriceGroup");
        }
    }
}