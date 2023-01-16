import { PaymentsHttp } from '~/domain/asaas-http/payments';
import { CreditCard, Payment } from '~/domain/entities';
import { BaseAsaasResponse } from '~/domain/entities/base-asaas-response';
import { HttpRequestClient } from '~/domain/http-client';
import { BaseResource } from './base-resource';

export class PaymentsResource extends BaseResource {
	async create(params: PaymentsHttp.Create.Body): Promise<HttpRequestClient.Response<Payment>> {
		return this.httpClient.post<PaymentsHttp.Create.Body, Payment>({
			url: '/payments',
			body: params,
		});
	}

	async createWithCreditCard(
		params: PaymentsHttp.CreateWithCreditCard.Body
	): Promise<HttpRequestClient.Response<Payment>> {
		return this.httpClient.post<PaymentsHttp.CreateWithCreditCard.Body, Payment>({
			url: '/payments',
			body: params,
		});
	}

	async tokenizeCreditCard(
		params: PaymentsHttp.TokenizeCreditCard.Body
	): Promise<HttpRequestClient.Response<CreditCard.Response>> {
		return this.httpClient.post<PaymentsHttp.TokenizeCreditCard.Body, CreditCard.Response>({
			url: '/creditCard/tokenize',
			body: params,
		});
	}

	async createWithInstallments(
		params: PaymentsHttp.CreateWithInstallments.Body
	): Promise<HttpRequestClient.Response<Payment>> {
		return this.httpClient.post<PaymentsHttp.CreateWithInstallments.Body, Payment>({
			url: '/payments',
			body: params,
		});
	}

	async getById(id: string): Promise<HttpRequestClient.Response<Payment>> {
		return this.httpClient.get<{}, Payment>({
			url: `/payments/${id}`,
		});
	}

	async getAll(query?: PaymentsHttp.GetList.Params): Promise<BaseAsaasResponse.List<Payment>> {
		return this.httpClient.get<PaymentsHttp.GetList.Params, BaseAsaasResponse.List<Payment>>({
			url: '/payments',
			query,
		});
	}

	async update(
		id: string,
		params: PaymentsHttp.Update.Body
	): Promise<HttpRequestClient.Response<Payment>> {
		return this.httpClient.put<PaymentsHttp.Update.Body, Payment>({
			url: `/payments/${id}`,
			body: params,
		});
	}

	async remove(id: string): Promise<HttpRequestClient.Response<PaymentsHttp.Remove.Response>> {
		return this.httpClient.delete<
			null,
			HttpRequestClient.Response<PaymentsHttp.Remove.Response>
		>({
			url: `/payments/${id}`,
		});
	}

	async restore(id: string): Promise<HttpRequestClient.Response<Payment>> {
		return this.httpClient.post<null, HttpRequestClient.Response<Payment>>({
			url: `/payments/${id}/restore`,
		});
	}

	async refund(id: string): Promise<HttpRequestClient.Response<Payment>> {
		return this.httpClient.post<null, HttpRequestClient.Response<Payment>>({
			url: `/payments/${id}/refund`,
		});
	}

	async getBoletoBarCode(
		id: string
	): Promise<HttpRequestClient.Response<PaymentsHttp.GetBoletoBarCode.Response>> {
		return this.httpClient.get<{}, PaymentsHttp.GetBoletoBarCode.Response>({
			url: `/payments/${id}/identificationField`,
		});
	}

	async getPixQrCode(
		id: string
	): Promise<HttpRequestClient.Response<PaymentsHttp.GetPixQrCode.Response>> {
		return this.httpClient.get<{}, PaymentsHttp.GetPixQrCode.Response>({
			url: `/payments/${id}/pixQrCode`,
		});
	}

	async confirmCashCollection(
		id: string,
		query?: PaymentsHttp.ConfirmCashCollection.Params
	): Promise<HttpRequestClient.Response<PaymentsHttp.ConfirmCashCollection.Response>> {
		return this.httpClient.post<
			null,
			HttpRequestClient.Response<PaymentsHttp.ConfirmCashCollection.Response>,
			PaymentsHttp.ConfirmCashCollection.Params
		>({
			url: `/payments/${id}/receiveInCash`,
			query,
		});
	}

	async undoReceivedInCash(id: string): Promise<HttpRequestClient.Response<Payment>> {
		return this.httpClient.post<null, HttpRequestClient.Response<Payment>>({
			url: `/payments/${id}/undoReceivedInCash`,
		});
	}

	async updateDocument(
		id: string,
		docId: string,
		params: PaymentsHttp.UpdateDocument.Body
	): Promise<PaymentsHttp.UpdateDocument.Response> {
		return this.httpClient.post<
			PaymentsHttp.UpdateDocument.Body,
			PaymentsHttp.UpdateDocument.Response
		>({
			url: `/payments/${id}/documents/${docId}`,
			body: params,
		});
	}

	async getDocument(id: string, docId: string): Promise<PaymentsHttp.GetDocument.Response> {
		return this.httpClient.get<null, PaymentsHttp.GetDocument.Response>({
			url: `/payments/${id}/documents/${docId}`,
		});
	}

	async getAllDocuments(id: string): Promise<PaymentsHttp.GetAllDocuments.Response> {
		return this.httpClient.get<null, PaymentsHttp.GetAllDocuments.Response>({
			url: `/payments/${id}/documents`,
		});
	}

	async removeDocument(id: string, docId: string): Promise<PaymentsHttp.RemoveDocument.Response> {
		return this.httpClient.delete<null, PaymentsHttp.RemoveDocument.Response>({
			url: `/payments/${id}/documents/${docId}`,
		});
	}
}
