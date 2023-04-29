import { BillingType } from './billing-type';
import { ChargeType } from './charge-type';
import { Subscription } from './subscription';

export interface PaymentLink {
	id: string;
	name: string;
	value: number;
	active: boolean;
	chargeType: ChargeType;
	url: string;
	billingType: BillingType;
	subscriptionCycle: Subscription.Cycle | null;
	description: string;
	endDate: string;
	deleted: boolean;
	viewCount: number;
	maxInstallmentCount: number;
	dueDateLimitDays: number;
	notificationEnabled: boolean;
}
