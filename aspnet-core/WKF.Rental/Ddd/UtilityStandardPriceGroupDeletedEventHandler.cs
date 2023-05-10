using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Linq;
using Volo.Abp.Uow;

namespace WKF.Rental;

public class UtilityStandardPriceGroupDeletedEventHandler :
    IDistributedEventHandler<EntityDeletedEto<UtilityStandardPriceGroup>>,
    ITransientDependency
{
    protected IUtilityStandardPriceRepository UtilityStandardPriceRepository { get; }
    protected IAsyncQueryableExecuter AsyncExecuter { get; }

    public UtilityStandardPriceGroupDeletedEventHandler(
        IUtilityStandardPriceRepository utilityStandardPriceRepository,
        IAsyncQueryableExecuter asyncExecuter)
    {
        UtilityStandardPriceRepository = utilityStandardPriceRepository;
        AsyncExecuter = asyncExecuter;
    }

    [UnitOfWork]
    public virtual async Task HandleEventAsync(EntityDeletedEto<UtilityStandardPriceGroup> eventData)
    {
        await UtilityStandardPriceRepository.DeleteManyAsync(
            ids: await AsyncExecuter.ToArrayAsync(
                (await UtilityStandardPriceRepository.GetQueryableAsync())
                    .Where(x => x.GroupId == eventData.Entity.Id)
                    .Select(x => x.Id)
            )
        );
    }
}