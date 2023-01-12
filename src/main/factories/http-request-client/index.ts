import { HttpRequestClient } from '~/domain/http-client';
import { AsaasSdkConfig } from '~/main/protocols/asaas-sdk-config';
import { AxiosHttpClient } from '../../../infra/http-client/axios-adapter/index';

export const makeHttpRequestClient = (config: AsaasSdkConfig): HttpRequestClient => {
	return new AxiosHttpClient({
		baseURL: getBaseURL(config),
		common: {
			headers: [['access_token', config.accessToken]],
		},
	});
};

const getBaseURL = (config: AsaasSdkConfig) => {
	const urls = {
		production: 'https://www.asaas.com/api/v3',
		sandbox: 'https://sandbox.asaas.com/api/v3',
	};

	return config.baseUri || urls[config.environment];
};
