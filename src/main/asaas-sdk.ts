import { BaseResourceConstructor } from '~/data/protocols/base-resource';
import { CustomersResource } from '~/data/resources/customers-resource';
import { makeHttpRequestClient } from './factories/http-request-client';
import { AsaasSdkConfig } from './protocols/asaas-sdk-config';
import { PaymentsResource } from '../data/resources/payments-resource';

export class AsaasSdk {
	private readonly _customers: CustomersResource;
	private readonly _payments: PaymentsResource;

	constructor(config: AsaasSdkConfig) {
		const httpClient = makeHttpRequestClient(config);
		const resourceConstructor: BaseResourceConstructor = {
			httpClient: httpClient,
		};

		this._customers = new CustomersResource(resourceConstructor);
		this._payments = new PaymentsResource(resourceConstructor);
	}

	get customers() {
		return this._customers;
	}

	get payments() {
		return this._payments;
	}
}
