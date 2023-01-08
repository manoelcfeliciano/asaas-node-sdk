import { Status } from './status';

export interface BadCredit {
	id: string;
	dunningNumber: number;
	status: Status.BadCredit;
	type: 'CREDIT_BUREAU';
	requestDate: string;
	description: string;
	value: number;
	feeValue: number;
	netValue: number;
	receivedInCashFeeValue: number;
	denialReason: string | null;
	cancellationFeeValue: number;
	canBeCancelled: boolean;
	cannotBeCancelledReason: string | null;
	isNecessaryResendDocumentation: boolean;
	payment: string;
}
