import { Customer } from '~/domain/entities';
import { BaseAsaasResponse } from '~/domain/entities/base-asaas-response';
import { HttpRequestClient } from '~/domain/http-client';
import { CustomersHttp } from '~/domain/asaas-http/customers';
import { BaseResource } from './base-resource';

export class CustomersResource extends BaseResource {
	async getById(id: string): Promise<HttpRequestClient.Response<Customer>> {
		return this.httpClient.get<{}, Customer>({
			url: `/customers/${id}`,
		});
	}

	async getAll(query?: CustomersHttp.GetList.Params): Promise<BaseAsaasResponse.List<Customer>> {
		return this.httpClient.get<CustomersHttp.GetList.Params, BaseAsaasResponse.List<Customer>>({
			url: '/customers',
			query,
		});
	}

	async create(params: CustomersHttp.Create.Body) {
		return this.httpClient.post<CustomersHttp.Create.Body, Customer>({
			url: '/customers',
			body: params,
		});
	}

	async update(id: string, params: CustomersHttp.Update.Body) {
		return this.httpClient.put<CustomersHttp.Update.Body, Customer>({
			url: `/customers/${id}`,
			body: params,
		});
	}

	async remove(id: string) {
		return this.httpClient.delete<CustomersHttp.Update.Body, Customer>({
			url: `/customers/${id}`,
		});
	}

	async restore(id: string) {
		return this.httpClient.post<CustomersHttp.Update.Body, Customer>({
			url: `/customers/${id}/restore`,
		});
	}
}
