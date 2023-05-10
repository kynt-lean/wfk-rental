namespace WKF.Rental;

public interface IUtilityStandardPriceManager
{
    Task<UtilityStandardPriceGroup> CreateGroupAsync(
        string name,
        DateTime effectiveDate,
        string? note
    );

    Task<UtilityStandardPriceGroup> UpdateGroupAsync(
        UtilityStandardPriceGroup group,
        string? name = null,
        DateTime? effectiveDate = null,
        string? note = null
    );

    Task<UtilityStandardPrice> CreateAsync(
        Guid groupId,
        RentalUtility utility,
        double lowerBoundary,
        double price,
        string? note
    );

    Task<UtilityStandardPrice> UpdateAsync(
        UtilityStandardPrice standardPrice,
        Guid? groupId = null,
        RentalUtility? utility = null,
        double? lowerBoundary = null,
        double? price = null,
        string? note = null
    );
}