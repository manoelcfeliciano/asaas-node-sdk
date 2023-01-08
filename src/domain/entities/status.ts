export namespace Status {
	export type Payment =
		| 'PENDING'
		| 'RECEIVED'
		| 'CONFIRMED'
		| 'OVERDUE'
		| 'REFUNDED'
		| 'RECEIVED_IN_CASH'
		| 'REFUND_REQUESTED'
		| 'CHARGEBACK_REQUESTED'
		| 'CHARGEBACK_DISPUTE'
		| 'AWAITING_CHARGEBACK_REVERSAL'
		| 'DUNNING_REQUESTED'
		| 'DUNNING_RECEIVED'
		| 'AWAITING_RISK_ANALYSIS';

	export type Subscription = 'ACTIVE' | 'EXPIRED';

	export type Chargeback = 'REQUESTED' | 'IN_DISPUTE' | 'DISPUTE_LOST' | 'REVERSED' | 'DONE';

	export type Refund = 'PENDING' | 'CANCELLED' | 'DONE';

	export type Transfer = 'PENDING' | 'BANK_PROCESSING' | 'DONE' | 'CANCELLED' | 'FAILED';

	export type Anticipation = 'PENDING' | 'APPROVED' | 'DENIED';

	export type BadCredit =
		| 'PENDING'
		| 'AWAITING_APPROVAL'
		| 'AWAITING_CANCELLATION'
		| 'PROCESSED'
		| 'PAID'
		| 'PARTIALLY_PAID'
		| 'DENIED'
		| 'CANCELLED';

	export type Bill = 'PENDING' | 'BANK_PROCESSING' | 'PAID' | 'FAILED' | 'CANCELLED';

	export type PhoneTopUp = 'WAITING_CRITICAL_ACTION' | 'PENDING' | 'CONFIRMED' | 'CANCELLED';

	export type Invoice =
		| 'SCHEDULED'
		| 'AUTHORIZED'
		| 'PROCESSING_CANCELLATION'
		| 'CANCELED'
		| 'CANCELLATION_DENIED'
		| 'ERROR';

	export type PixKey =
		| 'AWAITING_ACTIVATION'
		| 'ACTIVE'
		| 'AWAITING_DELETION'
		| 'AWAITING_ACCOUNT_DELETION'
		| 'DELETED'
		| 'ERROR';

	export type PixTransaction =
		| 'AWAITING_REQUEST'
		| 'DONE'
		| 'REQUESTED'
		| 'SCHEDULED'
		| 'REFUSED'
		| 'ERROR'
		| 'CANCELLED';
}
