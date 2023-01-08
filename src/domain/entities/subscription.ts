import { BillingType } from './billing-type';
import { Discount } from './discount';
import { Fine } from './fine';
import { Interest } from './interest';
import { Status } from './status';

export namespace Subscription {
	export type Cycle = 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUALLY' | 'YEARLY';

	export type Main = {
		object: 'subscription';
		id: string;
		dateCreated: string;
		customer: string;
		paymentLink: null;
		billingType: BillingType;
		cycle: Subscription.Cycle;
		value: number;
		nextDueDate: string;
		description: string;
		status: Status.Subscription;
		discount: Discount.Main;
		fine: Fine;
		interest: Interest;
		deleted: false;
	};
}
