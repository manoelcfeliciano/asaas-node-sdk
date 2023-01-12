import { Customer } from '~/domain/entities';
import { BaseAsaasResponse } from '~/domain/entities/base-asaas-response';
import { HttpRequestClient } from '~/domain/http-client';
import { CustomerRequestInput } from '~/domain/request-inputs/customers';
import { BaseResource } from './base-resource';

export class CustomersResource extends BaseResource {
	async getById(id: string): Promise<HttpRequestClient.Response<Customer>> {
		return this.httpClient.get<{}, Customer>({
			url: `/customers/${id}`,
		});
	}

	async getAll(
		query?: CustomerRequestInput.GetList.Params
	): Promise<BaseAsaasResponse.List<Customer>> {
		return this.httpClient.get<
			CustomerRequestInput.GetList.Params,
			BaseAsaasResponse.List<Customer>
		>({
			url: '/customers',
			query,
		});
	}
}
