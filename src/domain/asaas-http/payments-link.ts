import { BillingType, ChargeType, Subscription, PaymentLink, PaymentLinkImage } from '../entities';
import { BaseAsaasResponse } from '../entities/base-asaas-response';

import { HttpRequestClient } from '../http-client';
import { DeletedResponse } from './shared/deleted-response';

export namespace PaymentsLinkHttp {
	export namespace Create {
		export type Body = {
			name: string;
			description?: string;
			endDate?: string;
			value?: number;
			billingType: BillingType;
			chargeType: ChargeType;
			dueDateLimitDays?: string;
			subscriptionCycle?: Subscription.Cycle;
			maxInstallmentCount?: number;
			notificationEnabled?: boolean;
		};

		export type Response = HttpRequestClient.Response<PaymentLink>;
	}

	export namespace Update {
		export interface Body extends Partial<Create.Body> {
			active?: boolean;
		}

		export type Response = HttpRequestClient.Response<PaymentLink>;
	}

	export namespace GeyById {
		export type Response = HttpRequestClient.Response<PaymentLink>;
	}

	export namespace GetList {
		export type Params = Partial<{
			active?: boolean;
			includeDeleted?: boolean;
			name?: string;
			offset?: number;
			limit?: number;
		}>;

		export type Response = BaseAsaasResponse.List<PaymentLink>;
	}

	export namespace Remove {
		export type Response = HttpRequestClient.Response<DeletedResponse>;
	}

	export namespace Restore {
		export type Response = HttpRequestClient.Response<PaymentLink>;
	}

	export namespace AddImage {
		export type Response = HttpRequestClient.Response<PaymentLinkImage>;
	}

	export namespace GetImage {
		export type Response = HttpRequestClient.Response<PaymentLinkImage>;
	}

	export namespace GetAllImages {
		export type Response = BaseAsaasResponse.List<PaymentLinkImage>;
	}

	export namespace RemoveImage {
		export type Response = HttpRequestClient.Response<DeletedResponse>;
	}

	export namespace SetMainImage {
		export type Response = HttpRequestClient.Response<PaymentLinkImage>;
	}
}
