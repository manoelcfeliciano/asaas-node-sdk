
import { InstallmentsHttp } from '../../domain/asaas-http/installments';
import { BaseResource } from './base-resource';

export class InstallmentsResource extends BaseResource {
	async getById(id: string): Promise<InstallmentsHttp.GetById.Response> {
		return this.httpClient.get<undefined, InstallmentsHttp.GetById.Response>({
			url: `/installments/${id}`,
		});
	}

	async getAll(): Promise<InstallmentsHttp.GetList.Response> {
		return this.httpClient.get<
			InstallmentsHttp.GetList.Params,
			InstallmentsHttp.GetList.Response
		>({
			url: `/installments`,
		});
	}

	async remove(id: string): Promise<InstallmentsHttp.Remove.Response> {
		return this.httpClient.delete<undefined, InstallmentsHttp.Remove.Response>({
			url: `/installments/${id}`,
		});
	}

	async refund(id: string): Promise<InstallmentsHttp.Refund.Response> {
		return this.httpClient.post<undefined, InstallmentsHttp.Refund.Response>({
			url: `/installments/${id}/refund`,
		});
	}
}
