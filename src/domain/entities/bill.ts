import { Status } from './status';

export interface Bill {
	object: 'bill';
	id: string;
	status: Status.Bill;
	value: number;
	discount: number;
	interest: number;
	fine: number;
	identificationField: string;
	dueDate: string;
	scheduleDate: string;
	paymentDate: string | null;
	fee: number;
	description: string;
	companyName: string | null;
	transactionReceiptUrl: string;
	canBeCancelled: boolean;
	failReasons: null;
}
