using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace WKF.Rental;

public class UtilityStandardPriceGroup : FullAuditedAggregateRoot<Guid>
{
    public string Name { get; private set; } = String.Empty;

    public DateTime EffectiveDate { get; internal set; }

    public string? Note { get; internal set; }

    private UtilityStandardPriceGroup()
    {
    }

    internal UtilityStandardPriceGroup(
        Guid id,
        string name,
        DateTime effectiveDate,
        string? note
    ) : base(id)
    {
        SetName(name);
        EffectiveDate = effectiveDate;
        Note = note;
    }

    internal UtilityStandardPriceGroup SetName(string name)
    {
        Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            maxLength: 256
        );
        Name = name;
        return this;
    }
}