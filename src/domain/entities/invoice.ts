import { Status } from './status';

export interface Invoice {
	object: 'invoice';
	id: string;
	status: Status.Invoice;
	customer: string;
	type: 'NFS-e';
	statusDescription: null;
	serviceDescription: string;
	pdfUrl: null;
	xmlUrl: null;
	rpsSerie: null;
	rpsNumber: null;
	number: null;
	validationCode: null;
	value: number;
	deductions: number;
	effectiveDate: string;
	observations: string;
	estimatedTaxesDescription: string;
	payment: string;
	installment: null;
	externalReference: null;
	taxes: {
		retainIss: boolean;
		iss: number;
		cofins: number;
		csll: number;
		inss: number;
		ir: number;
		pis: number;
	};
	municipalServiceCode: string;
	municipalServiceName: string;
}
