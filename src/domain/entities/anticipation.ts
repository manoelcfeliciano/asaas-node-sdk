import { Status } from './status';

export interface Anticipation {
	object: 'receivableAnticipation';
	id: string;
	installment: string | null;
	payment: string;
	status: Status.Anticipation;
	anticipationDate: string;
	dueDate: string;
	requestDate: string;
	fee: string;
	anticipationDays: string;
	netValue: string;
	totalValue: string;
	value: string;
	denialObservation: string | null;
}
