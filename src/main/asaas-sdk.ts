import { BaseResourceConstructor } from '~/data/protocols/base-resource';
import { CustomersResource } from '~/data/resources/customers-resource';
import { AxiosHttpClient } from '../infra/http-client/axios-adapter/index';
import { AsaasSdkConfig } from './protocols/asaas-sdk-config';

export class AsaasSdk {
	private readonly _customers: CustomersResource;

	constructor(config: AsaasSdkConfig) {
		const httpClient = new AxiosHttpClient();
		const resourceConstructor: BaseResourceConstructor = {
			httpClient: httpClient,
		};

		this._customers = new CustomersResource(resourceConstructor);
	}

	get customers() {
		return this._customers;
	}
}
