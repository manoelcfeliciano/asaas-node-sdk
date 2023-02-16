import { createMock } from '@golevelup/ts-jest';
import { InstallmentsResource } from '../../../src/data/resources/installments-resource';

const makeSut = () => {
	const httpClientStub = createMock<InstallmentsResource['httpClient']>();

	const sut = new InstallmentsResource({ httpClient: httpClientStub });

	return { sut, httpClientStub };
};

describe('InstallmentsResource', () => {
	it('should be defined', () => {
		const { sut } = makeSut();
		expect(sut).toBeDefined();
	});

	it('should have a httpClient property', () => {
		const { sut, httpClientStub } = makeSut();
		expect(sut).toHaveProperty('httpClient');
		expect((sut as any).httpClient).toBe(httpClientStub);
	});

	describe('getById', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			await sut.getById(id);
			expect(httpClientStub.get).toHaveBeenCalledWith({
				url: `/installments/${id}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const response = await sut.getById(id);
			expect(response).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const error = new Error();
			httpClientStub.get.mockRejectedValueOnce(error);
			const promise = sut.getById(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getAll', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			await sut.getAll();
			expect(httpClientStub.get).toHaveBeenCalledWith({
				url: `/installments`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const response = await sut.getAll();
			expect(response).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const error = new Error();
			httpClientStub.get.mockRejectedValueOnce(error);
			const promise = sut.getAll();
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('remove', () => {
		it('should call httpClient.delete with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			await sut.remove(id);
			expect(httpClientStub.delete).toHaveBeenCalledWith({
				url: `/installments/${id}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const response = await sut.remove(id);
			expect(response).toEqual(httpClientStub.delete.mock.results[0].value);
		});

		it('should throw if httpClient.delete throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const error = new Error();
			httpClientStub.delete.mockRejectedValueOnce(error);
			const promise = sut.remove(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('refund', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			await sut.refund(id);
			expect(httpClientStub.post).toHaveBeenCalledWith({
				url: `/installments/${id}/refund`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const response = await sut.refund(id);
			expect(response).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const error = new Error();
			httpClientStub.post.mockRejectedValueOnce(error);
			const promise = sut.refund(id);
			await expect(promise).rejects.toThrow(error);
		});
	});
});
