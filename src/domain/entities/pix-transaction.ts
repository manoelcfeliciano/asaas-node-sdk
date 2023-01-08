import { Status } from './status';

export interface PixTransaction {
	id: string;
	endToEndIdentifier: string;
	finality: 'WITHDRAWAL' | 'CHANGE';
	value: number;
	changeValue: number | null;
	refundedValue: number;
	effectiveDate: string;
	scheduledDate: string;
	status: Status.PixTransaction;
	type: 'DEBIT' | 'CREDIT' | 'CREDIT_REFUND' | 'DEBIT_REFUND' | 'DEBIT_REFUND_CANCELLATION';
	originType: 'MANUAL' | 'ADDRESS_KEY' | 'STATIC_QRCODE' | 'DYNAMIC_QRCODE' | 'EXTERNAL_DEBIT';
	conciliationIdentifier: string;
	description: string | null;
	transactionReceiptUrl: string | null;
	refusalReason: string | null;
	canBeCanceled: boolean;
	originalTransaction: {
		value: number;
		effectiveDate: string;
	} | null;
	externalAccount: {
		ispb: number;
		ispbName: string;
		name: string;
		cpfCnpj: string;
		addressKey: string;
		addressKeyType: string;
	};
	qrCode: {
		payer: {
			name: string;
			cpfCnpj: string;
		};
		conciliationIdentifier: string;
		originalValue: number;
		dueDate: string;
		interest: number;
		fine: number;
		discount: number;
		expirationDate: string;
	};
	payment: string;
}
