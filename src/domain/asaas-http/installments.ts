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
} from '../entities';

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
			creditCard: CreditCard;
		};
	}
}
