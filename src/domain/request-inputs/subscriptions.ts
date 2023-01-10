import { BillingType, Discount, Interest, Fine, Subscription, Split } from '../entities';
import { PaymentsRequestInput } from './payments';

export namespace SubscriptionRequestInput {
	export namespace Create {
		export type Body = {
			customer: string;
			billingType: BillingType;
			value: number;
			nextDueDate: string;
			discount?: Discount.Main;
			interest?: Interest;
			fine?: Fine;
			cycle?: Subscription.Cycle;
			description?: string;
			endDate?: string;
			maxPayments?: string;
			externalReference?: string;
			split?: Array<Split>;
		};
	}

	export namespace CreateWithCreditCard {
		export interface Body extends SubscriptionRequestInput.Create.Body {
			creditCard: PaymentsRequestInput.CreateWithCreditCard.Body['creditCard'];
			creditCardHolderInfo: PaymentsRequestInput.CreateWithCreditCard.Body['creditCardHolderInfo'];
			creditCardToken?: string;
			remoteIp: string;
		}
	}

	export namespace Update {
		export interface Body extends Partial<SubscriptionRequestInput.Create.Body> {
			updatePendingPayments?: boolean;
		}
	}

	export namespace ListSubscriptions {
		export type Params = {
			customer: string;
			billingType: BillingType;
			offset: number;
			limit: number;
			includeDeleted: boolean;
			externalReference: string;
		};
	}

	export namespace CreateInvoiceSettings {
		export type Body = {
			municipalServiceId: string;
			municipalServiceCode: string;
			municipalServiceName?: string;
			updatePayment?: string;
			deductions?: number;
			effectiveDatePeriod:
				| 'ON_PAYMENT_CONFIRMATION'
				| 'ON_PAYMENT_DUE_DATE'
				| 'BEFORE_PAYMENT_DUE_DATE'
				| 'ON_DUE_DATE_MONTH'
				| 'ON_NEXT_MONTH';
			receivedOnly?: boolean;
			daysBeforeDueDate?: string;
			observations?: string;
			taxes?: {
				retainIss: boolean;
				iss: number;
				cofins: number;
				csll: number;
				inss: number;
				ir: number;
				pis: number;
			};
		};
	}

	export namespace UpdateInvoiceSettings {
		export type Body = {
			deductions?: number;
			effectiveDatePeriod:
				| 'ON_PAYMENT_CONFIRMATION'
				| 'ON_PAYMENT_DUE_DATE'
				| 'BEFORE_PAYMENT_DUE_DATE'
				| 'ON_DUE_DATE_MONTH'
				| 'ON_NEXT_MONTH';
			receivedOnly?: boolean;
			daysBeforeDueDate?: string;
			observations?: string;
			taxes?: {
				retainIss: boolean;
				iss: number;
				cofins: number;
				csll: number;
				inss: number;
				ir: number;
				pis: number;
			};
		};
	}
}
