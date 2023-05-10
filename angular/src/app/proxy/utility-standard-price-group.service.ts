import type { PagedResultDto } from '@abp/ng.core';
import { Rest, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type {
  GetUtilityStandardPriceGroupsInput,
  UtilityStandardPriceGroupCreateDto,
  UtilityStandardPriceGroupDto,
  UtilityStandardPriceGroupUpdateDto,
} from './models';

@Injectable({
  providedIn: 'root',
})
export class UtilityStandardPriceGroupService {
  apiName = 'Default';

  create = (input: UtilityStandardPriceGroupCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UtilityStandardPriceGroupDto>(
      {
        method: 'POST',
        url: '/api/app/utility-standard-price-group',
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/utility-standard-price-group/${id}`,
      },
      { apiName: this.apiName, ...config }
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UtilityStandardPriceGroupDto>(
      {
        method: 'GET',
        url: `/api/app/utility-standard-price-group/${id}`,
      },
      { apiName: this.apiName, ...config }
    );

  getList = (input: GetUtilityStandardPriceGroupsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<UtilityStandardPriceGroupDto>>(
      {
        method: 'GET',
        url: '/api/app/utility-standard-price-group',
        params: input,
      },
      { apiName: this.apiName, ...config }
    );

  update = (id: string, input: UtilityStandardPriceGroupUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UtilityStandardPriceGroupDto>(
      {
        method: 'PUT',
        url: `/api/app/utility-standard-price-group/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  constructor(private restService: RestService) {}
}
