import {
	BillingType,
	CreditCard,
	Discount,
	Fine,
	Interest,
	Payment,
	PaymentDocument,
	Split,
	Status,
} from '../entities';
import { BaseAsaasResponse } from '../entities/base-asaas-response';
import { HttpRequestClient } from '../http-client';
import { DeletedResponse } from './shared/deleted-response';

export namespace PaymentsHttp {
	export namespace Create {
		export type Body = {
			customer: string;
			billingType: BillingType;
			value: number;
			dueDate: string;
			description?: string;
			externalReference?: string;
			installmentCount?: number;
			installmentValue?: number;
			discount?: Discount.Main;
			interest?: Interest;
			fine?: Fine;
			postalService?: boolean;
			split?: Array<Split>;
		};

		export type Response = HttpRequestClient.Response<Payment>;
	}

	export namespace CreateWithInstallments {
		export type Body = {
			customer: string;
			billingType: BillingType;
			dueDate: string;
			description?: string;
			externalReference?: string;
			installmentCount?: number;
			installmentValue?: number;
			totalValue?: number;
			discount?: Discount.Main;
			interest?: Interest;
			fine?: Fine;
			postalService?: boolean;
			split?: Array<{
				walletId: string;
				fixedValue?: number;
				percentualValue?: number;
			}>;
		};

		export type Response = HttpRequestClient.Response<Payment>;
	}

	export namespace CreateWithCreditCard {
		export interface Body extends Create.Body {
			creditCard: CreditCard.Input;
			creditCardHolderInfo: CreditCard.HolderInfo;
			creditCardToken?: string;
			remoteIp: string;
		}

		export type Response = HttpRequestClient.Response<Payment>;
	}

	export namespace TokenizeCreditCard {
		export type Body = CreditCard.Input;

		export type Response = HttpRequestClient.Response<CreditCard.Response>;
	}

	export namespace GeyById {
		export type Response = HttpRequestClient.Response<Payment>;
	}

	export namespace GetList {
		export type Params = Partial<{
			customer?: string;
			billingType?: BillingType;
			status?: Status.Payment;
			subscription?: string;
			installment?: string;
			externalReference?: string;
			paymentDate?: string;
			estimatedCreditDate?: string;
			pixQrCodeId?: string;
			anticipated?: boolean;
			'dateCreated[ge]'?: string;
			'dateCreated[le]'?: string;
			'paymentDate[ge]'?: string;
			'paymentDate[le]'?: string;
			'estimatedCreditDate[ge]'?: string;
			'estimatedCreditDate[le]'?: string;
			'dueDate[ge]'?: string;
			'dueDate[le]'?: string;
			user?: string;
			offset?: number;
			limit?: number;
		}>;

		export type Response = BaseAsaasResponse.List<Payment>;
	}

	export namespace Remove {
		export type Response = HttpRequestClient.Response<DeletedResponse>;
	}

	export namespace Restore {
		export type Response = HttpRequestClient.Response<Payment>;
	}

	export namespace Refund {
		export type Response = HttpRequestClient.Response<Payment>;
	}

	export namespace Update {
		export type Body = Partial<Create.Body>;

		export type Response = HttpRequestClient.Response<Payment>;
	}

	export namespace GetBoletoBarCode {
		export type Response = HttpRequestClient.Response<{
			identificationField: string;
			nossoNumero: string;
			barCode: string;
		}>;
	}

	export namespace GetPixQrCode {
		export type Response = HttpRequestClient.Response<{
			encodedImage: string;
			payload: string;
			expirationDate: string;
		}>;
	}

	export namespace ConfirmCashCollection {
		export type Params = Partial<{
			id: string;
			paymentDate: string;
			value: string;
			notifyCustomer: boolean;
		}>;

		export type Response = HttpRequestClient.Response<Payment>;
	}

	export namespace UndoReceivedInCash {
		export type Response = HttpRequestClient.Response<Payment>;
	}

	export namespace UpdateDocument {
		export type Body = {
			availableAfterPayment: boolean;
			type: PaymentDocument['type'];
		};

		export type Response = HttpRequestClient.Response<PaymentDocument>;
	}

	export namespace GetDocument {
		export type Response = HttpRequestClient.Response<PaymentDocument>;
	}

	export namespace GetAllDocuments {
		export type Response = BaseAsaasResponse.List<PaymentDocument>;
	}

	export namespace RemoveDocument {
		export type Response = HttpRequestClient.Response<DeletedResponse>;
	}
}
