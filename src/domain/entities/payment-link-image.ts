export interface PaymentLinkImage {
	id: string;
	main: boolean;
	image: {
		publicId: string;
		originalName: string;
		size: number;
		extension: string;
		previewUrl: string;
		downloadUrl: string;
	}
}
