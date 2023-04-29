import { createMock } from '@golevelup/ts-jest';
import { PaymentLinksResource } from '../../../src/data/resources/payment-links-resource';
import FormData from 'form-data';
const makeSut = () => {
	const httpClientStub = createMock<PaymentLinksResource['httpClient']>();

	const sut = new PaymentLinksResource({ httpClient: httpClientStub });

	return { sut, httpClientStub };
};

describe('PaymentLinksResource', () => {
	it('should be defined', () => {
		const { sut } = makeSut();
		expect(sut).toBeDefined();
	});

	it('should have a httpClient property', () => {
		const { sut, httpClientStub } = makeSut();
		expect(sut).toHaveProperty('httpClient');
		expect((sut as any).httpClient).toBe(httpClientStub);
	});

	describe('create', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				name: 'Test Link',
				billingType: 'UNDEFINED',
				chargeType: 'DETACHED',
			} as any;

			await sut.create(params);

			expect(httpClientStub.post).toBeCalledWith({
				url: '/paymentLinks',
				body: params,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				name: 'Test Link',
				billingType: 'UNDEFINED',
				chargeType: 'DETACHED',
			} as any;

			const result = await sut.create(params);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});
	});

	describe('update', () => {
		it('should call httpClient.put with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const params = {
				name: 'Test Link',
				billingType: 'UNDEFINED',
				chargeType: 'DETACHED',
			} as any;

			await sut.update(id, params);

			expect(httpClientStub.put).toBeCalledWith({
				url: `/paymentLinks/${id}`,
				body: params,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const params = {
				name: 'Test Link',
				billingType: 'UNDEFINED',
				chargeType: 'DETACHED',
			} as any;

			const result = await sut.update(id, params);

			expect(result).toEqual(httpClientStub.put.mock.results[0].value);
		});

		it('should throw if httpClient.put throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const params = {
				name: 'Test Link',
				billingType: 'UNDEFINED',
				chargeType: 'DETACHED',
			} as any;
			const error = new Error();
			httpClientStub.put.mockRejectedValueOnce(error);
			const promise = sut.update(id, params);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getById', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.getById(id);

			expect(httpClientStub.get).toBeCalledWith({
				url: `/paymentLinks/${id}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.getById(id);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const error = new Error();
			httpClientStub.get.mockRejectedValueOnce(error);
			const promise = sut.getById(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getAll', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				name: 'Test Link',
			} as any;

			await sut.getAll(params);

			expect(httpClientStub.get).toBeCalledWith({
				url: '/paymentLinks',
				query: params,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				name: 'Test Link',
			} as any;

			const result = await sut.getAll(params);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				name: 'Test Link',
			} as any;
			const error = new Error();
			httpClientStub.get.mockRejectedValueOnce(error);
			const promise = sut.getAll(params);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('remove', () => {
		it('should call httpClient.delete with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.remove(id);

			expect(httpClientStub.delete).toBeCalledWith({
				url: `/paymentLinks/${id}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.remove(id);

			expect(result).toEqual(httpClientStub.delete.mock.results[0].value);
		});

		it('should throw if httpClient.delete throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const error = new Error();
			httpClientStub.delete.mockRejectedValueOnce(error);
			const promise = sut.remove(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('restore', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.restore(id);

			expect(httpClientStub.post).toBeCalledWith({
				url: `/paymentLinks/${id}/restore`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.restore(id);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const error = new Error();
			httpClientStub.post.mockRejectedValueOnce(error);
			const promise = sut.restore(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('addImage', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const formData = new FormData();
			formData.append('file', '');

			await sut.addImage(id, formData);

			expect(httpClientStub.post).toBeCalledWith({
				url: `/paymentLinks/${id}/images`,
				body: formData,
				headers: { 'Content-Type': 'multipart/form-data' },
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const formData = new FormData();
			formData.append('file', '');

			const result = await sut.addImage(id, formData);
			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});
	});

	describe('getImage', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const imageId = '321';

			await sut.getImage(id, imageId);

			expect(httpClientStub.get).toBeCalledWith({
				url: `/paymentLinks/${id}/images/${imageId}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const imageId = '321';

			const result = await sut.getImage(id, imageId);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const imageId = '321';

			const error = new Error();

			httpClientStub.get.mockRejectedValueOnce(error);

			const promise = sut.getImage(id, imageId);

			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getAllImages', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.getAllImages(id);

			expect(httpClientStub.get).toBeCalledWith({
				url: `/paymentLinks/${id}/images`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.getAllImages(id);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const error = new Error();

			httpClientStub.get.mockRejectedValueOnce(error);

			const promise = sut.getAllImages(id);

			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('removeImage', () => {
		it('should call httpClient.delete with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const imageId = '321';

			await sut.removeImage(id, imageId);

			expect(httpClientStub.delete).toBeCalledWith({
				url: `/paymentLinks/${id}/images/${imageId}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const imageId = '321';

			const result = await sut.removeImage(id, imageId);

			expect(result).toEqual(httpClientStub.delete.mock.results[0].value);
		});

		it('should throw if httpClient.delete throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const imageId = '321';

			const error = new Error();

			httpClientStub.delete.mockRejectedValueOnce(error);

			const promise = sut.removeImage(id, imageId);

			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('setMainImage', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const imageId = '321';

			await sut.setMainImage(id, imageId);

			expect(httpClientStub.post).toBeCalledWith({
				url: `/paymentLinks/${id}/images/${imageId}/setAsMain`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const imageId = '321';

			const result = await sut.setMainImage(id, imageId);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const imageId = '321';

			const error = new Error();

			httpClientStub.post.mockRejectedValueOnce(error);

			const promise = sut.setMainImage(id, imageId);

			await expect(promise).rejects.toThrow(error);
		});
	});
});
