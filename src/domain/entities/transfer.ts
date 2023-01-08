import { BankAccount } from './bank-account';
import { Status } from './status';

export interface Transfer {
	object: 'transfer';
	id: string;
	dateCreated: string;
	status: Status.Transfer;
	effectiveDate: string | null;
	endToEndIdentifier: string | null;
	type: 'BANK_ACCOUNT' | 'ASAAS_ACCOUNT';
	value: number;
	netValue: number;
	transferFee: number;
	scheduleDate: string;
	authorized: boolean;
	failReason: string | null;
	bankAccount: BankAccount;
	transactionReceiptUrl: string | null;
	operationType: 'TED' | 'PIX' | 'INTERNAL';
	description: string | null;
}
