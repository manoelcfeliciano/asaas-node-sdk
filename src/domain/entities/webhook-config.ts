export interface WebhookConfig {
	object: 'webhook';
	url: string;
	email: string;
	enabled: boolean;
	interrupted: boolean;
	apiVersion: number;
	authToken: string;
}
