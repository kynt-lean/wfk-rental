using AutoMapper;

namespace WKF.Rental.ObjectMapping;

public class RentalAutoMapperProfile : Profile
{
    public RentalAutoMapperProfile()
    {
        CreateMap<UtilityStandardPrice, UtilityStandardPriceDto>().MapExtraProperties();
        CreateMap<UtilityStandardPriceGroup, UtilityStandardPriceGroupDto>().MapExtraProperties();
    }
}
