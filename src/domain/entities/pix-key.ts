import { Status } from './status';

export interface PixType {
	id: string;
	key: string;
	type: 'CPF' | 'CNPJ' | 'EMAIL' | 'PHONE' | 'EVP';
	status: Status.PixKey;
	dateCreated: string;
	canBeDeleted: boolean;
	cannotBeDeletedReason: string | null;
	qrCode: {
		encodedImage: string;
		payload: string;
	};
}
