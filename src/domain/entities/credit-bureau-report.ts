export interface CreditBureauReport {
	id: string;
	dateCreated: string;
	cpfCnpj: string;
	state: string;
	customer: string;
	downloadUrl: string;
	reportFile: string;
}
