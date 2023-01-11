export type Environments = 'production' | 'sandbox';

export interface AsaasSdkConfig {
	accessToken: string;
	environment: Environments;
	baseUri?: string;
}
