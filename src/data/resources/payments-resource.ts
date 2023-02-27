
import { PaymentsHttp } from '../../domain/asaas-http/payments';
import { BaseResource } from './base-resource';

export class PaymentsResource extends BaseResource {
	async create(params: PaymentsHttp.Create.Body): Promise<PaymentsHttp.Create.Response> {
		return this.httpClient.post<PaymentsHttp.Create.Body, PaymentsHttp.Create.Response>({
			url: '/payments',
			body: params,
		});
	}

	async createWithCreditCard(
		params: PaymentsHttp.CreateWithCreditCard.Body
	): Promise<PaymentsHttp.CreateWithCreditCard.Response> {
		return this.httpClient.post<
			PaymentsHttp.CreateWithCreditCard.Body,
			PaymentsHttp.CreateWithCreditCard.Response
		>({
			url: '/payments',
			body: params,
		});
	}

	async tokenizeCreditCard(
		params: PaymentsHttp.TokenizeCreditCard.Body
	): Promise<PaymentsHttp.TokenizeCreditCard.Response> {
		return this.httpClient.post<
			PaymentsHttp.TokenizeCreditCard.Body,
			PaymentsHttp.TokenizeCreditCard.Response
		>({
			url: '/creditCard/tokenize',
			body: params,
		});
	}

	async createWithInstallments(
		params: PaymentsHttp.CreateWithInstallments.Body
	): Promise<PaymentsHttp.CreateWithInstallments.Response> {
		return this.httpClient.post<
			PaymentsHttp.CreateWithInstallments.Body,
			PaymentsHttp.CreateWithInstallments.Response
		>({
			url: '/payments',
			body: params,
		});
	}

	async getById(id: string): Promise<PaymentsHttp.GeyById.Response> {
		return this.httpClient.get<{}, PaymentsHttp.GeyById.Response>({
			url: `/payments/${id}`,
		});
	}

	async getAll(query?: PaymentsHttp.GetList.Params): Promise<PaymentsHttp.GetList.Response> {
		return this.httpClient.get<PaymentsHttp.GetList.Params, PaymentsHttp.GetList.Response>({
			url: '/payments',
			query,
		});
	}

	async update(
		id: string,
		params: PaymentsHttp.Update.Body
	): Promise<PaymentsHttp.Update.Response> {
		return this.httpClient.put<PaymentsHttp.Update.Body, PaymentsHttp.Update.Response>({
			url: `/payments/${id}`,
			body: params,
		});
	}

	async remove(id: string): Promise<PaymentsHttp.Remove.Response> {
		return this.httpClient.delete<null, PaymentsHttp.Remove.Response>({
			url: `/payments/${id}`,
		});
	}

	async restore(id: string): Promise<PaymentsHttp.Restore.Response> {
		return this.httpClient.post<null, PaymentsHttp.Restore.Response>({
			url: `/payments/${id}/restore`,
		});
	}

	async refund(id: string): Promise<PaymentsHttp.Refund.Response> {
		return this.httpClient.post<null, PaymentsHttp.Refund.Response>({
			url: `/payments/${id}/refund`,
		});
	}

	async getBoletoBarCode(id: string): Promise<PaymentsHttp.GetBoletoBarCode.Response> {
		return this.httpClient.get<{}, PaymentsHttp.GetBoletoBarCode.Response>({
			url: `/payments/${id}/identificationField`,
		});
	}

	async getPixQrCode(id: string): Promise<PaymentsHttp.GetPixQrCode.Response> {
		return this.httpClient.get<{}, PaymentsHttp.GetPixQrCode.Response>({
			url: `/payments/${id}/pixQrCode`,
		});
	}

	async confirmCashCollection(
		id: string,
		query?: PaymentsHttp.ConfirmCashCollection.Params
	): Promise<PaymentsHttp.ConfirmCashCollection.Response> {
		return this.httpClient.post<
			null,
			PaymentsHttp.ConfirmCashCollection.Response,
			PaymentsHttp.ConfirmCashCollection.Params
		>({
			url: `/payments/${id}/receiveInCash`,
			query,
		});
	}

	async undoReceivedInCash(id: string): Promise<PaymentsHttp.UndoReceivedInCash.Response> {
		return this.httpClient.post<null, PaymentsHttp.UndoReceivedInCash.Response>({
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
