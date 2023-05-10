using Volo.Abp.Domain.Services;

namespace WKF.Rental;

public class UtilityStandardPriceManager : DomainService, IUtilityStandardPriceManager
{

    protected IUtilityStandardPriceGroupRepository UtilityStandardPriceGroupRepository =>
        LazyServiceProvider.LazyGetRequiredService<IUtilityStandardPriceGroupRepository>();

    protected IUtilityStandardPriceRepository UtilityStandardPriceRepository =>
        LazyServiceProvider.LazyGetRequiredService<IUtilityStandardPriceRepository>();

    public virtual async Task<UtilityStandardPriceGroup> CreateGroupAsync(
        string name,
        DateTime effectiveDate,
        string? note
    )
    {
        await UtilityStandardPriceGroupRepository.NameExistsAsync(name);
        await UtilityStandardPriceGroupRepository.EffectiveDateExistsAsync(effectiveDate);
        return new UtilityStandardPriceGroup(
            GuidGenerator.Create(),
            name,
            effectiveDate,
            note
        );
    }

    public virtual async Task<UtilityStandardPriceGroup> UpdateGroupAsync(
        UtilityStandardPriceGroup group,
        string? name = null,
        DateTime? effectiveDate = null,
        string? note = null
    )
    {
        if (name != null && group.Name != name)
        {
            await UtilityStandardPriceGroupRepository.NameExistsAsync(name, group);
            group.SetName(name);
        }
        if (effectiveDate.HasValue && group.EffectiveDate != effectiveDate)
        {
            await UtilityStandardPriceGroupRepository.EffectiveDateExistsAsync(effectiveDate.Value, group);
            group.EffectiveDate = effectiveDate.Value;
        }
        if (note != null && group.Note != note)
        {
            group.Note = note;
        }

        return group;
    }

    public virtual async Task<UtilityStandardPrice> CreateAsync(
        Guid groupId,
        RentalUtility utility,
        double lowerBoundary,
        double price,
        string? note
    )
    {
        await UtilityStandardPriceGroupRepository.ValidAsync(groupId);
        await UtilityStandardPriceRepository.StandardPriceLowerBoundaryExistsAsync(groupId, utility, lowerBoundary);
        return new UtilityStandardPrice(
            GuidGenerator.Create(),
            groupId: groupId,
            utility,
            lowerBoundary: lowerBoundary,
            price: price,
            note
        );
    }

    public virtual async Task<UtilityStandardPrice> UpdateAsync(
        UtilityStandardPrice standardPrice,
        Guid? groupId = null,
        RentalUtility? utility = null,
        double? lowerBoundary = null,
        double? price = null,
        string? note = null
    )
    {
        bool isConstraintChanged = false;
        if (groupId.HasValue && standardPrice.GroupId != groupId)
        {
            await UtilityStandardPriceGroupRepository.ValidAsync(groupId.Value);
            isConstraintChanged = true;
            standardPrice.GroupId = groupId.Value;
        }
        if (utility.HasValue && standardPrice.Utility != utility)
        {
            isConstraintChanged = true;
            standardPrice.Utility = utility.Value;
        }
        if (lowerBoundary.HasValue && standardPrice.LowerBoundary != lowerBoundary)
        {
            isConstraintChanged = true;
            standardPrice.SetLowerBoundary(lowerBoundary.Value);
        }
        if (price.HasValue && standardPrice.Price != price)
        {
            standardPrice.SetPrice(price.Value);
        }
        if (note != null && standardPrice.Note != note)
        {
            standardPrice.Note = note;
        }
        if (isConstraintChanged)
        {
            await UtilityStandardPriceRepository.StandardPriceLowerBoundaryExistsAsync(
                standardPrice.GroupId,
                standardPrice.Utility,
                standardPrice.LowerBoundary,
                standardPrice
            );
        }

        return standardPrice;
    }
}