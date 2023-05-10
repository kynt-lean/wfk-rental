using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace WKF.Rental.Data;

public class RentalDbContext : AbpDbContext<RentalDbContext>
{
    public RentalDbContext(DbContextOptions<RentalDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureAuditLogging();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureFeatureManagement();
        builder.ConfigureTenantManagement();

        /* Configure your own entities here */
        builder.Entity<UtilityStandardPriceGroup>(b =>
        {
            b.ToTable("UtilityStandardPriceGroups");
            b.ConfigureByConvention();
            b.Property(e => e.Name).HasMaxLength(256).IsRequired();
        });

        builder.Entity<UtilityStandardPrice>(b =>
        {
            b.ToTable("UtilityStandardPrices");
            b.ConfigureByConvention();
            b.HasOne<UtilityStandardPriceGroup>().WithMany().HasForeignKey(e => e.GroupId).IsRequired();
        });
    }
}
