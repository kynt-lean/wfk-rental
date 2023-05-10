using Volo.Abp.Domain.Repositories;

namespace WKF.Rental;

public interface IUtilityStandardPriceRepository : IRepository<UtilityStandardPrice, Guid>
{
    Task StandardPriceLowerBoundaryExistsAsync(
        Guid groupId,
        RentalUtility utility,
        double lowerBoundary,
        UtilityStandardPrice? standardPrice = null
    );
}