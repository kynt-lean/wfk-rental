import type { PagedResultDto } from '@abp/ng.core';
import { Rest, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type {
  GetUtilityStandardPricesInput,
  UtilityStandardPriceCreateDto,
  UtilityStandardPriceDto,
  UtilityStandardPriceUpdateDto,
} from './models';

@Injectable({
  providedIn: 'root',
})
export class UtilityStandardPriceService {
  apiName = 'Default';

  create = (input: UtilityStandardPriceCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UtilityStandardPriceDto>(
      {
        method: 'POST',
        url: '/api/app/utility-standard-price',
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/utility-standard-price/${id}`,
      },
      { apiName: this.apiName, ...config }
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UtilityStandardPriceDto>(
      {
        method: 'GET',
        url: `/api/app/utility-standard-price/${id}`,
      },
      { apiName: this.apiName, ...config }
    );

  getList = (input: GetUtilityStandardPricesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<UtilityStandardPriceDto>>(
      {
        method: 'GET',
        url: '/api/app/utility-standard-price',
        params: input,
      },
      { apiName: this.apiName, ...config }
    );

  update = (id: string, input: UtilityStandardPriceUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UtilityStandardPriceDto>(
      {
        method: 'PUT',
        url: `/api/app/utility-standard-price/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  constructor(private restService: RestService) {}
}
