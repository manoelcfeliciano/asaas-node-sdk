import { Customer } from '../entities';
import { BaseAsaasResponse } from '../entities/base-asaas-response';
import { HttpRequestClient } from '../http-client';
import { DeletedResponse } from './shared/deleted-response';

export namespace CustomersHttp {
	export namespace Create {
		export type Body = {
			name: string;
			cpfCnpj: string;
			email?: string;
			phone?: string;
			mobilePhone?: string;
			address?: string;
			addressNumber?: string;
			complement?: string;
			province?: string;
			postalCode?: string;
			externalReference?: string;
			notificationDisabled?: boolean;
			additionalEmails?: string;
			municipalInscription?: string;
			stateInscription?: string;
			observations?: string;
			groupName?: string;
		};

		export type Response = HttpRequestClient.Response<Customer>;
	}

	export namespace Update {
		export type Body = Partial<CustomersHttp.Create.Body>;
		export type Response = HttpRequestClient.Response<Customer>;
	}

	export namespace Remove {
		export type Response = HttpRequestClient.Response<DeletedResponse>;
	}

	export namespace GetList {
		export type Params = Partial<{
			name: string;
			email: string;
			cpfCnpj: string;
			groupName: string;
			externalReference: string;
			offset: number;
			limit: number;
		}>;
		export type Response = BaseAsaasResponse.List<Customer>;
	}

	export namespace GetById {
		export type Response = HttpRequestClient.Response<Customer>;
	}

	export namespace Restore {
		export type Response = HttpRequestClient.Response<Customer>;
	}
}
