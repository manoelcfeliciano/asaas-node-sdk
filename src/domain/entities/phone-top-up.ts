import { Status } from './status';

export interface PhoneTopUp {
	id: string;
	value: number;
	phoneNumber: string;
	status: Status.PhoneTopUp;
	canBeCancelled: boolean;
	operatorName: string;
}
