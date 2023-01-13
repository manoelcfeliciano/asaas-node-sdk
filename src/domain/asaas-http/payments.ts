import { BillingType, Discount, Fine, Interest, Split, Status } from '../entities';

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
			creditCard: {
				holderName: string;
				number: string;
				expiryMonth: string;
				expiryYear: string;
				ccv: string;
			};
			creditCardHolderInfo: {
				name: string;
				email: string;
				cpfCnpj: string;
				postalCode: string;
				addressNumber: string;
				addressComplement?: string;
				phone: string;
				mobilePhone?: string;
			};
			creditCardToken?: string;
			remoteIp: string;
		}
	}

	export namespace TokenizeCreditCard {
		export interface Body {
			creditCardNumber: string;
			creditCardBrand: string;
			creditCardToken: string;
		}
	}

	export namespace ListPayments {
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

	export namespace Update {
		export type Body = Partial<Create.Body>;
	}
}
