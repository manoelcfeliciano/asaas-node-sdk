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
	}

	export namespace CreateWithCreditCard {
		export interface Body extends Create.Body {
			creditCard: CreditCard.Input;
			creditCardHolderInfo: CreditCard.HolderInfo;
			creditCardToken?: string;
			remoteIp: string;
		}
	}

	export namespace TokenizeCreditCard {
		export type Body = CreditCard.Input;

		export type Response = {
			customer: string;
			creditCardHolderInfo: CreditCard.HolderInfo;
		};
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
	}

	export namespace Remove {
		export type Response = DeletedResponse;
	}

	export namespace Update {
		export type Body = Partial<Create.Body>;
	}

	export namespace GetBoletoBarCode {
		export type Response = {
			identificationField: string;
			nossoNumero: string;
			barCode: string;
		};
	}

	export namespace GetPixQrCode {
		export type Response = {
			encodedImage: string;
			payload: string;
			expirationDate: string;
		};
	}

	export namespace ConfirmCashCollection {
		export type Params = Partial<{
			id: string;
			paymentDate: string;
			value: string;
			notifyCustomer: boolean;
		}>;

		export type Response = Payment;
	}

	export namespace UpdateDocument {
		export type Body = {
			availableAfterPayment: boolean;
			type: PaymentDocument['type'];
		};

		export type Response = PaymentDocument;
	}

	export namespace GetDocument {
		export type Response = PaymentDocument;
	}
}
