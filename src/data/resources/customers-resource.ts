import { Customer } from '~/domain/entities';
import { BaseResource } from './base-resource';

export class CustomersResource extends BaseResource {
	getById(id: string) {
		return this.httpClient.get<{}, Customer>({
			url: `/customers/${id}`,
		});
	}
}
