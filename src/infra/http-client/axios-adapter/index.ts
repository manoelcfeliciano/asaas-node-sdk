import axios, { AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { HttpRequestClient } from '~/domain/http-client';

export class AxiosHttpClient implements HttpRequestClient {
	private readonly instance: AxiosInstance;

	constructor(defaults?: HttpRequestClient.Defaults) {
		this.instance = axios.create({
			baseURL: defaults?.baseURL,
			headers: defaults?.common?.headers?.reduce((headers, [key, value]) => {
				headers[key] = value;
				return headers;
			}, {} as AxiosRequestHeaders),
		});
	}

	async get({
		url,
		query: params,
		headers,
	}: HttpRequestClient.GetParams): Promise<HttpRequestClient.Response> {
		return this.handleRequest(
			this.instance.get(url, {
				params,
				headers,
			})
		);
	}

	async post({
		url,
		body,
		headers,
	}: HttpRequestClient.PostParams): Promise<HttpRequestClient.Response> {
		return this.handleRequest(
			this.instance.post(url, body, {
				headers,
			})
		);
	}

	async put({
		url,
		body,
		headers,
	}: HttpRequestClient.PutParams): Promise<HttpRequestClient.Response> {
		return this.handleRequest(
			this.instance.put(url, body, {
				headers,
			})
		);
	}

	async delete({
		url,
		query: params,
		headers,
	}: HttpRequestClient.DeleteParams): Promise<HttpRequestClient.Response> {
		return this.handleRequest(
			this.instance.delete(url, {
				params,
				headers,
			})
		);
	}

	private handleRequest = async (
		requestPromise: Promise<AxiosResponse<any, any>>
	): Promise<HttpRequestClient.Response> => {
		try {
			const httpResponse = await requestPromise;
			return {
				statusCode: httpResponse.status,
				body: httpResponse.data,
			};
		} catch (error: any) {
			console.error(error);
			return {
				statusCode: error.response?.status,
				body: error.response?.data,
			};
		}
	};
}
