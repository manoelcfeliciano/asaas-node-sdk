import {
	BillingType,
	Chargeback,
	Discount,
	Fine,
	Interest,
	Status,
	Refund as RefundEntity,
	Split,
	CreditCard,
	Installment,
} from '../entities';
import { BaseAsaasResponse } from '../entities/base-asaas-response';
import { HttpRequestClient } from '../http-client';
import { DeletedResponse } from './shared/deleted-response';

export namespace InstallmentsHttp {
	export namespace Refund {
		export type Body = {
			id: string;
			dateCreated: string;
			customer: string;
			paymentLink: string;
			subscription: string;
			installment: string;
			dueDate: string;
			value: number;
			netValue: number;
			discount: Discount.Main;
			interest: Interest;
			fine: Fine;
			billingType: BillingType;
			canBePaidAfterDueDate: boolean;
			status: Status.Payment;
			pixTransaction: string;
			description: string;
			externalReference: string;
			originalDueDate: string;
			originalValue: number;
			interestValue: number;
			confirmedDate: string;
			paymentDate: string;
			clientPaymentDate: string;
			installmentNumber: string;
			invoiceUrl: string;
			bankSlipUrl: string;
			transactionReceiptUrl: string;
			invoiceNumber: string;
			deleted: boolean;
			postalService: boolean;
			anticipated: boolean;
			split: Split;
			chargeback: Chargeback.Main;
			refunds: RefundEntity.Payment[];
			municipalInscription: string;
			stateInscription: string;
			canDelete: string;
			cannotBeDeletedReason: string;
			canEdit: string;
			cannotEditReason: string;
			creditCard: CreditCard.Input;
		};
	}

	export namespace GetList {
		export type Params = Partial<{
			offset: number;
			limit: number;
		}>;
		export type Response = BaseAsaasResponse.List<Installment>;
	}

	export namespace GetById {
		export type Response = HttpRequestClient.Response<Installment>;
	}

	export namespace Remove {
		export type Response = HttpRequestClient.Response<DeletedResponse>;
	}

	export namespace Refund {
		export type Response = HttpRequestClient.Response<Installment>;
	}
}
