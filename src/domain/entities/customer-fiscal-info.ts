export interface CustomerFiscalInfo {
	object: 'customerFiscalInfo';
	simplesNacional: boolean;
	rpsSerie: string;
	rpsNumber: number;
	loteNumber: number;
	username: string;
	passwordSent: boolean;
	accessTokenSent: boolean;
	certificateSent: boolean;
	specialTaxRegime: string;
	email: string;
	serviceListItem: string | null;
	cnae: string;
	culturalProjectsPromoter: boolean;
	municipalInscription: string;
	stateInscription: null;
}
