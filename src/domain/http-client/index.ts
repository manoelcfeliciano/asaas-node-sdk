export type HttpRequestClient = HttpRequestClient.Get &
	HttpRequestClient.Post &
	HttpRequestClient.Put &
	HttpRequestClient.Delete;

export namespace HttpRequestClient {
	export type Defaults = {
		baseURL?: string;
		common?: {
			headers?: Array<[string, string]>;
		};
	};

	export interface Response<R = any> {
		statusCode: number;
		body?: R;
	}

	export interface BaseParams<B = any, Q = any> {
		url: string;
		headers?: any;
		query?: Q;
		body?: B;
	}

	export type GetParams<Q = any> = BaseParams<undefined, Q>;

	export interface Get<Q = any, R = any> {
		get: (params: GetParams<Q>) => Promise<Response<R>>;
	}

	export type PostParams<B = any> = BaseParams<B, undefined>;

	export interface Post<B = any, R = any> {
		post: (params: PostParams<B>) => Promise<Response<R>>;
	}

	export type PutParams<B = any> = BaseParams<B, undefined>;

	export interface Put<B = any, R = any> {
		put: (params: PutParams<B>) => Promise<Response<R>>;
	}

	export type DeleteParams<Q = any> = BaseParams<undefined, Q>;

	export interface Delete<Q = any, R = any> {
		delete: (params: DeleteParams<Q>) => Promise<Response<R>>;
	}

	export type Method = keyof HttpRequestClient;
}
