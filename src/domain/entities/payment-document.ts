export type PaymentDocument = {
	object: string;
	id: string;
	name: string;
	type: 'INVOICE' | 'CONTRACT' | 'MEDIA' | 'DOCUMENT' | 'SPREADSHEET' | 'PROGRAM' | 'OTHER';
	availableAfterPayment: boolean;
	file: {
		publicId: string;
		originalName: string;
		size: number;
		extension: string;
		previewUrl: string;
		downloadUrl: string;
	};
	deleted: boolean;
};
