import { BaseResourceConstructor } from '~/data/protocols/base-resource';
import { CustomersResource } from '~/data/resources/customers-resource';
import { makeHttpRequestClient } from './factories/http-request-client';
import { AsaasSdkConfig } from './protocols/asaas-sdk-config';
import { PaymentsResource } from '../data/resources/payments-resource';
import { InstallmentsResource } from '~/data/resources/installments-resource';

export class AsaasSdk {
	private readonly _customers: CustomersResource;
	private readonly _payments: PaymentsResource;
	private readonly _installments: InstallmentsResource;

	constructor(config: AsaasSdkConfig) {
		const httpClient = makeHttpRequestClient(config);
		const resourceConstructor: BaseResourceConstructor = {
			httpClient: httpClient,
		};

		this._customers = new CustomersResource(resourceConstructor);
		this._payments = new PaymentsResource(resourceConstructor);
		this._installments = new InstallmentsResource(resourceConstructor);
	}

	get customers() {
		return this._customers;
	}

	get payments() {
		return this._payments;
	}

	get installments() {
		return this._installments;
	}
}
