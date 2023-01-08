import { BillingType } from './billing-type';
import { Chargeback } from './chargeback';

export interface Installment {
	object: 'installment';
	id: string;
	value: number;
	netValue: number;
	paymentValue: number;
	installmentCount: number;
	billingType: BillingType;
	paymentDate: string | null;
	description: string;
	expirationDay: number;
	deleted: false;
	dateCreated: string;
	customer: string;
	paymentLink: string;
	transactionReceiptUrl: string | null;
	chargeback: Chargeback.Main;
}
