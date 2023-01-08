export interface BankAccount {
	bank: {
		code: string;
		name: string;
	};
	accountName: string;
	ownerName: string;
	cpfCnpj: string;
	agency: string;
	agencyDigit: string;
	account: string;
	accountDigit: string;
}
