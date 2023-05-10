using Volo.Abp.Application.Services;
using Volo.Abp.ObjectExtending;

namespace WKF.Rental;

public class UtilityStandardPriceGroupAppService :
    CrudAppService<
        UtilityStandardPriceGroup,
        UtilityStandardPriceGroupDto,
        Guid,
        GetUtilityStandardPriceGroupsInput,
        UtilityStandardPriceGroupCreateDto,
        UtilityStandardPriceGroupUpdateDto
    >,
    IUtilityStandardPriceGroupAppService
{
    protected IUtilityStandardPriceManager UtilityStandardPriceManager =>
        LazyServiceProvider.LazyGetRequiredService<IUtilityStandardPriceManager>();

    public UtilityStandardPriceGroupAppService(IUtilityStandardPriceGroupRepository repository) : base(repository)
    {
    }

    protected override async Task<UtilityStandardPriceGroup> MapToEntityAsync(UtilityStandardPriceGroupCreateDto createInput)
    {
        var group = await UtilityStandardPriceManager.CreateGroupAsync(
            name: createInput.Name,
            effectiveDate: createInput.EffectiveDate,
            note: createInput.Note
        );
        createInput.MapExtraPropertiesTo(group);
        return group;
    }

    protected override Task MapToEntityAsync(UtilityStandardPriceGroupUpdateDto updateInput, UtilityStandardPriceGroup entity)
    {
        updateInput.MapExtraPropertiesTo(entity);
        return UtilityStandardPriceManager.UpdateGroupAsync(
            entity,
            name: updateInput.Name,
            effectiveDate: updateInput.EffectiveDate,
            note: updateInput.Note
        );
    }

    protected override async Task<IQueryable<UtilityStandardPriceGroup>> CreateFilteredQueryAsync(GetUtilityStandardPriceGroupsInput input)
    {
        return (await Repository.GetQueryableAsync())
            .WhereIf(input.Filter != null, x => x.Name.Contains(input.Filter!));
    }

    protected override IQueryable<UtilityStandardPriceGroup> ApplySorting(IQueryable<UtilityStandardPriceGroup> query, GetUtilityStandardPriceGroupsInput input)
    {
        if (input.Sorting == null)
        {
            input.Sorting = "EffectiveDate DESC";
        }
        return base.ApplySorting(query, input);
    }
}