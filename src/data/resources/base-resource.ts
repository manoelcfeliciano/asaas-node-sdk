import { BaseResourceConstructor } from '../protocols/base-resource';

export class BaseResource {
	protected readonly httpClient: BaseResourceConstructor['httpClient'];

	constructor({ httpClient }: BaseResourceConstructor) {
		this.httpClient = httpClient;
	}
}
