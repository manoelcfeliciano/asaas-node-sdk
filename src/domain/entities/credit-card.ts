export namespace CreditCard {
	export type Input = {
		holderName: string;
		number: string;
		expiryMonth: string;
		expiryYear: string;
		ccv: string;
	};

	export type Response = {
		creditCardNumber: string;
		creditCardBrand: string;
		creditCardToken: string;
	};

	export type HolderInfo = {
		name: string;
		email: string;
		cpfCnpj: string;
		postalCode: string;
		addressNumber: string;
		addressComplement?: string;
		phone: string;
		mobilePhone?: string;
	};
}
