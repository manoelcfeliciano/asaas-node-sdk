export namespace BaseAsaasResponse {
	export type List<T = any> = {
		object: 'list';
		hasMore: boolean;
		totalCount: number;
		limit: number;
		offset: number;
		data: Array<T>;
	};
}
