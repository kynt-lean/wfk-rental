using Volo.Abp.Domain.Repositories;

namespace WKF.Rental;

public interface IUtilityStandardPriceGroupRepository : IRepository<UtilityStandardPriceGroup, Guid>
{
    Task NameExistsAsync(string name, UtilityStandardPriceGroup? group = null);
    Task EffectiveDateExistsAsync(DateTime effectiveDate, UtilityStandardPriceGroup? group = null);
    Task ValidAsync(Guid id);
}