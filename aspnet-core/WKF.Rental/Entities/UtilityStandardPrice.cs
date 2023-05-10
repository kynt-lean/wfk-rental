using Volo.Abp.Domain.Entities.Auditing;

namespace WKF.Rental;

public class UtilityStandardPrice : FullAuditedAggregateRoot<Guid>
{
    public Guid GroupId { get; internal set; }

    public RentalUtility Utility { get; internal set; }

    public double LowerBoundary { get; private set; }

    public double Price { get; private set; }

    public string? Note { get; internal set; }

    private UtilityStandardPrice()
    {
    }

    internal UtilityStandardPrice(
        Guid id,
        Guid groupId,
        RentalUtility utility,
        double lowerBoundary,
        double price,
        string? note
    ) : base(id)
    {
        GroupId = groupId;
        Utility = utility;
        SetLowerBoundary(lowerBoundary);
        SetPrice(price);
        Note = note;
    }

    internal UtilityStandardPrice SetLowerBoundary(double lowerBoundary)
    {
        if (lowerBoundary < 0)
        {
            throw new ArgumentException($"{nameof(lowerBoundary)} can not be less than 0!");
        }
        LowerBoundary = lowerBoundary;
        return this;
    }

    internal UtilityStandardPrice SetPrice(double price)
    {
        if (price < 0)
        {
            throw new ArgumentException($"{nameof(price)} can not be less than 0!");
        }
        Price = price;
        return this;
    }
}