import { HttpRequestClient } from '~/domain/http-client';
import { AsaasSdkConfig } from '~/main/protocols/asaas-sdk-config';
import { AxiosHttpClient } from '../../../infra/http-client/axios-adapter/index';
import { mainConfig } from '../../config/main';

export const makeHttpRequestClient = (config: AsaasSdkConfig): HttpRequestClient => {
	return new AxiosHttpClient({
		baseURL: getBaseURL(config),
		common: {
			headers: [['access_token', config.accessToken]],
		},
	});
};

const getBaseURL = (config: AsaasSdkConfig) => {
	const { production, sandbox } = mainConfig.urls;

	const urls = {
		production,
		sandbox,
	};

	return config.baseUri || urls[config.environment];
};
