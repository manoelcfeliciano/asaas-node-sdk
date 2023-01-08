export interface AsaasAccount {
	object: 'account';
	id: string;
	name: string;
	email: string;
	loginEmail: string;
	phone: string;
	mobilePhone: string;
	address: string;
	addressNumber: string;
	complement: string;
	province: string;
	postalCode: string;
	cpfCnpj: string;
	birthDate: string | null;
	personType: string;
	companyType: string;
	city: number;
	state: string;
	country: string;
	walletId: string;
}
