import { Status } from './status';

export namespace Refund {
	export type Payment = {
		dateCreated: string;
		status: Status.Refund;
		value: string;
		description: string;
		transactionReceiptUrl: string;
	};
}
