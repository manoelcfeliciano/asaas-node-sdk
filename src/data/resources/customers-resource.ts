import { CustomersHttp } from '../../domain/asaas-http/customers';
import { BaseResource } from './base-resource';

export class CustomersResource extends BaseResource {
	async getById(id: string): Promise<CustomersHttp.GetById.Response> {
		return this.httpClient.get<undefined, CustomersHttp.GetById.Response>({
			url: `/customers/${id}`,
		});
	}

	async getAll(query?: CustomersHttp.GetList.Params): Promise<CustomersHttp.GetList.Response> {
		return this.httpClient.get<CustomersHttp.GetList.Params, CustomersHttp.GetList.Response>({
			url: '/customers',
			query,
		});
	}

	async create(params: CustomersHttp.Create.Body): Promise<CustomersHttp.Create.Response> {
		return this.httpClient.post<CustomersHttp.Create.Body, CustomersHttp.Create.Response>({
			url: '/customers',
			body: params,
		});
	}

	async update(
		id: string,
		params: CustomersHttp.Update.Body
	): Promise<CustomersHttp.Update.Response> {
		return this.httpClient.put<CustomersHttp.Update.Body, CustomersHttp.Update.Response>({
			url: `/customers/${id}`,
			body: params,
		});
	}

	async remove(id: string): Promise<CustomersHttp.Remove.Response> {
		return this.httpClient.delete<undefined, CustomersHttp.Remove.Response>({
			url: `/customers/${id}`,
		});
	}

	async restore(id: string): Promise<CustomersHttp.Restore.Response> {
		return this.httpClient.post<undefined, CustomersHttp.Restore.Response>({
			url: `/customers/${id}/restore`,
		});
	}
}
