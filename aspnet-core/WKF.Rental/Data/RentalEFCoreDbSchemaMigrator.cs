using Microsoft.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;

namespace WKF.Rental.Data;

public class RentalEFCoreDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public RentalEFCoreDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the RentalDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<RentalDbContext>()
            .Database
            .MigrateAsync();
    }
}
