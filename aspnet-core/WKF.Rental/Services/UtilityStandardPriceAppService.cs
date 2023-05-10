using Volo.Abp.Application.Services;
using Volo.Abp.ObjectExtending;

namespace WKF.Rental;

public class UtilityStandardPriceAppService :
    CrudAppService<
        UtilityStandardPrice,
        UtilityStandardPriceDto,
        Guid,
        GetUtilityStandardPricesInput,
        UtilityStandardPriceCreateDto,
        UtilityStandardPriceUpdateDto
    >,
    IUtilityStandardPriceAppService
{
    protected IUtilityStandardPriceManager UtilityStandardPriceManager =>
        LazyServiceProvider.LazyGetRequiredService<IUtilityStandardPriceManager>();

    public UtilityStandardPriceAppService(IUtilityStandardPriceRepository repository) : base(repository)
    {
    }

    protected override async Task<UtilityStandardPrice> MapToEntityAsync(UtilityStandardPriceCreateDto createInput)
    {
        var standardPrice = await UtilityStandardPriceManager.CreateAsync(
            groupId: createInput.GroupId,
            utility: createInput.Utility,
            lowerBoundary: createInput.LowerBoundary,
            price: createInput.Price,
            note: createInput.Note
        );
        createInput.MapExtraPropertiesTo(standardPrice);
        return standardPrice;
    }

    protected override Task MapToEntityAsync(UtilityStandardPriceUpdateDto updateInput, UtilityStandardPrice entity)
    {
        updateInput.MapExtraPropertiesTo(entity);
        return UtilityStandardPriceManager.UpdateAsync(
            entity,
            groupId: updateInput.GroupId,
            utility: updateInput.Utility,
            lowerBoundary: updateInput.LowerBoundary,
            price: updateInput.Price,
            note: updateInput.Note
        );
    }

    protected override async Task<IQueryable<UtilityStandardPrice>> CreateFilteredQueryAsync(GetUtilityStandardPricesInput input)
    {
        return input.GetEmpty.HasValue && input.GetEmpty.Value
            ? (await Repository.GetQueryableAsync()).Where(x => false)
            : (await Repository.GetQueryableAsync())
            .WhereIf(input.GroupId.HasValue, x => x.GroupId.Equals(input.GroupId))
            .WhereIf(input.Utility.HasValue, x => x.Utility.Equals(input.Utility))
            .WhereIf(input.Filter != null, x => x.Note!.Contains(input.Filter!));
    }

    protected override IQueryable<UtilityStandardPrice> ApplySorting(IQueryable<UtilityStandardPrice> query, GetUtilityStandardPricesInput input)
    {
        if (input.Sorting == null)
        {
            input.Sorting = "GroupId, Utility, LowerBoundary";
        }
        return base.ApplySorting(query, input);
    }
}