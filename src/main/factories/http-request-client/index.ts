
import { HttpRequestClient } from '../../../domain/http-client';
import { AxiosHttpClient } from '../../../infra/http-client/axios-adapter/index';
import { mainConfig } from '../../config/main';
import { AsaasSdkConfig } from '../../protocols/asaas-sdk-config';

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
