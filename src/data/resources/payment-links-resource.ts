import { PaymentsLinkHttp } from '../../domain/asaas-http/payments-link';
import { BaseResource } from './base-resource';
import FormData from 'form-data';

export class PaymentLinksResource extends BaseResource {
	async create(params: PaymentsLinkHttp.Create.Body): Promise<PaymentsLinkHttp.Create.Response> {
		return this.httpClient.post<PaymentsLinkHttp.Create.Body, PaymentsLinkHttp.Create.Response>(
			{
				url: '/paymentLinks',
				body: params,
			}
		);
	}

	async update(
		id: string,
		params: PaymentsLinkHttp.Update.Body
	): Promise<PaymentsLinkHttp.Update.Response> {
		return this.httpClient.put<PaymentsLinkHttp.Update.Body, PaymentsLinkHttp.Update.Response>({
			url: `/paymentLinks/${id}`,
			body: params,
		});
	}

	async getById(id: string): Promise<PaymentsLinkHttp.GeyById.Response> {
		return this.httpClient.get<{}, PaymentsLinkHttp.GeyById.Response>({
			url: `/paymentLinks/${id}`,
		});
	}

	async getAll(
		query?: PaymentsLinkHttp.GetList.Params
	): Promise<PaymentsLinkHttp.GetList.Response> {
		return this.httpClient.get<
			PaymentsLinkHttp.GetList.Params,
			PaymentsLinkHttp.GetList.Response
		>({
			url: '/paymentLinks',
			query,
		});
	}

	async remove(id: string): Promise<PaymentsLinkHttp.Remove.Response> {
		return this.httpClient.delete<null, PaymentsLinkHttp.Remove.Response>({
			url: `/paymentLinks/${id}`,
		});
	}

	async restore(id: string): Promise<PaymentsLinkHttp.Restore.Response> {
		return this.httpClient.post<null, PaymentsLinkHttp.Restore.Response>({
			url: `/paymentLinks/${id}/restore`,
		});
	}

	async addImage(id: string, params: FormData): Promise<PaymentsLinkHttp.AddImage.Response> {
		return this.httpClient.post<FormData, PaymentsLinkHttp.AddImage.Response>({
			url: `/paymentLinks/${id}/images`,
			body: params,
			headers: { 'Content-Type': 'multipart/form-data' },
		});
	}

	async getImage(id: string, imageId: string): Promise<PaymentsLinkHttp.GetImage.Response> {
		return this.httpClient.get<null, PaymentsLinkHttp.GetImage.Response>({
			url: `/paymentLinks/${id}/images/${imageId}`,
		});
	}

	async getAllImages(id: string): Promise<PaymentsLinkHttp.GetAllImages.Response> {
		return this.httpClient.get<null, PaymentsLinkHttp.GetAllImages.Response>({
			url: `/paymentLinks/${id}/images`,
		});
	}

	async removeImage(id: string, imageId: string): Promise<PaymentsLinkHttp.RemoveImage.Response> {
		return this.httpClient.delete<null, PaymentsLinkHttp.RemoveImage.Response>({
			url: `/paymentLinks/${id}/images/${imageId}`,
		});
	}

	async setMainImage(
		id: string,
		imageId: string
	): Promise<PaymentsLinkHttp.SetMainImage.Response> {
		return this.httpClient.post<null, PaymentsLinkHttp.SetMainImage.Response>({
			url: `/paymentLinks/${id}/images/${imageId}/setAsMain`,
		});
	}
}
