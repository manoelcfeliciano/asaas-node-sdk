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
	}

	export namespace Update {
		export type Body = Partial<CustomersHttp.Create.Body>;
	}

	export namespace Remove {
		export type Body = {
			deleted: boolean;
			id: string;
		};
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
	}
}
