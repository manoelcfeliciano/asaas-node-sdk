import { BillingType } from './billing-type';
import { Subscription } from './subscription';

export namespace PaymentLink {
	export type ChargeType = 'DETACHED' | 'RECURRENT' | 'INSTALLMENT';

	export type Main = {
		name: string;
		description: string;
		endDate: string;
		value: number;
		billingType: BillingType;
		chargeType: PaymentLink.ChargeType;
		dueDateLimitDays: number;
		subscriptionCycle: Subscription.Cycle | null;
		maxInstallmentCount: number;
		notificationEnabled: boolean;
	};
}
